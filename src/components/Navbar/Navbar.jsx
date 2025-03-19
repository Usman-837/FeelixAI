import React from 'react'
import { RxCross2 } from "react-icons/rx"
import customerimg from '../../assets/customer.png'
import { FaBars } from "react-icons/fa"

const Navbar = ({ toggleMobileSidebar }) => {
    return (
        <nav className='bg-[#FCFCFC] flex items-center justify-between border-l-[1px] border-[#CFD3D8] py-6 px-10 max-sm:px-5'>
            <div className='flex items-center max-sm:gap-x-4 gap-x-5'>
            <FaBars className='sm:hidden text-xl text-[#3BC1C5]' onClick={ toggleMobileSidebar } />
            <h1 className='text-[#0A090B] text-2xl font-semibold'>Dashboard</h1>
            </div>
            <div className='flex gap-x-28'>
                <div className='flex items-center gap-x-2.5 max-lg:hidden'>
                    <div class="relative w-[269px] transition-all">
                        <input
                            type="text"
                            placeholder="Search..."
                            id="searchInput"
                            class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white outline-none transition-all border-[1px] border-[#CFD3D8] rounded-lg"
                        />
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                    <div className='w-[122px] h-[33px] flex items-center gap-x-2.5 border-[1px] border-[#CFD3D8] rounded-2xl py-2 px-3 bg-[#3BC1C514]'>
                        <span className='text-sm text-[#220B35]'>Chat Id: #21</span>
                        <RxCross2 className='w-2' />
                    </div>
                </div>
                <div className='flex items-center gap-x-6 max-sm:gap-x-4'>
                    <div class="relative p-2 rounded-lg">
                        <svg class="w-6 h-6 text-[#6F767E] animate-wiggle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                d="M15.585 15.5H5.415A1.65 1.65 0 0 1 4 13a10.526 10.526 0 0 0 1.5-5.415V6.5a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.085c0 1.907.518 3.78 1.5 5.415a1.65 1.65 0 0 1-1.415 2.5zm1.915-11c-.267-.934-.6-1.6-1-2s-1.066-.733-2-1m-10.912 3c.209-.934.512-1.6.912-2s1.096-.733 2.088-1M13 17c-.667 1-1.5 1.5-2.5 1.5S8.667 18 8 17" />
                        </svg>
                        <div class="px-1 py-0.5 bg-[#FF6A55] min-w-5 rounded-full text-center text-white text-xs absolute -top-1 right-1 -end-1 translate-x-1/4 text-nowrap">
                            <div class="absolute top-0 start-0 rounded-full -z-10 animate-ping bg-[#FF6A55] w-full h-full"></div>
                            3
                        </div>
                    </div>
                    <div className='bg-[#FFBC99] w-12 h-12 max-sm:w-10 max-sm:h-10 rounded-full'>
                        <img src={customerimg} alt='customerimage' className='rounded-full' />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
