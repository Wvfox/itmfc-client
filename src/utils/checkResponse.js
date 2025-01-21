export const checkResponseStatus = response => {
	return response && response.status >= 200 && response.status < 300
}
