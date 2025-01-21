import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { store } from 'store/Store'
import ReduxToastr from './components/ReduxToastr'

const queryClient = new QueryClient()

export default function MainProvider({ children, Component }) {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<ReduxToastr />
				{children}
			</QueryClientProvider>
		</Provider>
	)
}
