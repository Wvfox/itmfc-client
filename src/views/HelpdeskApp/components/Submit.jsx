import styles from '../Helpdesk.module.scss'
import BtnWrapperHelpdesk from './BtnWrapper'

export default function SubmitHelpdesk({
	title,
	mode,
	currentMode,
	setCurrentMode,
}) {
	const handleSubmit = () => {
		setCurrentMode('submit')
	}
	const handleBack = () => {
		setCurrentMode('description')
	}

	return (
		<BtnWrapperHelpdesk mode={mode} currentMode={currentMode} title={title}>
			<button className={styles.section__btn} onClick={() => handleSubmit()}>
				Отправить
			</button>
			<button className={styles.section__btn} onClick={() => handleBack()}>
				Вернуться назад
			</button>
		</BtnWrapperHelpdesk>
	)
}
