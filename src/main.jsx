import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 10, // 10 min
			cacheTime: 1000 * 60 * 60 * 20, // 20 tim
			refetchOnWindowFocus: false,
		}
	}
})

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</QueryClientProvider>
	</React.StrictMode>,
)
