import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';

const App = () => {

  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(prevState => !prevState);
  };

  return (
    <div className='flex'>
      <Sidebar isMobileSidebarOpen={isMobileSidebarOpen} toggleMobileSidebar={toggleMobileSidebar} />
      <div className='w-full'>
        <Navbar toggleMobileSidebar={toggleMobileSidebar} />
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
