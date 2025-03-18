import cn from 'classnames'
import styles from '../Control.module.scss'

const operatorFields = [
	{
		field: 'username ',
		description: 'Логин в системе (уникальное, не обязательное)',
	},
	{
		field: 'name',
		description: 'Полное имя (обязательное)',
	},
	{
		field: 'tag',
		description: 'Тэг пользователя в телеграмме (уникальное, не обязательное)',
	},
	{
		field: 'tg_id',
		description: 'Айди пользователя в телеграмме (уникальное, не обязательное)',
	},
	{
		field: 'birthday',
		description: 'Дата дня рождения (не обязательное)',
	},
	{
		field: 'is_head',
		description: 'Сотрудник глава да/нет (по умолчанию - нет)',
	},
	{
		field: 'is_admin',
		description: 'Сотрудник администратор да/нет (по умолчанию - нет)',
	},
	{
		field: 'departament',
		description: 'К какому отделу относится (не обязательное)',
	},
	{
		field: 'date_ecp',
		description: 'Дата окончания ЭЦП (не обязательное)',
	},
	{
		field: 'updated_at',
		description: 'Дата обновления записи (создается автоматически)',
	},
	{
		field: 'created_at',
		description: 'Дата создания записи (создается автоматически)',
	},
	{
		field: '',
		description: '',
	},
]
const operatorApi = [
	{
		url: `api/personal/operator`,
		description:
			'GET - Получение массива ВСЕХ сотрудников\nPOST - Создание новой записи сотрудника',
	},
	{
		url: `api/personal/operator/<id>`,
		description:
			'GET - Получение записи сотрудника\nPUT - Редактирование записи сотрудника\nDEL - Удаление записи сотрудника',
	},
	{
		url: `api/personal/operator/username/<username>`,
		description:
			'GET - Получение записи сотрудника\nPUT - Редактирование записи сотрудника\nDEL - Удаление записи сотрудника',
	},
	{
		url: `api/personal/operator/tg-id/<tg_id>`,
		description:
			'GET - Получение записи сотрудника\nPUT - Редактирование записи сотрудника\nDEL - Удаление записи сотрудника',
	},
	{
		url: `api/personal/operator/tag/<tag>`,
		description:
			'GET - Получение записи сотрудника\nPUT - Редактирование записи сотрудника\nDEL - Удаление записи сотрудника',
	},
	{
		url: `api/personal/operator/birthday`,
		description:
			'GET - Получение массива сотрудников, у которых дата дня рождения совпадает с текущей датой',
	},
	{
		url: `api/personal/operator/ecp`,
		description:
			'GET - Получение массива сотрудников, у которых дата окончания ЭЦП меньше 30 дней',
	},
]

export default function ApiControl({}) {
	return (
		<>
			{/* === Operator === */}
			<section className={styles.list__container}>
				<ul className={styles.list__row}>
					<li className={cn(styles.list__item, styles.list__item_header)}>
						<h4 className={cn(styles.list__value, styles.list__value_header)}>
							Сотрудники (Operator)
						</h4>
					</li>
				</ul>
				<ul className={styles.list__row}>
					<li className={cn(styles.list__item, styles.list__item_header)}>
						<h4
							className={cn(
								styles.list__caption,
								styles.list__caption_subtitle
							)}
						>
							Поля таблицы
						</h4>
					</li>
				</ul>
				<ul className={cn(styles.list__row, styles.list__row_wrap)}>
					{operatorFields.map(elem => (
						<li
							className={cn(
								styles.list__item,
								styles.list__item_wrap,
								styles.list__item_third
							)}
						>
							<h5
								className={cn(styles.list__caption, styles.list__caption_third)}
							>
								{elem.field}
							</h5>
							<h4 className={cn(styles.list__value, styles.list__value_third)}>
								{elem.description}
							</h4>
						</li>
					))}
				</ul>
				<ul className={styles.list__row}>
					<li className={cn(styles.list__item, styles.list__item_header)}>
						<h4
							className={cn(
								styles.list__caption,
								styles.list__caption_subtitle
							)}
						>
							Ссылки на API
						</h4>
					</li>
				</ul>
				{operatorApi.map(elem => (
					<ul className={styles.list__row}>
						<li className={cn(styles.list__item, styles.list__item_third)}>
							<h5
								className={cn(
									styles.list__caption,
									styles.list__caption_center
								)}
							>
								{elem.url}
							</h5>
						</li>
						<li className={cn(styles.list__item, styles.list__item_full)}>
							<h4 className={cn(styles.list__value, styles.list__value_third)}>
								{elem.description}
							</h4>
						</li>
					</ul>
				))}
			</section>
			{/* === Workstation === */}
			<section className={styles.list__container}>
				<ul className={styles.list__row}>
					<li className={cn(styles.list__item, styles.list__item_header)}>
						<h4 className={cn(styles.list__value, styles.list__value_header)}>
							Рабочие места (Workstation)
						</h4>
					</li>
				</ul>
				<ul className={styles.list__row}>
					<li className={cn(styles.list__item, styles.list__item_header)}>
						<h4
							className={cn(
								styles.list__caption,
								styles.list__caption_subtitle
							)}
						>
							Поля таблицы
						</h4>
					</li>
				</ul>
				<ul className={cn(styles.list__row, styles.list__row_wrap)}>
					{operatorFields.map(elem => (
						<li
							className={cn(
								styles.list__item,
								styles.list__item_wrap,
								styles.list__item_third
							)}
						>
							<h5
								className={cn(styles.list__caption, styles.list__caption_third)}
							>
								{elem.field}
							</h5>
							<h4 className={cn(styles.list__value, styles.list__value_third)}>
								{elem.description}
							</h4>
						</li>
					))}
				</ul>
				<ul className={styles.list__row}>
					<li className={cn(styles.list__item, styles.list__item_header)}>
						<h4
							className={cn(
								styles.list__caption,
								styles.list__caption_subtitle
							)}
						>
							Ссылки на API
						</h4>
					</li>
				</ul>
				{operatorApi.map(elem => (
					<ul className={styles.list__row}>
						<li className={cn(styles.list__item, styles.list__item_third)}>
							<h5
								className={cn(
									styles.list__caption,
									styles.list__caption_center
								)}
							>
								{elem.url}
							</h5>
						</li>
						<li className={cn(styles.list__item, styles.list__item_full)}>
							<h4 className={cn(styles.list__value, styles.list__value_third)}>
								{elem.description}
							</h4>
						</li>
					</ul>
				))}
			</section>
		</>
	)
}
