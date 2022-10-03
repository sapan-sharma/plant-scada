import React, {useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {FiSettings} from 'react-icons/fi'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'
import {Sidebar, Navbar, Header, Footer, ThemeSettings} from './components'
import {HMI, Predictions, Settings, FactoryFloor, Accounts, Assemblies, Calendar} from './pages'

import './App.css'

import {useStateContext} from './contexts/ContextProvider'

function App(){
	const {activeMenu}= useStateContext()

	return(
	<div>

		<BrowserRouter>
			<div className='flex relative dark:bg-main-dark-bg'>
				<div className='fixed right-4 bottom-4' style={{zIndex: '1000'}}>
					<TooltipComponent>
						<button type='button'
						className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text=white'
						style={{background:'blue', borderRadius:'50%'}}>
							<FiSettings/>
						</button>
					</TooltipComponent>
				</div>
				{activeMenu ? (
					<div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
						<Sidebar/>
					</div>
					) : (
					<div className='w-0 dark:bg-secondary-dark-bg'>
						<Sidebar/>
					</div>
					)
				}

				
					<div className={
				    	`dark:bg-main-bg bg-main-bg min-h-screen w-full 
				    	${activeMenu ? 'md:ml-72' : 'flex-2'}`				    	
				    }>
				    	<div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
				    		<Navbar/>
				    	</div>

					</div>

					<div>
					    <Routes>
					    	{/*dashboard*/}
					    	<Route path='' element={<HMI/>}/>
					    	<Route path='/hmi' element={<HMI/>}/>
					    	{/*pages*/}
					    	<Route path='/predictions' element={<Predictions/>}/>
					    	<Route path='/accounts' element={<Accounts/>}/>
					    	<Route path='/assemblies' element={<Assemblies/>}/>
							<Route path='/settings' element={<Settings/>}></Route>
							<Route path='/control-center' element={<Calendar/>}></Route>
							<Route path='/factory-floor' element={<FactoryFloor/>}/>
					    	{/* Apps*/}
					    	
					    {/*Charts*/}					    	
					    	<Route path='/stacked' element={<Stacked/>}/>
					    </Routes>	
					</div>
				
				

			</div>
		</BrowserRouter>
	</div>)
}

export default App