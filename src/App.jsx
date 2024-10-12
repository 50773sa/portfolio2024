import { Routes, Route } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
// components
import Header from './components/header/Header'
import OuterWrapper from './components/wrappers/OuterWrapper'
// pages
import Homepage from './pages/Homepage'
import PageNotFoundPage from './pages/PageNotFoundPage'
// styles
import '../src/assets/App.scss'
import { ThemeProvider } from '@mui/material'
import { darkTheme } from './themes/darkTheme'

function App() {

	return (
		<ThemeProvider theme={darkTheme}>
			<OuterWrapper>	
				<Header />

				<Routes>
					<Route path="/" element={<Homepage />} /> 
					<Route path="*" element={<PageNotFoundPage/>} />
				</Routes>
			</OuterWrapper>

			<ReactQueryDevtools position='bottom-left' />
		</ThemeProvider>
	)
}

export default App
