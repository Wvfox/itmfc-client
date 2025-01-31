import cn from 'classnames'
import { SERVER_URL } from 'config/constants'
import { useEffect, useState } from 'react'
import { PublishService } from 'services/Publish.service'
import Meta from 'shared/Meta/Meta'
import styles from '../Publish.module.scss'
import usePublish from '../usePublish'

export default function StreamPublish({ tab, area }) {
	const { downloadFile } = usePublish()
	const [currentClip, setCurrentClip] = useState('')
	const [isChange, setIsChange] = useState(true)

	const catchErrorPlayer = rejected => {
		setCurrentClip('')
		console.log(`rejected - ${rejected}`)
		// location.reload()
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
				// Установка ссылки для подкачки
				// console.log(`set-clip - ${list[order]['media']}`)
				setCurrentClip(`${SERVER_URL}/file/${list[order]['media']}`)
				// Проверка наличия файла локально
				// PublishService.checkLocalClip(list[order]['id']).then(response => {
				// 	// Если видео есть локально
				// 	if (response.status === 200) {
				// 		console.log(
				// 			`Find local clip - ${list[order]['media'].split('/')[4]}`
				// 		)
				// 		setCurrentClip(`/clips/${list[order]['media'].split('/')[4]}`)
				// 	}
				// 	// Если видео нету локально
				// 	if (response.status === 404) {
				// 		// Передача ссылки clip-uploader для скачивания видео
				// 		console.log(
				// 			`download - ${list[order]['id']} - ${list[order]['media']}`
				// 		)
				// 		downloadFile(list[order]['media'], list[order]['id'], 'text/plain')
				// 	}
				// })
				// Запуск видео после заставки
				setTimeout(() => {
					// Выключение заставки
					setIsChange(false)
					// Запуск ролика
					console.log(`play - ${list[order]['id']}`)
					document
						.querySelector('#videoClip')
						.play()
						.catch(error => {
							console.log(error)
							console.log(`wrong - ${list[order]['id']}`)
							PublishService.wrongClip(list[order]['id'])
							// location.reload()
						})
					// Запуск следующего ролика после окончания ролика
					setTimeout(() => {
						clipPlayer(order + 1, list, status)
					}, list[order]['duration'] * 1000 + 2000)
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
					src={currentClip}
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
