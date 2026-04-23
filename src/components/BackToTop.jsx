import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('scroll', toggleVisibility);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Modern Styles
  const buttonStyle = {
    position: 'fixed',
    bottom: isMobile ? '25px' : '40px',
    right: isMobile ? '25px' : '40px',
    width: isMobile ? '45px' : '55px',
    height: isMobile ? '45px' : '55px',
    backgroundColor: isHovered ? '#ffd000' : '#ffe600', // Deepens yellow on hover
    color: '#4a0000', // Dark maroon text/icon for better contrast
    border: '2px solid #4a0000', // Subtle maroon border
    borderRadius: '12px', // Modern "Squircle" look instead of a plain circle
    cursor: 'pointer',
    boxShadow: isHovered 
      ? '0px 6px 16px rgba(0, 0, 0, 0.4)' 
      : '0px 4px 10px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
    display: isVisible ? 'flex' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: isMobile ? '20px' : '26px',
    fontWeight: 'bold',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: isHovered ? 'translateY(-5px)' : 'translateY(0)', // Lift effect
    WebkitTapHighlightColor: 'transparent',
  };

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={buttonStyle}
      aria-label="Back to top"
    >
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </button>
  );
};

export default BackToTop;