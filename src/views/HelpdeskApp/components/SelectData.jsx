import { useSearchParams } from 'next/navigation'
import styles from '../Helpdesk.module.scss'

export default function SelectDataHelpdesk({ category, description }) {
	const searchParams = useSearchParams()

	return (
		<ul className={styles.selectData}>
			{searchParams && searchParams.get('username') && (
				<li className={styles.selectData__items}>
					<h3 className={styles.selectData__caption}>Пользователь: </h3>
					<p className={styles.selectData__text}>
						{searchParams.get('username')}
					</p>
				</li>
			)}
			{searchParams && searchParams.get('workstation') && (
				<li className={styles.selectData__items}>
					<h3 className={styles.selectData__caption}>Рабочее место: </h3>
					<p className={styles.selectData__text}>
						{searchParams.get('workstation')}
					</p>
				</li>
			)}
			{category && (
				<li className={styles.selectData__items}>
					<h3 className={styles.selectData__caption}>Категория: </h3>
					<p className={styles.selectData__text}>{category}</p>
				</li>
			)}
			{description && (
				<li className={styles.selectData__items}>
					<h3 className={styles.selectData__caption}>Описание: </h3>
					<p className={styles.selectData__text}>{description}</p>
				</li>
			)}
		</ul>
	)
}
