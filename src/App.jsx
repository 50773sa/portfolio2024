import { Routes, Route } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import './App.scss'
// components
import Header from './components/header/Header'
// pages
import Homepage from './pages/Homepage'
import ErrorPage from './pages/ErrorPage'

function App() {
	return (
		<div className='App'>
			<Header />
			
			<Routes>
				<Route path="/" element={<Homepage />} /> 
				<Route path="*" element={<ErrorPage/>} />
			</Routes>

			<ReactQueryDevtools position='bottom-left' />
		</div>
	)
}

export default App
