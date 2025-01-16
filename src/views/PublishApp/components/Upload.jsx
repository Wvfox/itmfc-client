import { useForm } from "react-hook-form";
import Layout from "shared/Layout/Layout";
import styles from '../Publish.module.scss'
import { useEffect, useState } from "react";
import usePublish from "../usePublish";

export default function UploadPublish({tab}) {
    const { register, handleSubmit, setFocus, reset } = useForm()
    const {createClipAsync} = usePublish()
    const [fileSrc, setFileSrc] = useState('')
    const [fileName, setFileName] = useState('Выберите файл')


    const onCreate = (data) => {
        data = {...data, 'expiration_date': `${data['year']}-${data['month']}-${data['day']}`, 'media': data['media'][0]}
        console.log(data);
		createClipAsync(data);
        reset()
        setFileSrc('')
        setFileName('Выберите файл')
    }
    const handleFile = (e) => {
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

    const onChangeDay = e => {
        if (e.target.value.length === 2) {
            setFocus('month')
        }
    } 
    const onChangeMonth = e => {
        if (e.target.value.length === 2) {
            setFocus('year')
        }
    } 
    const onChangeYear = e => {
        if (e.target.value.length > 4) {
            e.target.value = e.target.value.slice(0, 4)
        }
    } 

    useEffect(() => {
        setFocus('name')
    }, [])

    return (
        <Layout tab={tab} title='Загрузка видео'>
            <form className={styles.form} onSubmit={handleSubmit(onCreate)} encType="multipart/form-data" >

            {/* Название */}
            <label className={styles.field}>
                <h4 className={styles.field__title}>Title</h4>
                <input {...register('name')} type='text' autoComplete="off"/>
            </label>

            {/* Срок действия */}
            <div className={styles.period}>
                <h4 className={styles.field__title}>Период действия</h4>
                <input {...register('day')} type='text' onChange={e => onChangeDay(e)} autoComplete="off"/>
                <input {...register('month')} type='text' onChange={e => onChangeMonth(e)} autoComplete="off"/>
                <input {...register('year')} type='text'onChange={e => onChangeYear(e)} autoComplete="off"/>
            </div>

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

            <button className={styles.submit}>Отправить</button>


            </form>
        </Layout>
    )
}