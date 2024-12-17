import Head from 'next/head'

export default function Meta({ children, tab }) {
	return (
		<>
			<Head>
				<title>{tab}</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			{children}
		</>
	)
}