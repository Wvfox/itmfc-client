import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export default function MainProvider({ children, Component }) {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}
