import React from 'react'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

function HMI(){
	return(<div className='w-full m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
		
		
		<div className='flex flex-column'>
			
			<TooltipComponent content="status: Running | flow: 200" position="BottomCenter">
		
			<div className='p-5 m-2 bg-red-300 rounded-3xl hover:bg-teal-200'>
					<p>Pipe 1</p>
			</div>
			</TooltipComponent>			
			<div className='p-5 m-2'>>></div>
			
			<TooltipComponent content="status: Halted" position="BottomCenter">		
			<div className='p-5 m-2 bg-red-300  hover:bg-red-500'>Mixer</div>
			</TooltipComponent>

			<div className='p-5 m-2'>>></div>

			<TooltipComponent content="status: Running" position="BottomCenter">
			<div className='p-5 m-2 bg-red-300 rounded-lg  hover:bg-teal-200'>Pipe 2</div>
			</TooltipComponent>
			<div className='p-5 m-2'>>></div>
			<TooltipComponent content="status: Running" position="BottomCenter">
			<div className='p-5 m-2 bg-red-300 rounded-3xl  hover:bg-teal-200'>Conveyer</div>
			</TooltipComponent>
			
		</div>

	</div>)
}
export default HMI