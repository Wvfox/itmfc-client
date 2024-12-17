import cn from 'classnames'
import styles from '../Helpdesk.module.scss'

export default function BtnWrapperHelpdesk({
	children,
	mode,
	currentMode,
	title,
}) {
	return (
		<section
			className={cn(styles.section, {
				[styles.section_show]: currentMode === mode,
			})}
		>
			<div className={styles.section__container}>
				<div className={styles.section__header}>{title}</div>
				<div className={styles.section__body}>{children}</div>
			</div>
		</section>
	)
}
