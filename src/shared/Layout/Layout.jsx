import Meta from 'shared/Meta/Meta'
import styles from './Layout.module.scss'

export default function Layout({ children, tab, title = '' }) {
	return (
		<Meta tab={tab}>
			<div className={styles.wrapper}>
				<picture className={styles.logo}></picture>
				{title && <h1 className={styles.mainTitle}>{title}</h1>}
				{children}
			</div>
		</Meta>
	)
}
