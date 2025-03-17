import cn from 'classnames'
import styles from '../Control.module.scss'
import PrinterInnerControl from './PrinterInner'

export default function PrinterControl({ printer }) {
	return (
		<section className={styles.list__container}>
			<PrinterInnerControl printer={printer} />
			<ul className={cn(styles.list__row, styles.list__row_buttons)}>
				<button className={styles.list__btn}>Изменить</button>
				<button className={styles.list__btn}>Добавить лог</button>
				<button className={styles.list__btn}>Удалить</button>
			</ul>
		</section>
	)
}
