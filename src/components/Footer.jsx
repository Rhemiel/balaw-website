import React from 'react';
import bwlogo from '../assets/bwlogo.png';

function Footer() {
  return (
    <>
      <style>
        {`
          .main-footer {
            background-color: #202020;
            color: #ffffff;
            padding: 4rem 2rem;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          }

          .footer-container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1.5fr 1fr 1fr;
            gap: 40px;
          }

          /* Branding Column */
          .footer-branding h2 {
            font-size: 2rem;
            margin: 0 0 8px 0;
            font-weight: 700;
          }

          .location-subtext {
            color: #888;
            font-size: 0.95rem;
            margin-bottom: 30px;
          }

          .footer-logo {
            width: 100%;
            max-width: 450px;
            height: auto;
            display: block;
          }

          /* Titles for Links/Contacts */
          .column-header {
            color: #777;
            text-transform: capitalize;
            font-size: 0.9rem;
            margin-bottom: 25px;
            font-weight: 400;
          }

          /* Navigation Links */
          .footer-nav {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .footer-nav a {
            color: #ffffff;
            text-decoration: none;
            font-size: 1.1rem;
            transition: opacity 0.2s;
          }

          .footer-nav a:hover {
            opacity: 0.7;
          }

          /* Contacts Column */
          .contact-group {
            margin-bottom: 25px;
          }

          .contact-label {
            color: #777;
            font-size: 0.85rem;
            margin-bottom: 5px;
          }

          .contact-detail {
            margin: 2px 0;
            font-size: 1rem;
          }

          .reach-us-text {
            margin-top: 20px;
            font-weight: 500;
          }

          /* Responsive Layout */
          @media (max-width: 900px) {
            .main-footer {
              padding: 3rem 1rem;
            }

            .footer-container {
              grid-template-columns: 1fr;
              /* Center all content in the grid */
              justify-items: center; 
              text-align: center;
              gap: 60px;
            }
            
            .footer-logo {
              margin: 0 auto 20px auto; /* Centers logo image */
              max-width: 320px; /* Sized for better mobile fit */
            }

            .footer-branding h2 {
              font-size: 1.5rem;
            }

            .footer-nav {
              align-items: center; /* Centers links vertically */
            }
            
            .contact-group {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
          }
        `}
      </style>

      <footer className="main-footer">
        <div className="footer-container">
          
          {/* Left: Branding */}
          <div className="footer-branding">
            <h2>Camarines Norte State College</h2>
            <p className="location-subtext">Camarines Norte, Region V, Philippines</p>
            <img 
              src={bwlogo} 
              alt="Balawika Logo" 
              className="footer-logo" 
            />
          </div>

          {/* Middle: Links */}
          <div>
            <h4 className="column-header">Links</h4>
            <nav className="footer-nav">
              <a href="/">Home</a>
              <a href="/salita">Salita o Terminolohiya</a>
              <a href="/acknowledgement">Acknowledgement</a>
              <a href="/documentation">Documentation</a>
              <a href="/binote">Binote</a>
            </nav>
          </div>

          {/* Right: Contacts */}
          <div className="footer-contacts">
            <h4 className="column-header">Contacts</h4>
            
            <div className="contact-group">
              <p className="contact-label">PRECIOUS B. BELESTA</p>
              <p className="contact-label">Researcher 1</p>
              <p className="contact-detail">preciousbelesta@gmail.com</p>
              <p className="contact-detail">09923727018</p>
            </div>

            <div className="contact-group">
              <p className="contact-label">LEA B. VENIDA</p>
              <p className="contact-label">Researcher 2</p>
              <p className="contact-detail">venidalea@gmail.com</p>
              <p className="contact-detail">09468510645</p>
            </div>

            <p className="reach-us-text">Reach us here...</p>
          </div>

        </div>
      </footer>
    </>
  );
}

export default Footer;