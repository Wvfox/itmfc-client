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
			.get(`${PUBLISH_URL}/clip/${id}`)
			.then(response => {
				return response
			})
			.catch(error => {
				return error.response
			})
	},
	async createClip(data) {
		return axios
			.post(`${PUBLISH_URL}/`, data, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then(response => {
				return response
			})
			.catch(error => {
				return error.response
			})
	},
	async editClip(id, data) {
		return axios
			.put(`${PUBLISH_URL}/clip/${id}`, data, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then(response => {
				return response
			})
			.catch(error => {
				return error.response
			})
	},
	async removeClip(id) {
		return axios
			.delete(`${PUBLISH_URL}/clip/${id}`)
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
	async wrongClip(id) {
		return axios
			.put(`${PUBLISH_URL}/clip/${id}/wrong`)
			.then(response => {
				return response
			})
			.catch(error => {
				return error.response
			})
	},
	async checkLocalClip(id) {
		return axios
			.get(`http://localhost:3000/api/clip/${id}`)
			.then(response => {
				// console.log(response)
				return response
			})
			.catch(error => {
				// console.log(error)
				return error.response
			})
	},
}
