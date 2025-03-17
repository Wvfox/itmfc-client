import axios from 'axios'
import { SERVER_URL } from 'config/constants'

export const ControlService = {
	async getAllOperators() {
		return axios
			.get(`${SERVER_URL}/personal/operator`, {
				headers: {
					Token: 'i5aJTxYJKTKPGxOM8VNPTw==',
				},
			})
			.then(response => {
				return response
			})
			.catch(error => {
				return error.response
			})
	},
}
