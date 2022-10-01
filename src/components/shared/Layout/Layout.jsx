import React from 'react';

// Components
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';

const Layout = ({ children }) => {
  return (
    <main className='container mx-auto px-4 font-interRegular'>
      <NavBar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
