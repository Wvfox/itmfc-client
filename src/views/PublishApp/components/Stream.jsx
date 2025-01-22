import cn from 'classnames'
import { SERVER_URL } from 'config/constants'
import { useEffect, useState } from 'react'
import { PublishService } from 'services/Publish.service'
import Meta from 'shared/Meta/Meta'
import styles from '../Publish.module.scss'

export default function StreamPublish({ tab, area }) {
	const [currentClip, setCurrentClip] = useState('')
	const [isChange, setIsChange] = useState(true)

	const catchErrorPlayer = rejected => {
		setCurrentClip('')
		console.log(`rejected - ${rejected}`)
	}
	const startClipPlayer = () => {
		// Включение заставки
		setIsChange(true)
		let status = 'main'
		// Получение актуального списка с сервера
		PublishService.getAllClipsShuffle()
			.then(resolve => {
				clipPlayer(0, resolve.data, status)
			})
			.catch(rejected => {
				catchErrorPlayer(rejected)
				return
			})
	}
	const clipPlayer = (order, list, status) => {
		try {
			// Включение заставки
			setIsChange(true)
			PublishService.checkNonstopClip(area)
				.then(resolve => {
					// ===== Флаги =====
					if (
						// Переход main -> nonstop
						(resolve?.data.length && status !== 'nonstop') ||
						// Последний элемент цикла nonstop
						(resolve?.data.length &&
							status === 'nonstop' &&
							order === list.length)
					) {
						status = 'nonstop'
						clipPlayer(0, resolve.data, status)
						return
					}
					if (
						// Переход nonstop -> main
						(!resolve?.data.length && status == 'nonstop') ||
						// Последний элемент цикла main
						(order === list.length && status === 'main')
					) {
						startClipPlayer()
						return
					}
					// ===== Основное тело функции =====
					// console.log('play')
					// Установка ссылки для подкачки
					setCurrentClip(list[order]['media'])
					// Запуск видео после заставки
					setTimeout(() => {
						// Выключение заставки
						setIsChange(false)
						// Запуск ролика
						try {
							console.log(`play - ${list[order]['id']}`)
							document.querySelector('#videoClip').play()
						} catch (e) {
							console.log(e)
							console.log(`wrong - ${list[order]['id']}`)
							PublishService.wrongClip(list[order]['id'])
							location.reload()
						}
						// Запуск следующего ролика после окончания ролика
						setTimeout(() => {
							clipPlayer(order + 1, list, status)
						}, list[order]['duration'] * 1000)
						// Включение заставки до окончания видео
						setTimeout(() => {
							setIsChange(true)
						}, list[order]['duration'] * 1000 - 500)
					}, 4_000)
				})
				.catch(rejected => {
					catchErrorPlayer(rejected)
					return
				})
		} catch {
			console.log(`clip-catch`)
			location.reload()
		}
	}

	// Первая загрузка страницы
	useEffect(() => {
		startClipPlayer()
	}, [])

	return (
		<Meta tab={tab}>
			<main className={styles.stream__container}>
				<video
					id='videoClip'
					muted
					src={`${SERVER_URL}/file/${currentClip}`}
					className={styles.stream__clip}
				/>
				<img
					src='/images/logo.jpg'
					className={cn(styles.stream__logo, {
						[styles.stream__logo_show]: isChange,
					})}
				/>
			</main>
		</Meta>
	)
}
