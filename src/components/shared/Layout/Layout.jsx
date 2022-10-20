import React, { useState } from 'react';

// Components
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import { NavSidebar } from './SideBar/SideBar';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className='container mx-auto px-4 font-interRegular'>
      <NavBar setIsSidebarOpen={setIsSidebarOpen} />
      <NavSidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
