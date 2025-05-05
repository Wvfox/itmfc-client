import { useState } from 'react'
import { useMutation } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { PublishService } from 'services/Publish.service'
import { checkResponseStatus } from 'utils/checkResponse'
import { encrypt_aes } from 'utils/Cypher/cypher'

export default function usePublish() {
	const [fileSrc, setFileSrc] = useState('')
	const [fileName, setFileName] = useState('Выберите файл')
	const [isClearUpload, setIsClearUpload] = useState(false)
	const [isSubmit, setIsSubmit] = useState(false)

	// const queryData = useQuery('Clips list', () => PublishService.getAllClips(), {
	// 	select: ({ data }) => data,
	// })

	const { mutateAsync: createClipAsync } = useMutation(
		'create clip publish',
		data =>
			PublishService.createClip(data).then(response => {
				if (checkResponseStatus(response)) {
					toastr.success('Успешно', 'Клип загружен на сервер.')
					setIsClearUpload(true)
				} else {
					toastr.error('Неудача', 'Что-то пошло не так...')
					console.log(response)
				}
				setIsSubmit(false)
			})
	)
	// Функция обработки файла
	const handleFile = e => {
		// Получение файла
		const file = e.target.files[0]
		// Создание обработчика файла
		const reader = new FileReader()
		// После успешной загрузки передача пути к файлу
		reader.onloadend = event => {
			setFileSrc(event.target.result)
		}
		if (file) {
			// Чтение файла
			reader.readAsDataURL(file)
			// Установка имени файла
			setFileName(e.target.value.split('\\').pop())
		}
	}
	// Функция для скачивания файла
	const downloadFile = (fileData, fileName, mimeType) => {
		const blob = new Blob([fileData], { type: mimeType })
		const link = document.createElement('a')
		link.href = URL.createObjectURL(blob)
		link.download = fileName
		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)
	}
	// Функция для создания клипа и отправки запроса
	const onCreate = data => {
		localStorage.setItem('cypher', data['cypher'])
		data['cypher'] = encrypt_aes(data['cypher'])
		data = {
			...data,
			expiration_date: `${data['year']}-${data['month']}-${data['day']}`,
			media: data['media'][0],
		}
		// console.log(data)
		setIsSubmit(true)
		createClipAsync(data)
	}

	return {
		fileSrc,
		setFileSrc,
		fileName,
		setFileName,
		isClearUpload,
		setIsClearUpload,
		isSubmit,
		// queryData,
		createClipAsync,
		handleFile,
		downloadFile,
		onCreate,
	}
}
