import React from 'react'
import '../component/style.css'
let Operating=({first,second})=>
{
    return (

        <div>
           
            <h1 className='demo'>Mobile Operating System</h1>
            <div className='liststyle1'>
         <ul>{first}</ul>
            </div>
            <h1 className='demo'>Mobile Manufacturer</h1>
            <div className='liststyle1'>
            <ul>{second}
                </ul>
                </div>
            

        </div>
    )
}
export default Operating