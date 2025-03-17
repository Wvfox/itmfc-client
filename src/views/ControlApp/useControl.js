import { useQuery } from 'react-query'
import { ControlService } from 'services/Control.service'

export default function useControl() {
	// Запрос на сервер для получение временного периода
	const queryDataPersonal = useQuery(
		'Operator control',
		() => ControlService.getAllOperators(),
		{
			// Форматирование полученных данных
			select: ({ data }) => data,
		}
	)

	return {
		queryDataPersonal,
	}
}
