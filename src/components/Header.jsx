import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logowt2.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <style>{`
        /* 1. RESET & GLOBAL STYLES */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
          background-color: #202020;
        }

        /* 2. HEADER STYLES */
        .main-header {
          background-color: #202020;
          color: white;
          padding: 0;
          box-shadow: 0 2px 10px rgba(0,0,0,0.3);
          position: relative;
          z-index: 1000;
          width: 100%;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          /* FIX: Keep items aligned in a row for desktop */
          display: flex;
          justify-content: space-between;
          align-items: center;
          min-height: 100px; 
        }

        .logo-area {
          display: flex;
          align-items: center;
          line-height: 0;
        }

        .header-logo {
          height: 80px;
          width: auto;
          display: block;
          transform: scale(1.1); 
          transition: transform 0.3s ease;
        }

        /* MENU TOGGLE BUTTON (Hidden on Desktop) */
        .menu-toggle {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: none;
          border: none;
          cursor: pointer;
          padding: 10px;
          width: 44px;
          height: 44px;
          position: relative;
        }

        .menu-toggle span {
          display: block;
          width: 28px;
          height: 2px;
          background-color: white;
          transition: 0.3s;
          position: absolute;
        }

        .menu-toggle span:nth-child(1) { transform: translateY(-8px); }
        .menu-toggle span:nth-child(2) { opacity: 1; }
        .menu-toggle span:nth-child(3) { transform: translateY(8px); }

        .menu-toggle.open span:nth-child(1) { transform: rotate(45deg); }
        .menu-toggle.open span:nth-child(2) { opacity: 0; }
        .menu-toggle.open span:nth-child(3) { transform: rotate(-45deg); }

        /* NAVIGATION LINKS */
        .nav-links {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          padding: 0.8rem 0;
          transition: color 0.3s;
          border-bottom: 2px solid transparent;
          white-space: nowrap;
        }

        .nav-links a:hover, .nav-links a.active {
          color: #ffd700;
        }

        .nav-links a.active {
          border-bottom-color: #ffd700;
        }

        /* 3. MOBILE RESPONSIVE QUERIES */
        @media (max-width: 992px) {
          .container {
            flex-direction: column;
            align-items: stretch;
            min-height: auto;
            padding: 0;
          }

          /* Keep logo and burger on the same line on mobile */
          .mobile-top-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding: 0.5rem 20px;
          }

          .header-logo {
            height: 60px;
          }

          .menu-toggle {
            display: flex;
          }

          .nav-links {
            flex-direction: column;
            gap: 0;
            width: 100%;
            text-align: center;
            max-height: ${isMenuOpen ? '500px' : '0'}; 
            overflow: hidden;
            transition: max-height 0.4s ease-in-out;
            background-color: #202020;
          }

          .nav-links a {
            padding: 1.2rem;
            width: 100%;
            display: block;
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }
        }
      `}</style>

      <header className="main-header">
        <div className="container">
          {/* Logo and Mobile Toggle wrapped together for easier alignment */}
          <div className="mobile-top-bar">
            <div className="logo-area">
              <img 
                src={logo} 
                alt="Balawika Logo"
                className="header-logo"
              />
            </div>

            <button 
              className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} 
              onClick={toggleMenu}
              aria-label="Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          <nav className="nav-links">
            <NavLink to="/" end onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink to="/terminology" onClick={() => setIsMenuOpen(false)}>Salita o Terminolohiya</NavLink>
            <NavLink to="/acknowledgement" onClick={() => setIsMenuOpen(false)}>Pagkilala</NavLink>
            <NavLink to="/documentation" onClick={() => setIsMenuOpen(false)}>Dokumentasyon</NavLink>
            <NavLink to="/binote" onClick={() => setIsMenuOpen(false)}>Mananaliksik</NavLink>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;