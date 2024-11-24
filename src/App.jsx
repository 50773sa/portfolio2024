import { Routes, Route } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
// components
import AboutSection from './components/home/about/AboutSection'
import ContactSection from './components/home/contact/Contact'
import Header from './components/header/Header'
import OuterWrapper from './components/wrappers/OuterWrapper'
import Project from './components/home/projects/Project'
import ProjectsSection from './components/home/projects/Projects'
import ResumeSection from './components/home/resume/Resume'
// hooks
import useSectionObserver from './hooks/useSectionObserver'
// pages
import Homepage from './pages/Homepage'
import PageNotFoundPage from './pages/PageNotFoundPage'
// styles
import '../src/assets/App.scss'
import { ThemeProvider } from '@mui/material'
import { darkTheme } from './themes/darkTheme'

function App() {
	useSectionObserver()

	return (
		<ThemeProvider theme={darkTheme}>
			<OuterWrapper>	
			
				<Header />

				<Routes>
					<Route path="/" element={<Homepage />}>
						<Route path="/about" element={<AboutSection />} /> 
						<Route path="/projects" element={<ProjectsSection />} /> 
						<Route path="/projects/:id" element={<Project />} /> 
						<Route path="/resume" element={<ResumeSection />} /> 
						<Route path="/contact" element={<ContactSection />} /> 
					</Route> 

					<Route path="*" element={<PageNotFoundPage/>} />
				</Routes>
			</OuterWrapper>

			<ReactQueryDevtools position='bottom-left' />
		</ThemeProvider>
	)
}

export default App
