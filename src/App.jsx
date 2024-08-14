import { Routes, Route } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
// components
import Header from './components/header/Header'
// pages
import ErrorPage from './pages/ErrorPage'
import Homepage from './pages/Homepage'
//styles
import './App.scss'
import { ThemeProvider } from '@mui/material'
import { darkTheme } from './themes/darkTheme'

function App() {

	return (
		<ThemeProvider theme={darkTheme}>
			<div className='App'>

				<Header />
				
				<Routes>
					<Route path="/" element={<Homepage />} /> 
					<Route path="*" element={<ErrorPage/>} />
				</Routes>

				<ReactQueryDevtools position='bottom-left' />
			</div>
		</ThemeProvider>
	)
}

export default App
