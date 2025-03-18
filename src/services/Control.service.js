import axios from 'axios'
import { SERVER_URL } from 'config/constants'

export const ControlService = {
	async getAllOperators() {
		return axios
			.patch(`${SERVER_URL}/personal/operator/alt`, {
				cypher: 'i5aJTxYJKTKPGxOM8VNPTw==',
			})
			.then(response => {
				return response
			})
			.catch(error => {
				return error.response
			})
	},
	async getAllWorkstations() {
		return axios
			.patch(`${SERVER_URL}/personal/workstation/alt`, {
				cypher: 'i5aJTxYJKTKPGxOM8VNPTw==',
			})
			.then(response => {
				return response
			})
			.catch(error => {
				return error.response
			})
	},
	async getAllPrinters() {
		return axios
			.get(`${SERVER_URL}/personal/printer`, {
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
