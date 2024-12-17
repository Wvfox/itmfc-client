import styles from '../Helpdesk.module.scss'
import BtnWrapperHelpdesk from './BtnWrapper'

export default function CategoryHelpdesk({
	title,
	mode,
	currentMode,
	setCurrentMode,
	category,
	setCategory,
}) {
	const handleSelect = data => {
		setCategory(data)
		setCurrentMode('description')
	}
	const handleBack = () => {
		setCategory('')
		setCurrentMode('category')
	}

	return (
		<BtnWrapperHelpdesk mode={mode} currentMode={currentMode} title={title}>
			<button
				className={styles.section__btn}
				onClick={() => handleSelect('тест')}
			>
				Категория
			</button>
			<button className={styles.section__btn} onClick={() => handleBack()}>
				Вернуться назад
			</button>
		</BtnWrapperHelpdesk>
	)
}
