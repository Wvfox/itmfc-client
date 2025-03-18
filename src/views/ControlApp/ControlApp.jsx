import cn from 'classnames'
import { useState } from 'react'
import Layout from 'shared/Layout/Layout'
import QueryDataStatus from 'utils/QueryData/queryDataStatus'
import ApiControl from './components/Api'
import OperatorControl from './components/Operator'
import PrinterControl from './components/Printer'
import WorkstationControl from './components/Workstation'
import styles from './Control.module.scss'
import useControl from './useControl'

const headerControl = [
	{
		id: 1,
		title: 'Сотрудники',
		section: 'operator',
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
	const { queryDataPersonal, queryDataWorkstation, queryDataPrinter } =
		useControl()
	const [currentSection, setCurrentSection] = useState()

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
				<div className={cn(styles.control__container, styles.list)}>
					{/* === Operator === */}
					{currentSection === 'operator' &&
						(QueryDataStatus(queryDataPersonal) ? (
							queryDataPersonal.data?.map(elem => (
								<OperatorControl key={elem.id} operator={elem} />
							))
						) : (
							<>2</>
						))}
					{/* === Workstation === */}
					{currentSection === 'workstation' &&
						(QueryDataStatus(queryDataWorkstation) ? (
							queryDataWorkstation.data?.map(elem => (
								<WorkstationControl key={elem.id} workstation={elem} />
							))
						) : (
							<>2</>
						))}
					{/* === Printer === */}
					{currentSection === 'printer' &&
						(QueryDataStatus(queryDataPrinter) ? (
							queryDataPrinter.data?.map(elem => (
								<PrinterControl key={elem.id} printer={elem} />
							))
						) : (
							<>2</>
						))}
					{/* === Printer === */}
					{currentSection === 'api' && <ApiControl />}
				</div>
			</div>
			<label style={{ border: '2px solid #000' }}>
				<input id='test' type='text' style={{ outline: 'none' }} />
			</label>
			<button
				onClick={() => {
					localStorage.setItem('AUS', document.querySelector('#test').value)
				}}
			>
				ADD
			</button>
		</Layout>
	)
}
