import React from 'react'
import {Link, NavLink } from 'react-router-dom'
import {SiShopware} from 'react-icons/si'
import {MdOutlineCancel} from 'react-icons/md'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'

import {links} from '../data/dummy'
import {useStateContext} from '../contexts/ContextProvider'

function Sidebar(){
	const {activeMenu, setActiveMenu, screenSize, setScreenSize}= useStateContext()

	const handleCloseSideBar = () => {
		if(activeMenu=true && screenSize<=900)
			setActiveMenu=false
	}


	const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg bg-teal-200 text-md m-2'
	const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'
	return(
		<div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pd-10'>
			{activeMenu && (<>
					<div className='flex justify-between items-center'>
						<Link to='/' onClick={() => {handleCloseSideBar} } className='items-center gap-3 ml-3 flex mt-4 text-xl font-extrabold tracking-light dark:text-white text-slate-900'>
							<SiShopware/><span>shoppy</span>
						</Link>
						
					</div>
					<div className='mt-10'>
					{links.map((item) => (
							<div key={item.title}>
								<p className='text-gray-400 m-3 mt-4 uppercase'>
									{item.title}
								</p>

								{item.links.map((link) => (
									<NavLink to={`/${link.name}`} key={link.name} onClick={() => {handleCloseSideBar}}
									 className={ ({isActive}) => isActive? activeLink : normalLink}>
									 	{link.icon}
									 	<span className='capitalize '>
									 		{link.name}
									 	</span>
									</NavLink>
									) )}
							</div>
						)

					)}
					</div>				
				 	</>
				 )

			}
		</div>
		)
}

export default Sidebar