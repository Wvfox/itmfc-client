import cn from 'classnames'
import styles from '../Control.module.scss'
import PrinterInnerControl from './PrinterInner'

export default function WorkstationControl({ workstation }) {
	return (
		<section className={styles.list__container}>
			<ul className={styles.list__row}>
				<li className={cn(styles.list__item, styles.list__item_header)}>
					<h4 className={cn(styles.list__value, styles.list__value_header)}>
						{workstation.name_desktop}
					</h4>
				</li>
			</ul>
			<ul className={styles.list__row}>
				<li className={styles.list__item}>
					<h5 className={styles.list__caption}>ID:</h5>
					<h4 className={styles.list__value}>{workstation.id}</h4>
				</li>
				<li className={styles.list__item}>
					<h5 className={styles.list__caption}>IP:</h5>
					<h4 className={styles.list__value}>
						{String(workstation.ip_desktop)}
					</h4>
				</li>
				<li className={styles.list__item}>
					<h5 className={styles.list__caption}>MAC:</h5>
					<h4 className={styles.list__value}>
						{String(workstation.mac_desktop)}
					</h4>
				</li>
				<li className={styles.list__item}>
					<h5 className={styles.list__caption}>Ассистент:</h5>
					<h4 className={styles.list__value}>
						{String(workstation.ip_assistant)}
					</h4>
				</li>
			</ul>
			<ul className={styles.list__row}>
				<li className={cn(styles.list__item, styles.list__item_double)}>
					<h5 className={styles.list__caption}>Дата обновления:</h5>
					<h4 className={styles.list__value}>{workstation.updated_at}</h4>
				</li>
				<li className={cn(styles.list__item, styles.list__item_double)}>
					<h5 className={styles.list__caption}>Дата создания:</h5>
					<h4 className={styles.list__value}>{workstation.created_at}</h4>
				</li>
			</ul>
			{workstation.printers.map(elem => (
				<PrinterInnerControl key={elem.id} printer={elem} />
			))}
			<ul className={cn(styles.list__row, styles.list__row_buttons)}>
				<button className={styles.list__btn}>Изменить</button>
				<button className={styles.list__btn}>Добавить лог</button>
				<button className={styles.list__btn}>Поменять принтеры</button>
				<button className={styles.list__btn}>Удалить</button>
			</ul>
		</section>
	)
}
