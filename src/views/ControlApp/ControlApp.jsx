import cn from 'classnames'
import { useState } from 'react'
import Layout from 'shared/Layout/Layout'
import QueryDataStatus from 'utils/QueryData/queryDataStatus'
import styles from './Control.module.scss'
import useControl from './useControl'

const headerControl = [
	{
		id: 1,
		title: 'Сотрудники',
		section: 'personal',
	},
	{
		id: 2,
		title: 'Рабочие места',
		section: 'workstation',
	},
	{
		id: 3,
		title: 'Принтеры',
		section: 'printer',
	},
	{
		id: 4,
		title: 'API',
		section: 'api',
	},
]

export default function ControlView({ tab }) {
	const { queryDataPersonal } = useControl()
	const [currentSection, setCurrentSection] = useState()

	console.log(queryDataPersonal)

	return (
		<Layout tab={tab} title='Панель управления'>
			<div className={styles.control}>
				<div className={cn(styles.control__header, styles.header)}>
					{headerControl.map(elem => (
						<div
							key={elem.id}
							className={cn(styles.header__item, {
								[styles.header__item_active]: elem.section === currentSection,
							})}
							onClick={() => setCurrentSection(elem.section)}
						>
							<h5 className={styles.header__title}>{elem.title}</h5>
						</div>
					))}
				</div>
				<div className={cn(styles.control__container)}>
					{QueryDataStatus(queryDataPersonal) ? (
						queryDataPersonal.data?.map(elem => elem.name)
					) : (
						<></>
					)}
				</div>
			</div>
		</Layout>
	)
}
