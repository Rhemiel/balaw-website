import React from 'react';

// Image Imports - Corrected to match your screenshot exactly
import Img1 from '../assets/DOCUMENTATION/DOCUMENTATION_01.png';
import Img2 from '../assets/DOCUMENTATION/DOCUMENTATION_02.png';
// Note: DOCUMENTATION_03 was missing in your screenshot, so we skip to 04
import Img4 from '../assets/DOCUMENTATION/DOCUMENTATION_04.png';
import Img5 from '../assets/DOCUMENTATION/DOCUMENTATION_05.png';
import Img6 from '../assets/DOCUMENTATION/DOCUMENTATION_06.png';
import Img7 from '../assets/DOCUMENTATION/DOCUMENTATION_07.png';
import Img8 from '../assets/DOCUMENTATION/DOCUMENTATION_08.png';
import Img9 from '../assets/DOCUMENTATION/DOCUMENTATION_09.png';
import Img10 from '../assets/DOCUMENTATION/DOCUMENTATION_10.png';
import Img11 from '../assets/DOCUMENTATION/DOCUMENTATION_11.png';
import Img12 from '../assets/DOCUMENTATION/DOCUMENTATION_12.png';
import Img13 from '../assets/DOCUMENTATION/DOCUMENTATIO_013.png'; // Corrected typo (missing 'N')
import Img14 from '../assets/DOCUMENTATION/INTERVIEW_05.jpg';    // Added the interview photo

const DocumentationPage = () => {
  // Maroon Color Palette
  const colors = {
    base: "#4a0404",    // Deep Maroon
    layer1: "#5c0909",  // Slightly lighter
    layer2: "#700d0d",  // Mid Maroon
    layer3: "#851212",  // Lighter Maroon
    text: "#f8d7da",    // Soft Pinkish-White for contrast
  };

  // Array for mapping images - Using the 13 available images from your folder
  const documentationImages = [
    Img1, Img2, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12, Img13, Img14
  ];

  const websites = [
    { name: "Surl.li (Webpage content)", link: "https://surl.li/xonhsw" },
    { name: "Surl.li (Webpage content)", link: "https://surl.li/kgpvvc" },
    { name: "Mackun Hardware", link: "https://mackunhardware.com" },
    { name: "Amazon (Fishing polyester)", link: "https://www.amazon.ca/" },
    { name: "Plastic (website unclear)", link: "#" },
    { name: "Bahura Dive", link: "https://bahuradive.com" },
    { name: "Dreamstime (Bagoong images)", link: "https://www.dreamstime.com" },
    { name: "Wiktionary (Buyod)", link: "https://bcl.wiktionary.org/wiki/buyod" },
    { name: "Pianormin (Iodine Campaign)", link: "https://pianormin.wordpress.com/2015/09/02/saktong-iodine-sa-asin-campaign-in-misamis-occidental-continues/" },
    { name: "Instagram", link: "https://www.instagram.com" },
    { name: "Wikimedia Commons (Vinzons Hall)", link: "https://commons.wikimedia.org/wiki/File:Vinzons_Municipal_Hall.jpg" },
    { name: "PhilAtlas (Vinzons Profile)", link: "https://www.philatlas.com/luzon/r05/camarines-norte/vinzons.html" },
  ];

  const imageReferences = [
    { author: "Bombo Radyo (2022)", title: "Mangingisda", link: "https://img.bomboradyo.com/legazpi/2022/06/mangingisda.jpg" },
    { author: "Bombo Radyo (2025)", title: "Mangingisda", link: "https://img.bomboradyo.com/newscenter/2025/01/Mangingisda-1.webp" },
    { author: "Flickr", title: "Gossip in market", link: "https://live.staticflickr.com" },
    { author: "Wikimedia Commons", title: "Buntog ng lambat", link: "https://upload.wikimedia.org" },
    { author: "WixStatic", title: "Image Reference", link: "https://static.wixstatic.com" },
  ];

  const sectionStyle = (bgColor) => ({
    backgroundColor: bgColor,
    padding: '40px 15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: colors.text,
    fontFamily: '"Segoe UI", Roboto, sans-serif'
  });

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    padding: '15px',
    margin: '10px 0',
    width: '100%',
    maxWidth: '800px',
    boxSizing: 'border-box',
    wordBreak: 'break-word'
  };

  return (
    <div style={{ backgroundColor: colors.base, width: '100%', overflowX: 'hidden' }}>
      
      {/* Section 1: Dokumentasyon */}
      <section style={sectionStyle(colors.base)}>
        <h1 style={{ 
          fontSize: 'clamp(2rem, 8vw, 3rem)', 
          marginBottom: '30px', 
          fontWeight: '800', 
          textAlign: 'center',
          borderBottom: `4px solid ${colors.layer3}` 
        }}>
          Dokumentasyon
        </h1>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '15px', 
          width: '100%', 
          maxWidth: '1200px' 
        }}>
          {documentationImages.map((imgSrc, i) => (
            <div key={i} style={{ 
              aspectRatio: '1/1', 
              backgroundColor: '#333', 
              borderRadius: '12px', 
              overflow: 'hidden', 
              border: `2px solid ${colors.layer2}` 
            }}>
               <img 
                src={imgSrc} 
                alt={`Dokumentasyon ${i+1}`} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
               />
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Sanggunian */}
      <section style={sectionStyle(colors.layer1)}>
        <h2 style={{ fontSize: 'clamp(1.8rem, 6vw, 2.5rem)', marginBottom: '20px' }}>Sanggunian</h2>
        <p style={{ maxWidth: '700px', textAlign: 'center', lineHeight: '1.6', fontSize: '1rem', opacity: 0.9 }}>
          Ang bahaging ito ay naglalaman ng mga pinagkunan ng impormasyon, datos, at media na ginamit sa pagbuo ng proyektong ito. Lahat ng materyales ay kinilala alinsunod sa mga pamantayan ng wastong pagbanggit.
        </p>
      </section>

      {/* Section 3: Mga Website */}
      <section style={sectionStyle(colors.layer2)}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', marginBottom: '30px', textAlign: 'center' }}>Mga Website / Artikulo</h2>
        <div style={{ width: '100%', maxWidth: '800px' }}>
            {websites.map((site, index) => (
            <div key={index} style={cardStyle}>
                <p style={{ margin: 0 }}>
                <strong>{site.name}</strong>. (n.d.). Nakuha noong April 19, 2026.
                <br />
                <a href={site.link} target="_blank" rel="noreferrer" style={{ color: '#ffb3b3', textDecoration: 'none', fontSize: '0.85rem' }}>{site.link}</a>
                </p>
            </div>
            ))}
        </div>
      </section>

      {/* Section 4: Mga Larawan */}
      <section style={sectionStyle(colors.layer3)}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', marginBottom: '30px', textAlign: 'center' }}>Mga Larawan</h2>
        <div style={{ width: '100%', maxWidth: '800px' }}>
          {imageReferences.map((img, index) => (
            <div key={index} style={{ ...cardStyle, borderLeft: `5px solid ${colors.text}` }}>
              <p style={{ margin: 0 }}>
                {img.author}. (2026). <em>{img.title}</em> [Photograph].
                <br />
                <a href={img.link} target="_blank" rel="noreferrer" style={{ color: '#ffb3b3', fontSize: '0.8rem', wordBreak: 'break-all' }}>{img.link}</a>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '40px 20px', backgroundColor: '#2b0202', color: colors.text, fontSize: '0.8rem' }}>
        &copy; 2026 Dokumentasyon Proyekto. Lahat ng Karapatan ay Rezervado.
      </footer>
    </div>
  );
};

export default DocumentationPage;