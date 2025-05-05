const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// Фильтрация ввода цифр
export const handleInputOnlyNumber = event => {
	// Удаление 1 нуля
	if (event.target.value[0] === '0') {
		return (event.target.value = event.target.value.slice(
			1,
			event.target.value.length
		))
	}
	// Фильтрация только цифр
	if (!(event.target.value[event.target.value.length - 1] in NUMBERS)) {
		return (event.target.value = event.target.value.slice(
			0,
			event.target.value.length - 1
		))
	}
}
