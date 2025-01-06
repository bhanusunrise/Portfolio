'use client';

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HomePage from "./HomePage";
import Portfolio from "./Portfolio";
import Experience from "./Experiance";
import Contact from "./Contact";
import { useState, useEffect } from 'react';

export default function Home() {
  const [activePage, setActivePage] = useState<string>('Home');
  const [loading, setLoading] = useState<boolean>(false);
  const [animation, setAnimation] = useState<string>('fade-in'); // Track animation state

  useEffect(() => {
    const LOADING_TIME = 3000;
    
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        setAnimation('fade-in');
      }, LOADING_TIME); 
      return () => clearTimeout(timer);
    }
  }, [loading]);

  const handlePageChange = (page: string) => {
    setAnimation('fade-out');
    setTimeout(() => {
      setLoading(true);
      setActivePage(page);
    }, 500); // Delay to allow fade-out animation to complete
  };

  const renderPage = () => {
    if (loading) {
      return (
        <div style={loadingStyle}>
          <img src="./loading.gif" alt="Loading..." width={"50%"} height={"50%"}/>
        </div>
      );
    }
    switch (activePage) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Experience':
        return <Experience />;
      case 'Contact':
        return <Contact />;
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      <Navbar setActivePage={handlePageChange} />
      <div className={`content ${animation}`}>{renderPage()}</div>
      <Footer />
    </>
  );
}

const loadingStyle = {
  position: 'fixed' as 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
  backgroundColor: 'rgba(255, 255, 255, 0.8)', 
};
