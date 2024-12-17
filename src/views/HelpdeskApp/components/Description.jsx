import styles from '../Helpdesk.module.scss'
import BtnWrapperHelpdesk from './BtnWrapper'

export default function DescriptionHelpdesk({
	title,
	mode,
	currentMode,
	setCurrentMode,
	description,
	setDescription,
}) {
	const handleSelect = data => {
		setDescription(data)
		setCurrentMode('submit')
	}
	const handleBack = () => {
		setDescription('')
		setCurrentMode('category')
	}

	return (
		<BtnWrapperHelpdesk mode={mode} currentMode={currentMode} title={title}>
			<button
				className={styles.section__btn}
				onClick={() => handleSelect('тестовое описание')}
			>
				Описание
			</button>
			<button className={styles.section__btn} onClick={() => handleBack()}>
				Вернуться назад
			</button>
		</BtnWrapperHelpdesk>
	)
}
