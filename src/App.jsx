import { Routes, Route } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
// components
import Header from './components/header/Header'
// pages
import ErrorPage from './pages/ErrorPage'
import Homepage from './pages/Homepage'
// styles
import '../src/assets/App.scss'
import { ThemeProvider } from '@mui/material'
import { darkTheme } from './themes/darkTheme'
import InnerWrapper from './components/wrappers/InnerWrapper'
import OuterWrapper from './components/wrappers/OuterWrapper'

function App() {

	return (
		<ThemeProvider theme={darkTheme}>
			<OuterWrapper>	
				<Header />

				<InnerWrapper>
					<Routes>
						<Route path="/" element={<Homepage />} /> 
						<Route path="*" element={<ErrorPage/>} />
					</Routes>
				</InnerWrapper>

			</OuterWrapper>

			<ReactQueryDevtools position='bottom-left' />
		</ThemeProvider>
	)
}

export default App
