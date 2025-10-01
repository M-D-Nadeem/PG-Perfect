import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navitage=useNavigate()
  return (
    <nav  className='w-full flex h-30'>
        <div className='main flex justify-between items-center bg-slate-100 shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-200 mb-5 rounded-md w-full'>
            <div className="logo m-5">
                <p className='text-2xl font-bold text-blue-600 ml-3'>PG-PERFECT</p>
            </div>

            <div className="searchBar flex">
  <Link to="/" className="mx-5 font-semibold text-gray-500 hover:text-blue-500">Home</Link>
  <Link to="/aboutuspage" className="mx-5 font-semibold text-gray-500 hover:text-blue-500">About</Link>
  <Link to="/findpg" className="mx-5 font-semibold text-gray-500 hover:text-blue-500">Find My PG</Link>
  <Link to="/signup" className="mx-5 font-semibold text-gray-500 hover:text-blue-500">For PG Owners</Link>
  <Link to="/contactus" className="mx-5 font-semibold text-gray-500 hover:text-blue-500">Contact Us</Link>
</div>


            <div className="buttons mr-5">
               <Link to="/userlogin"><button  className='bg-blue-600 p-2 rounded-md mx-2 text-white hover:cursor-pointer hover:scale-105  hover:text-blue-600 hover:bg-white hover:outline outline-1 outline-blue-500 '>Sign in as Guest</button></Link> 
              
            </div>
        </div>
    </nav>
  )
}

export default Navbar