import cn from 'classnames'
import styles from '../Control.module.scss'

export default function OperatorControl({ operator }) {
	return (
		<section className={styles.list__container}>
			<ul className={styles.list__row}>
				<li className={cn(styles.list__item, styles.list__item_header)}>
					<h4 className={cn(styles.list__value, styles.list__value_header)}>
						{operator.name}
					</h4>
				</li>
			</ul>
			<ul className={styles.list__row}>
				<li className={styles.list__item}>
					<h5 className={styles.list__caption}>ID:</h5>
					<h4 className={styles.list__value}>{operator.id}</h4>
				</li>
				<li className={styles.list__item}>
					<h5 className={styles.list__caption}>Логин:</h5>
					<h4 className={styles.list__value}>{String(operator.username)}</h4>
				</li>
				<li className={styles.list__item}>
					<h5 className={styles.list__caption}>Tag:</h5>
					<h4 className={styles.list__value}>{String(operator.tag)}</h4>
				</li>
				<li className={styles.list__item}>
					<h5 className={styles.list__caption}>ТГ айди:</h5>
					<h4 className={styles.list__value}>{String(operator.tg_id)}</h4>
				</li>
			</ul>
			<ul className={styles.list__row}>
				<li className={styles.list__item}>
					<h5 className={styles.list__caption}>День рождения:</h5>
					<h4 className={styles.list__value}>{operator.birthday}</h4>
				</li>
				<li className={styles.list__item}>
					<h5 className={styles.list__caption}>Отдел:</h5>
					<h4 className={styles.list__value}>{operator.departament}</h4>
				</li>
				<li className={styles.list__item}>
					<h5 className={styles.list__caption}>Глава отдела:</h5>
					<h4 className={styles.list__value}>{String(operator.is_head)}</h4>
				</li>
				<li className={styles.list__item}>
					<h5 className={styles.list__caption}>Администратор:</h5>
					<h4 className={styles.list__value}>{String(operator.is_admin)}</h4>
				</li>
			</ul>
			<ul className={styles.list__row}>
				<li className={cn(styles.list__item, styles.list__item_double)}>
					<h5 className={styles.list__caption}>Дата окончания ЭЦП:</h5>
					<h4 className={styles.list__value}>{String(operator.date_ecp)}</h4>
				</li>
				<li className={styles.list__item}>
					<h5 className={styles.list__caption}>Дата обновления:</h5>
					<h4 className={styles.list__value}>{operator.updated_at}</h4>
				</li>
				<li className={styles.list__item}>
					<h5 className={styles.list__caption}>Дата создания:</h5>
					<h4 className={styles.list__value}>{operator.created_at}</h4>
				</li>
			</ul>
			<ul className={cn(styles.list__row, styles.list__row_buttons)}>
				<button className={styles.list__btn}>Изменить</button>
				<button className={styles.list__btn}>Удалить</button>
			</ul>
		</section>
	)
}
