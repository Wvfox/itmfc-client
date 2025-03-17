import cn from 'classnames'
import styles from '../Control.module.scss'

export default function PrinterInnerControl({ printer }) {
	return (
		<>
			<ul className={styles.list__row}>
				<li className={cn(styles.list__item, styles.list__item_header)}>
					<h4 className={cn(styles.list__value, styles.list__value_header)}>
						{printer.ip_printer}
					</h4>
				</li>
			</ul>
			<ul className={styles.list__row}>
				<li className={styles.list__item}>
					<h5 className={styles.list__caption}>ID:</h5>
					<h4 className={styles.list__value}>{printer.id}</h4>
				</li>
				<li className={styles.list__item}>
					<h5 className={styles.list__caption}>Модель:</h5>
					<h4 className={styles.list__value}>{printer.model_printer}</h4>
				</li>
				<li className={styles.list__item}>
					<h5 className={styles.list__caption}>Дата обновления:</h5>
					<h4 className={styles.list__value}>{printer.updated_at}</h4>
				</li>
				<li className={styles.list__item}>
					<h5 className={styles.list__caption}>Дата создания:</h5>
					<h4 className={styles.list__value}>{printer.created_at}</h4>
				</li>
			</ul>
		</>
	)
}
