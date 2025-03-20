import React, { useState } from 'react';
import logo from '../../assets/Logo.png';
import { FiHome } from 'react-icons/fi';
import { RxDashboard } from 'react-icons/rx';
import configurechat from '../../assets/Sidebar/chatconfigure.png';
import chatbot from '../../assets/Sidebar/chatbot.png';
import { PiCalendarDot } from 'react-icons/pi';
import { FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6';
import { IoIosHelpCircleOutline } from 'react-icons/io';
import { MdLightMode } from 'react-icons/md';
import { CiDark } from 'react-icons/ci';
import '../../index.css';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isMobileSidebarOpen, toggleMobileSidebar }) => {

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen((prevMode) => !prevMode);
    };

    const SidebarMenu = [
        { id: 1, icon: <FiHome className='w-6 h-6' />, title: 'Home', path: '/' },
        { id: 2, icon: <RxDashboard className='w-6 h-6' />, title: 'Dashboard', path: '/dashboard' },
        { id: 3, icon: <img src={configurechat} alt='Configure Chat' className='w-6 h-6' />, title: 'Configure Chat', path: '/configurechat' },
        { id: 4, icon: <img src={chatbot} alt='Chatbot' className='w-6 h-6' />, title: 'Chatbot', path: '/chatbot' },
        { id: 5, icon: <PiCalendarDot className='w-6 h-6' />, title: 'Calendar', path: '/calendar' }
    ];

    return (
        <>
            <section className={`h-svh bg-[#FCFCFC] px-5 pt-4 pb-6 overflow-y-auto custom-scrollbar transition-all duration-500 ${isSidebarOpen ? 'w-[280px]' : 'w-[100px]'} max-md:hidden max-md:absolute max-md:z-50 max-md:top-[88px]`}>
                <div className='flex flex-col justify-between h-full max-sm:h-auto'>
                    <div className='flex flex-col gap-y-12 max-sm:pb-5'>
                        <div className='flex items-center justify-center'>
                            <img src={logo} alt='logo' />
                        </div>
                        <ul className='space-y-2'>
                            {SidebarMenu.map((data) => (
                                <NavLink to={data.path} key={data.id} className='text-[#6F767E] text-[15px] font-medium flex items-center gap-x-3 p-3 hover:bg-[#3BC1C5] hover:text-white rounded-xl'>
                                    {data.icon} {isSidebarOpen && data.title}
                                </NavLink>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div className='flex justify-end border-b-2 border-[#F4F4F4] pb-4'>
                            {isSidebarOpen ? (
                                <FaAnglesLeft className='w-6 h-6 text-[#6F767E] cursor-pointer' onClick={toggleSidebar} />
                            ) : (
                                <FaAnglesRight className='w-6 h-6 text-[#6F767E] cursor-pointer' onClick={toggleSidebar} />
                            )}
                        </div>
                        <div className='space-y-4 pt-4'>
                            <div className='p-3 flex items-center gap-x-3'>
                                <IoIosHelpCircleOutline className='w-6 h-6 text-[#6F767E]' />
                                {isSidebarOpen && <p className='text-[#6F767E] text-[15px] font-semibold'>Help</p>}
                            </div>
                            <div className='flex items-center p-1 rounded-[40px] cursor-pointer bg-[#F4F4F4]'>
                                {isSidebarOpen ? (
                                    <div className='flex w-full justify-between p-1 rounded-[32px] bg-[#F4F4F4]'>
                                        <div
                                            className={`flex items-center gap-x-2 py-1 pr-4 pl-2 rounded-[32px] cursor-pointer ${!isDarkMode ? 'bg-[#FCFCFC] text-[#1A1D1F]' : 'text-[#6F767E]'}`}
                                            onClick={() => setIsDarkMode(false)}
                                        >
                                            <MdLightMode className='w-6 h-6' />
                                            <p className='text-[15px] font-semibold'>Light</p>
                                        </div>
                                        <div
                                            className={`flex items-center gap-x-2 py-1 pr-4 pl-2 rounded-[32px] cursor-pointer ${isDarkMode ? 'bg-[#FCFCFC] text-[#1A1D1F]' : 'text-[#6F767E]'}`}
                                            onClick={() => setIsDarkMode(true)}
                                        >
                                            <CiDark className='w-6 h-6' />
                                            <p className='text-[15px] font-semibold'>Dark</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div
                                        className='flex items-center justify-center gap-x-2 py-1 pr-4 pl-2 rounded-[32px] cursor-pointer bg-[#FCFCFC] text-[#1A1D1F]'
                                        onClick={toggleTheme}
                                    >
                                        {isDarkMode ? <CiDark className='w-6 h-6' /> : <MdLightMode className='w-6 h-6' />}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {
                isMobileSidebarOpen ? (
                    <section className={`h-svh bg-[#FCFCFC] px-5 pt-4 pb-6 overflow-y-auto custom-scrollbar transition-all duration-500 ${isSidebarOpen ? 'w-[280px]' : 'w-[100px]'} md:hidden max-md:absolute max-md:z-50 max-md:top-[88px]`}>
                        <div className='flex flex-col justify-between h-full max-md:h-auto'>
                            <div className='flex flex-col gap-y-12 max-md:pb-5'>
                                <div className='flex items-center justify-center'>
                                    <img src={logo} alt='logo' />
                                </div>
                                <ul className='space-y-2'>
                                    {SidebarMenu.map((data) => (
                                        <NavLink to={data.path} key={data.id} className='text-[#6F767E] text-[15px] font-medium flex items-center gap-x-3 p-3 hover:bg-[#3BC1C5] hover:text-white rounded-xl' onClick={toggleMobileSidebar}>
                                            {data.icon} {isSidebarOpen && data.title}
                                        </NavLink>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <div className='flex justify-end border-b-2 border-[#F4F4F4] pb-4'>
                                    {isSidebarOpen ? (
                                        <FaAnglesLeft className='w-6 h-6 text-[#6F767E] cursor-pointer' onClick={toggleSidebar} />
                                    ) : (
                                        <FaAnglesRight className='w-6 h-6 text-[#6F767E] cursor-pointer' onClick={toggleSidebar} />
                                    )}
                                </div>
                                <div className='space-y-4 pt-4'>
                                    <div className='p-3 flex items-center gap-x-3'>
                                        <IoIosHelpCircleOutline className='w-6 h-6 text-[#6F767E]' />
                                        {isSidebarOpen && <p className='text-[#6F767E] text-[15px] font-semibold'>Help</p>}
                                    </div>
                                    <div className='flex items-center p-1 rounded-[40px] cursor-pointer bg-[#F4F4F4]'>
                                        {isSidebarOpen ? (
                                            <div className='flex w-full justify-between p-1 rounded-[32px] bg-[#F4F4F4]'>
                                                <div
                                                    className={`flex items-center gap-x-2 py-1 pr-4 pl-2 rounded-[32px] cursor-pointer ${!isDarkMode ? 'bg-[#FCFCFC] text-[#1A1D1F]' : 'text-[#6F767E]'}`}
                                                    onClick={() => setIsDarkMode(false)}
                                                >
                                                    <MdLightMode className='w-6 h-6' />
                                                    <p className='text-[15px] font-semibold'>Light</p>
                                                </div>
                                                <div
                                                    className={`flex items-center gap-x-2 py-1 pr-4 pl-2 rounded-[32px] cursor-pointer ${isDarkMode ? 'bg-[#FCFCFC] text-[#1A1D1F]' : 'text-[#6F767E]'}`}
                                                    onClick={() => setIsDarkMode(true)}
                                                >
                                                    <CiDark className='w-6 h-6' />
                                                    <p className='text-[15px] font-semibold'>Dark</p>
                                                </div>
                                            </div>
                                        ) : (
                                            <div
                                                className='flex items-center justify-center gap-x-2 py-1 pr-4 pl-2 rounded-[32px] cursor-pointer bg-[#FCFCFC] text-[#1A1D1F]'
                                                onClick={toggleTheme}
                                            >
                                                {isDarkMode ? <CiDark className='w-6 h-6' /> : <MdLightMode className='w-6 h-6' />}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : null
            }
        </>
    );
};

export default Sidebar;
