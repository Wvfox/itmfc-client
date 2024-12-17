import '@/styles/globals.scss'
import MainProvider from 'providers/MainProvider'

export default function App({ Component, pageProps }) {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	)
}
