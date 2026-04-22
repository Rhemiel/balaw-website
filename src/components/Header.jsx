import { NavLink } from 'react-router-dom';
import logo from '../assets/logowt2.png';

function Header() {
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
          background-color: #202020; /* Matches header */
        }

        /* 2. HEADER STYLES */
        .main-header {
          display: block;
          background-color: #202020;
          color: white;
          padding: 0.5rem 0;
          box-shadow: 0 2px 10px rgba(0,0,0,0.3);
          position: relative;
          z-index: 1000;
          width: 100%;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
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

        .nav-links {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 0;
          transition: color 0.3s;
          border-bottom: 2px solid transparent;
        }

        .nav-links a:hover {
          color: #ffd700;
        }

        .nav-links a.active {
          color: #ffd700;
          border-bottom-color: #ffd700;
        }

        @media (max-width: 768px) {
          .header-content {
            flex-direction: column;
            text-align: center;
          }
          .nav-links {
            justify-content: center;
          }
          .header-logo {
            height: 80px;
          }
        }
      `}</style>

      <header className="main-header">
        <div className="container header-content">
          <div className="logo-area">
            <img 
              src={logo} 
              alt="Balawika Logo"
              className="header-logo"
            />
          </div>
          <nav className="nav-links">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/terminology">Salita o Terminolohiya</NavLink>
            <NavLink to="/acknowledgement">Pakilala</NavLink>
            <NavLink to="/documentation">Dokumentasyon</NavLink>
            <NavLink to="/binote">Mananaliksik</NavLink>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;