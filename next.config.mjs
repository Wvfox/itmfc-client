/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true, //true
	env: {
		SERVER_API: process.env.SERVER_API,

		PROD_MODE: process.env.PROD_MODE,

		AES_KEY: process.env.AES_KEY,
		AES_IV: process.env.AES_IV,
	},
}

export default nextConfig
