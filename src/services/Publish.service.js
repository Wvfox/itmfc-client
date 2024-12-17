import axios from 'axios'
import { SERVER_URL } from 'config/constants'

const PUBLISH_URL = `${SERVER_URL}/publish`

export const PublishService = {
	async getAllClips() {
		return axios
			.get(`${PUBLISH_URL}/`)
			.then(response => {
				return response
			})
			.catch(error => {
				return error.response
			})
	},
	async getAllClipsShuffle() {
		return axios
			.get(`${PUBLISH_URL}/shuffle`)
			.then(response => {
				return response
			})
			.catch(error => {
				return error.response
			})
	},
	async getClip(id) {
		return axios
			.get(`${PUBLISH_URL}/elem/${id}`)
			.then(response => {
				return response
			})
			.catch(error => {
				return error.response
			})
	},
	async createClip(data) {
		return axios
			.post(`${PUBLISH_URL}/`, data)
			.then(response => {
				return response
			})
			.catch(error => {
				return error.response
			})
	},
	async editClip(id, data) {
		return axios
			.put(`${PUBLISH_URL}/elem/${id}`, data)
			.then(response => {
				return response
			})
			.catch(error => {
				return error.response
			})
	},
	async removeClip(id) {
		return axios
			.delete(`${PUBLISH_URL}/elem/${id}`)
			.then(response => {
				return response
			})
			.catch(error => {
				return error.response
			})
	},

	async checkNonstopClip(location) {
		return axios
			.get(`${PUBLISH_URL}/nonstop/${location}`)
			.then(response => {
				return response
			})
			.catch(error => {
				return error.response
			})
	},
}
