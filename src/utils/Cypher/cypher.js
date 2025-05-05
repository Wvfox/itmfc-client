import CryptoJS from 'crypto-js'

var key = CryptoJS.enc.Utf8.parse('MAmkz45AMs5adAaL')
var iv = CryptoJS.enc.Utf8.parse('jkhfds7324jkhdf1')

export function encrypt_aes(data_message) {
	return CryptoJS.AES.encrypt(data_message, key, {
		iv: iv,
		mode: CryptoJS.mode.CBC,
	}).toString()
}

export function decrypt_aes(data_encrypted) {
	return CryptoJS.AES.decrypt(data_encrypted, key, {
		iv: iv,
		mode: CryptoJS.mode.CBC,
	}).toString(CryptoJS.enc.Utf8)
}
