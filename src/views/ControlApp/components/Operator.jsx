import cn from 'classnames'
import styles from '../Control.module.scss'

export default function OperatorControl({ operator }) {
	const operatorFields = [
		[
			{
				title: 'ID',
				field: operator.id,
				size: 1,
			},
			{
				title: 'Логин',
				field: operator.username,
				size: 1,
			},
			{
				title: 'Тг-@тэг',
				field: operator.tag,
				size: 1,
			},
			{
				title: 'Тг-айди',
				field: operator.tg_id,
				size: 1,
			},
		],
		[
			{
				title: 'День рождения',
				field: operator.birthday,
				size: 1,
			},
			{
				title: 'Телефон',
				field: operator.telephone,
				size: 1,
			},
			{
				title: 'Почта',
				field: operator.email,
				size: 2,
			},
		],
		[
			{
				title: 'Окончание ЭЦП',
				field: operator.date_ecp,
				size: 1,
			},
			{
				title: 'Отдел',
				field: operator.departament,
				size: 1,
			},
			{
				title: 'Глава отдела',
				field: operator.is_head,
				size: 1,
			},
			{
				title: 'Администратор',
				field: operator.is_admin,
				size: 1,
			},
		],
		[
			{
				title: 'Дата обновления',
				field: operator.updated_at,
				size: 2,
			},
			{
				title: 'Дата создания',
				field: operator.created_at,
				size: 2,
			},
		],
	]
	return (
		<section className={styles.list__container}>
			{/* Заголовок таблицы */}
			<ul className={styles.list__row}>
				<li className={cn(styles.list__item, styles.list__item_header)}>
					<h4 className={cn(styles.list__value, styles.list__value_header)}>
						{operator.name}
					</h4>
				</li>
			</ul>
			{/* Наполнение таблицы */}
			{operatorFields.map(row => (
				<ul key={row[0].title} className={styles.list__row}>
					{row.map(elem => (
						<li
							key={elem.title}
							className={cn(styles.list__item, {
								[styles.list__item_double]: elem.size === 2,
							})}
						>
							<h5 className={styles.list__caption}>{elem.title}:</h5>
							<h4 className={styles.list__value}>{String(elem.field)}</h4>
						</li>
					))}
				</ul>
			))}
			{/* Кнопки управления */}
			<ul className={cn(styles.list__row, styles.list__row_buttons)}>
				<button className={styles.list__btn}>Изменить</button>
				<button className={styles.list__btn}>Удалить</button>
			</ul>
		</section>
	)
}
