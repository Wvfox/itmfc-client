import { useState } from 'react'
import Layout from 'shared/Layout/Layout'
import styles from './Helpdesk.module.scss'
import CategoryHelpdesk from './components/Category'
import DescriptionHelpdesk from './components/Description'
import SelectDataHelpdesk from './components/SelectData'
import SubmitHelpdesk from './components/Submit'

/* 
Заявка:
 - категория
 - Пользователь
 - 
*/

export default function HelpdeskApp({ tab }) {
	const [currentMode, setCurrentMode] = useState('category')
	const [category, setCategory] = useState('')
	const [description, setDescription] = useState('')

	return (
		<Layout tab={tab} title='Создание заявки'>
			<div className={styles.helpdesk}>
				<SelectDataHelpdesk category={category} description={description} />

				{currentMode === 'category' && (
					<CategoryHelpdesk
						title='Выбор категории'
						mode='category'
						currentMode={currentMode}
						setCurrentMode={setCurrentMode}
						category={category}
						setCategory={setCategory}
					/>
				)}
				{currentMode === 'description' && (
					<DescriptionHelpdesk
						title='Выбор описания'
						mode='description'
						currentMode={currentMode}
						setCurrentMode={setCurrentMode}
						description={description}
						setDescription={setDescription}
					/>
				)}
				{currentMode === 'submit' && (
					<SubmitHelpdesk
						title='Отправка данных'
						mode='submit'
						currentMode={currentMode}
						setCurrentMode={setCurrentMode}
					/>
				)}
			</div>
		</Layout>
	)
}
