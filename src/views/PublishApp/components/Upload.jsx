import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Layout from 'shared/Layout/Layout'
import { handleInputOnlyNumber } from 'utils/handleInput/handleInput'
import styles from '../Publish.module.scss'
import usePublish from '../usePublish'

export default function UploadPublish({ tab }) {
	const { register, handleSubmit, setFocus, reset, setValue } = useForm()
	const {
		fileSrc,
		setFileSrc,
		fileName,
		setFileName,
		isClearUpload,
		setIsClearUpload,
		isSubmit,
		handleFile,
		onCreate,
	} = usePublish()

	// Функция обработки поля даты-дня
	const onChangeDay = e => {
		if (e.target.value.length === 2) {
			setFocus('month')
		}
		if (e.target.value.length > 2) {
			e.target.value = e.target.value.slice(0, 2)
		}
	}
	// Функция обработки поля даты-месяца
	const onChangeMonth = e => {
		if (e.target.value.length === 2) {
			setFocus('year')
		}
		if (e.target.value.length > 2) {
			e.target.value = e.target.value.slice(0, 2)
		}
	}
	// Функция обработки поля даты-года
	const onChangeYear = e => {
		if (e.target.value.length > 4) {
			e.target.value = e.target.value.slice(0, 4)
		}
	}

	useEffect(() => {
		if (isClearUpload) {
			reset()
			setFileSrc('')
			setFileName('Выберите файл')
			setIsClearUpload(false)
			setValue('cypher', localStorage.getItem('cypher'))
		}
	}, [isClearUpload])
	useEffect(() => {
		setValue('cypher', localStorage.getItem('cypher'))
		setFocus('name')
	}, [])

	return (
		<Layout tab={tab} title='Загрузка видео'>
			<form
				className={styles.form}
				onSubmit={handleSubmit(onCreate)}
				encType='multipart/form-data'
			>
				{/* Название */}
				<label className={styles.field}>
					<h4 className={styles.field__title}>Название</h4>
					<input {...register('name')} type='text' autoComplete='off' />
				</label>
				{/* Срок действия */}
				<div className={styles.period}>
					<h4 className={styles.field__title}>Период действия</h4>
					<input
						{...register('day')}
						type='text'
						onChange={e => onChangeDay(e)}
						autoComplete='off'
					/>
					<input
						{...register('month')}
						type='text'
						onChange={e => onChangeMonth(e)}
						autoComplete='off'
					/>
					<input
						{...register('year')}
						type='text'
						onChange={e => onChangeYear(e)}
						autoComplete='off'
					/>
				</div>
				{/* Продолжительность */}
				<label className={styles.field}>
					<h4 className={styles.field__title}>Продолжительность</h4>
					<input
						{...register('duration')}
						type='text'
						autoComplete='off'
						onChange={event => handleInputOnlyNumber(event)}
					/>
				</label>
				{/* Файл */}
				<label className={styles.media} onChange={e => handleFile(e)}>
					<input {...register('media')} type='file' />
					<h4 className={styles.field__title}>Видео-файл</h4>
					<div className={styles.media__container}>
						<div className={styles.media__image}>
							<video src={fileSrc} />
						</div>
						<div className={styles.media__caption}>
							<span className={styles.media__fileName}>{fileName}</span>
						</div>
					</div>
				</label>
				{/* Код */}
				<label className={styles.field}>
					<h4 className={styles.field__title}>Кодовая фраза</h4>
					<input {...register('cypher')} type='text' autoComplete='off' />
				</label>

				<button className={styles.submit} disabled={isSubmit}>
					Отправить
				</button>
			</form>
		</Layout>
	)
}
