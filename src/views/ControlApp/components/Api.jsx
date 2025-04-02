import cn from 'classnames'
import styles from '../Control.module.scss'

const apiData = [
	{
		title: 'Сотрудники (Operator)',
		fields: [
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
				description:
					'Тэг пользователя в телеграмме (уникальное, не обязательное)',
			},
			{
				field: 'tg_id',
				description:
					'Айди пользователя в телеграмме (уникальное, не обязательное)',
			},
			{
				field: 'birthday',
				description: 'Дата дня рождения (не обязательное)',
			},
			{
				field: 'telephone',
				description: 'Мобильный телефон (не обязательное)',
			},
			{
				field: 'email',
				description: 'Электронная почта (не обязательное)',
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
				field: '',
				description: '',
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
		],
		urls: [
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
		],
	},
	{
		title: 'Рабочие станции (Workstation)',
		fields: [
			{
				field: 'name_desktop',
				description: 'Имя рабочего места (уникальное, обязательное)',
			},
			{
				field: 'ip_desktop',
				description: 'Айпи-адрес рабочего места (уникальное, не обязательное)',
			},
			{
				field: 'mac_desktop',
				description: 'Мак-адрес рабочего места (уникальное, не обязательное)',
			},
			{
				field: 'printers',
				description:
					'Принтеры связанные с рабочим местом (Ссылка на таблицу - Printer)',
			},
			{
				field: 'ip_assistant',
				description: 'Айпи-адрес ассистента (уникальное, не обязательное)',
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
			{
				field: '',
				description: '',
			},
		],
		urls: [
			{
				url: `api/personal/workstation`,
				description:
					'GET - Получение записи ВСЕХ рабочих станций\nPOST - Создание новой записи о рабочей станции',
			},
			{
				url: `api/personal/workstation/<name>`,
				description:
					'GET - Получение записи рабочей станции\nPUT - Редактирование записи рабочей станции\nDEL - Удаление записи рабочей станции',
			},
			{
				url: `api/personal/workstation/<name>/printer/<ip>`,
				description:
					'PUT - Привязка к рабочей станции принтера\nDEL - Отвязка от рабочей станции принтера',
			},
		],
	},
	{
		title: 'Принтеры (Printer)',
		fields: [
			{
				field: 'ip_printer',
				description: 'Айпи-адрес принтера (уникальное, обязательное)',
			},
			{
				field: 'model_printer',
				description: 'Модель принтера (обязательное)',
			},
			{
				field: 'history',
				description: 'История принтера (ссылки на другую таблицу)',
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
		],
		urls: [
			{
				url: `api/personal/printer`,
				description:
					'GET - Получение списка ВСЕХ принтеров\nPOST - Создание новой записи принтера',
			},
			{
				url: `api/personal/printer/<ip>`,
				description:
					'GET - Получение записи о принтере\nPUT - Редактирование записи о принтере\nDEL - Удаление записи о принтере',
			},
		],
	},
	{
		title: 'Заявки (Application)',
		fields: [
			{
				field: 'category',
				description: 'Категория проблемы (обязательное)',
			},
			{
				field: 'location',
				description: 'Локация сотрудника (необязательное)',
			},
			{
				field: 'operator',
				description:
					'Запись о сотруднике, кто создает заявку (Ссылка на таблицу - Operator, не обязательное) ',
			},
			{
				field: 'workstation',
				description:
					'Запись о рабочем месте, откуда создается заявка (Ссылка на таблицу - Workstation, не обязательное)',
			},
			{
				field: 'description',
				description: 'Описание проблемы в заявке (не обязательное)',
			},
			{
				field: 'screenshot_url',
				description: 'Ссылка на скриншот (ТГ, не обязательное)',
			},
			{
				field: 'executor',
				description:
					'Запись о сотруднике, обрабатывающем заявку (Ссылка на таблицу - Operator, не обязательное)',
			},
			{
				field: 'signer',
				description:
					'Запись о сотруднике, закрывшем заявку (Ссылка на таблицу - Operator, не обязательное)',
			},
			{
				field: 'status',
				description:
					'Текущий статус заявки - cancel | new | waiting | process | complete',
			},
			{
				field: 'report_id',
				description:
					'Айди основного информационного сообщения (ТГ, не обязательное)',
			},
			{
				field: 'layout',
				description: 'Шаблон заявки (не обязательное)',
			},
			{
				field: 'step',
				description: 'Текущий шаг заявки в шаблоне (не обязательное)',
			},
			{
				field: 'owner_tg',
				description:
					'Айди валедльца завки, чтобы не дублировать создание завяки (ТГ, не обязательное)',
			},
			{
				field: 'updated_at',
				description: 'Дата обновления записи (создается автоматически)',
			},
			{
				field: 'created_at',
				description: 'Дата создания записи (создается автоматически)',
			},
		],
		urls: [
			{
				url: `api/helpdesk/application`,
				description:
					'GET - Получение ВСЕХ заявок\nPOST - Создание новой заявки',
			},
			{
				url: `api/helpdesk/application/<id>`,
				description:
					'GET - Получение записи заявки\nPUT - Редактирование записи заявки\nDEL - Удаление записи заявки',
			},
			{
				url: `api/helpdesk/application/actual/<operator_id>`,
				description:
					'GET - Проверка на существующий процесс создания заявки данного оператора',
			},
		],
	},
	{
		title: 'Кнопки взаимодействия (Button)',
		fields: [
			{
				field: 'title',
				description: 'Название кнопки (обязательное) ',
			},
			{
				field: 'type',
				description: 'Тип, к которому относится кнопка (не обязательное)',
			},
			{
				field: 'order',
				description: 'Порядковый номер кнопки (не обязательное)',
			},
			{
				field: 'size',
				description: 'Размер кнопки (ТГ, не обязательное)',
			},
			{
				field: 'departament',
				description: 'Отдел, к которому относится кнопка (не обязательное)',
			},
			{
				field: 'layout',
				description: 'Шаблон кнопки (не обязательное)',
			},
			{
				field: 'problems',
				description:
					'Список кнопок-проблем, привязанных к кнопке (Ссылка на таблицу - Button, не обязательное)',
			},
			{
				field: 'updated_at',
				description: 'Дата обновления записи (создается автоматически)',
			},
			{
				field: 'created_at',
				description: 'Дата создания записи (создается автоматически)',
			},
		],
		urls: [
			{
				url: `api/helpdesk/button`,
				description:
					'GET - Получение ВСЕХ записей кнопок\nPOST - Создание новой кнопки',
			},
			{
				url: `api/helpdesk/button/<id>`,
				description:
					'GET - Получение записи кнопки\nPUT - Редактирование записи кнопки\nDEL - Удаление записи кнопки',
			},

			{
				url: `api/helpdesk/button/type/<type_filter>`,
				description: 'GET - Получение массива кнопок с указанным типом',
			},

			{
				url: `api/helpdesk/button/<id>/problem/<problem_id>`,
				description:
					'PUT - Привязка кнопки-проблемы к указанной кнопке\nDEL - Отвязка кнопки-проблемы от указанной кнопки',
			},
		],
	},
	{
		title: 'Видео-ролики рекламы (Clip)',
		fields: [
			{
				field: 'name',
				description: 'Название видео-ролика (обязательное)',
			},
			{
				field: 'media',
				description: 'Файл видео-ролика (обязательное)',
			},

			{
				field: 'expiration_date',
				description: 'Срок действия видео-ролика (не обязательное)',
			},

			{
				field: 'duration',
				description: 'Время продолжительности видео-ролика (не обязательное)',
			},

			{
				field: 'is_submit',
				description:
					'Статус обработки и отправки информационного сообщения в чат (ТГ, не обязательное)',
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
			{
				field: '',
				description: '',
			},
		],
		urls: [
			{
				url: `api/publish`,
				description:
					'GET - Получение ВСЕХ записей видео-роликов\nPOST - Создание новой записи видео-ролика',
			},
			{
				url: `api/publish/shuffle`,
				description:
					'GET - Получение ВСЕХ записей видео-роликов в случайном порядке',
			},
			{
				url: `api/publish/clip/<id>`,
				description:
					'GET - Получение записи видео-ролика\nPUT - Редактирование записи видео-ролика\nDEL - Удаление записи видео-ролика',
			},
			{
				url: `api/publish/nonstop/<location>`,
				description:
					'GET - Получение массива видео-роликов, указанной локации, с включенным режимом повтора',
			},
			{
				url: `api/publish/submit`,
				description: 'GET - Получение массива не обработанных видео-роликов',
			},
			{
				url: `api/publish/clip/<id>/check`,
				description:
					'PUT - Изменение статуса обработки видео-ролика на прочитано',
			},
		],
	},
	{
		title: 'Локации (Location)',
		fields: [
			{
				field: 'name',
				description: 'Название локации (обязательное)',
			},
			{
				field: 'is_nonstop',
				description: 'Статус повтора (не обязательное)',
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
			{
				field: '',
				description: '',
			},
		],
		urls: [
			{
				url: `api/publish/location`,
				description:
					'GET - Получение ВСЕХ записей локаций\nPOST - Создание новой записи локации',
			},
			{
				url: `api/publish/location/<id>/check`,
				description: 'PUT - Отключение статуса повтора в локации',
			},
			{
				url: `api/publish/location/<id>`,
				description:
					'GET - Получение записи локации\nPUT - Изменение записи локации\nDEL - Удаление записи локации',
			},
		],
	},
]

export default function ApiControl({}) {
	return (
		<>
			{apiData.map(section => (
				<section key={section.title} className={styles.list__container}>
					<ul className={styles.list__row}>
						<li className={cn(styles.list__item, styles.list__item_header)}>
							<h4 className={cn(styles.list__value, styles.list__value_header)}>
								{section.title}
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
						{section.fields.map(elem => (
							<li
								key={elem.field}
								className={cn(
									styles.list__item,
									styles.list__item_wrap,
									styles.list__item_third,
									{ [styles.list__item_third_mob]: elem.field }
								)}
							>
								<h5
									className={cn(
										styles.list__caption,
										styles.list__caption_third,
										{
											[styles.list__caption_third_mob]: elem.field,
										}
									)}
								>
									{elem.field}
								</h5>
								<h4
									className={cn(styles.list__value, styles.list__value_third)}
								>
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
					{section.urls.map(elem => (
						<ul key={elem.url} className={styles.list__row}>
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
								<h4
									className={cn(styles.list__value, styles.list__value_third)}
								>
									{elem.description}
								</h4>
							</li>
						</ul>
					))}
				</section>
			))}
		</>
	)
}
