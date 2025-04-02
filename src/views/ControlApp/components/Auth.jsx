import { useForm } from 'react-hook-form'
import styles from '../Control.module.scss'

export default function AuthControl() {
	const { handleSubmit, register } = useForm()

	const onSubmit = data => {
		// console.log(data)
		if (data.token) {
			localStorage.setItem('AUS', data.token)
			location.reload()
		}
	}

	return (
		<div className={styles.auth}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label className={styles.auth__label}>
					<h5 className={styles.auth__title}>Ключ доступа</h5>
					<input {...register('token')} type='text' autoComplete='off' />
					<button className={styles.auth__button}>Отправить</button>
				</label>
			</form>
		</div>
	)
}
