/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false, //true
	env: {
		PROD_MODE: process.env.PROD_MODE,
		SERVER_API: process.env.SERVER_API,
	}
}

export default nextConfig
