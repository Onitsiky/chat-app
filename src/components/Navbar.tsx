import { useState } from 'react'
export function Navbar() {
    const [isHovering, setIsHovering]  = useState(false);
    const handleMouseOver = () => {
        setIsHovering(true);
    }
    const handleMouseOut = () => {
        setIsHovering(false);
    }
    return(
        <>
            <div className='navbar-container absolute top-0 w-full bg-gray-800 py-2 px-3 text-2xl text-amber-50'>
                <div className='float-left px-10 flex flex-row'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 hover:text-blue-500 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                    <p className='px-2 py-1'>Sleek</p>
                </div>
                <div className='float-right px-10'>
                    <div onMouseOver={handleMouseOver} >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 hover:text-blue-500 text cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}  tabIndex={-1} aria-hidden={true} className={isHovering ?
                        'p-2 border-2 w-44 text-lg text-amber-50 bg-gray-600 right-0 absolute rounded-lg flex justify-center' : 'hidden'}>
                        <ul>
                            <li className='hover:'>Profile</li>
                            <li>Disconnect</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}