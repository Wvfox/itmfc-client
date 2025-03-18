import axios from 'axios'
import { SERVER_URL } from 'config/constants'

export const ControlService = {
	async getAllOperators() {
		return axios
			.patch(`${SERVER_URL}/personal/operator/alt`, {
				cypher: localStorage.AUS,
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
				cypher: localStorage.AUS,
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
			.patch(`${SERVER_URL}/personal/printer/alt`, {
				cypher: localStorage.AUS,
			})
			.then(response => {
				return response
			})
			.catch(error => {
				return error.response
			})
	},
}
