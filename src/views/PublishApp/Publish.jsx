import { SERVER_URL } from 'config/constants'
import { useEffect, useState } from 'react'
import { PublishService } from 'services/Publish.service'
import Meta from 'shared/Meta/Meta'
import styles from './Publish.module.scss'

export default function Publish({ tab }) {
	const [currentClip, setCurrentClip] = useState('')

	const catchErrorPlayer = rejected => {
		setCurrentClip('')
		console.log(rejected)
	}

	const startClipPlayer = () => {
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
		PublishService.checkNonstopClip('voskresensk')
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
					document.querySelector('#videoClip').play()
					// Запуск следующего ролика после окончания ролика
					setTimeout(() => {
						clipPlayer(order + 1, list, status)
					}, list[order]['duration'] * 1000)
				}, 5_000)
			})
			.catch(rejected => {
				catchErrorPlayer(rejected)
				return
			})
	}

	// Первая загрузка страницы
	useEffect(() => {
		startClipPlayer()
	}, [])

	return (
		<Meta tab={tab}>
			<main className={styles.container}>
				<video
					id='videoClip'
					muted
					src={`${SERVER_URL}/file/${currentClip}`}
					className={styles.clip}
				/>
			</main>
		</Meta>
	)
}
