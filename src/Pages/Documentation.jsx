import React from 'react';

// Image Imports
import Img1 from '../assets/DOCUMENTATION/DOCUMENTATION_01.png';
import Img2 from '../assets/DOCUMENTATION/DOCUMENTATION_02.png';
import Img4 from '../assets/DOCUMENTATION/DOCUMENTATION_04.png';
import Img5 from '../assets/DOCUMENTATION/DOCUMENTATION_05.png';
import Img6 from '../assets/DOCUMENTATION/DOCUMENTATION_06.png';
import Img7 from '../assets/DOCUMENTATION/DOCUMENTATION_07.png';
import Img8 from '../assets/DOCUMENTATION/DOCUMENTATION_08.png';
import Img9 from '../assets/DOCUMENTATION/DOCUMENTATION_09.png';
import Img10 from '../assets/DOCUMENTATION/DOCUMENTATION_10.png';
import Img11 from '../assets/DOCUMENTATION/DOCUMENTATION_11.png';
import Img12 from '../assets/DOCUMENTATION/DOCUMENTATION_12.png';
import Img13 from '../assets/DOCUMENTATION/DOCUMENTATIO_013.png'; 
import Img14 from '../assets/DOCUMENTATION/INTERVIEW_05.jpg';

const DocumentationPage = () => {
  const colors = {
    base: "#4a0404",    
    layer1: "#5c0909",  
    layer2: "#700d0d",  
    layer3: "#851212",  
    text: "#f8d7da",
    accent: "#ffb3b3"
  };

  const documentationImages = [
    Img1, Img2, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12, Img13, Img14
  ];

  const websites = [
    { name: "Surl.li", title: "Webpage content", link: "https://surl.li/xonhsw" },
    { name: "Surl.li", title: "Webpage content", link: "https://surl.li/kgpvvc" },
    { name: "Mackun Hardware", title: "Official Website", link: "https://mackunhardware.com" },
    { name: "Amazon", title: "Fishing polyester", link: "https://www.amazon.ca/" },
    { name: "Plastic Resource", title: "Information on Plastics", link: "#" },
    { name: "Bahura Dive", title: "Diving and Marine Resources", link: "https://bahuradive.com" },
    { name: "Dreamstime", title: "Bagoong images", link: "https://www.dreamstime.com" },
    { name: "Wiktionary", title: "Buyod", link: "https://bcl.wiktionary.org/wiki/buyod" },
    { name: "Pianormin", title: "Saktong Iodine sa Asin Campaign in Misamis Occidental Continues", link: "https://pianormin.wordpress.com/2015/09/02/saktong-iodine-sa-asin-campaign-in-misamis-occidental-continues/" },
    { name: "Instagram", title: "Social Media Content", link: "https://www.instagram.com" },
    { name: "Wikimedia Commons", title: "File:Vinzons Municipal Hall.jpg", link: "https://commons.wikimedia.org/wiki/File:Vinzons_Municipal_Hall.jpg" },
    { name: "PhilAtlas", title: "Vinzons Profile", link: "https://www.philatlas.com/luzon/r05/camarines-norte/vinzons.html" },
  ];

  const imageReferences = [
    { author: "Bombo Radyo", year: "2022", title: "Mangingisda", link: "https://img.bomboradyo.com/legazpi/2022/06/mangingisda.jpg" },
    { author: "Bombo Radyo", year: "2025", title: "Mangingisda", link: "https://img.bomboradyo.com/newscenter/2025/01/Mangingisda-1.webp" },
    { author: "Flickr", year: "n.d.", title: "Gossip in market", link: "https://live.staticflickr.com" },
    { author: "Wikimedia Commons", year: "n.d.", title: "Buntog ng lambat", link: "https://upload.wikimedia.org" },
    { author: "WixStatic", year: "n.d.", title: "Image Reference", link: "https://static.wixstatic.com" },
  ];

  const sectionStyle = (bgColor) => ({
    backgroundColor: bgColor,
    padding: '60px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: colors.text,
    fontFamily: '"Segoe UI", Roboto, sans-serif'
  });

  return (
    <div style={{ backgroundColor: colors.base, width: '100%', overflowX: 'hidden' }}>
      {/* Dynamic CSS for Indentation and Presentable Hover */}
      <style>
        {`
          .apa-card {
            display: block;
            text-decoration: none;
            color: inherit;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            padding: 20px 20px 20px 60px; /* Space for the indent */
            margin: 15px 0;
            width: 100%;
            max-width: 800px;
            box-sizing: border-box;
            text-align: justify;
            text-indent: -40px; /* The Hanging Indent */
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
            cursor: pointer;
            line-height: 1.6;
          }

          .apa-card:hover {
            background: rgba(255, 255, 255, 0.12);
            border-color: ${colors.accent};
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.3);
          }

          .apa-card span.link-text {
            color: ${colors.accent};
            text-indent: 0;
            display: inline;
            word-break: break-all;
          }
        `}
      </style>

      {/* Section 1: Dokumentasyon */}
      <section style={sectionStyle(colors.base)}>
        <h1 style={{ 
          fontSize: 'clamp(2.2rem, 8vw, 3.5rem)', 
          marginBottom: '40px', 
          fontWeight: '900', 
          textAlign: 'center',
          letterSpacing: '1px',
          borderBottom: `4px solid ${colors.layer3}` 
        }}>
          Dokumentasyon
        </h1>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '20px', 
          width: '100%', 
          maxWidth: '1200px' 
        }}>
          {documentationImages.map((imgSrc, i) => (
            <div key={i} style={{ 
              aspectRatio: '1/1', 
              backgroundColor: '#1a0101', 
              borderRadius: '16px', 
              overflow: 'hidden', 
              border: `2px solid ${colors.layer2}`,
              boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
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
        <h2 style={{ fontSize: 'clamp(1.8rem, 6vw, 2.5rem)', marginBottom: '20px', fontWeight: '700' }}>Sanggunian</h2>
        <p style={{ maxWidth: '750px', textAlign: 'justify', lineHeight: '1.8', fontSize: '1.1rem', opacity: 0.95 }}>
          Ang bahaging ito ay naglalaman ng mga pinagkunan ng impormasyon, datos, at media na ginamit sa pagbuo ng proyektong ito. Lahat ng materyales ay kinilala alinsunod sa mga pamantayan ng wastong pagbanggit sa estilong APA.
        </p>
      </section>

      {/* Section 3: Mga Website */}
      <section style={sectionStyle(colors.layer2)}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.2rem)', marginBottom: '30px', textAlign: 'center', fontWeight: '700' }}>Mga Website / Artikulo</h2>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {websites.map((site, index) => (
            <a key={index} href={site.link} target="_blank" rel="noreferrer" className="apa-card">
                {site.name}. (n.d.). <em>{site.title}</em>. Nakuha noong April 19, 2026, mula sa <span className="link-text">{site.link}</span>
            </a>
            ))}
        </div>
      </section>

      {/* Section 4: Mga Larawan */}
      <section style={sectionStyle(colors.layer3)}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.2rem)', marginBottom: '30px', textAlign: 'center', fontWeight: '700' }}>Mga Larawan</h2>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {imageReferences.map((img, index) => (
            <a key={index} href={img.link} target="_blank" rel="noreferrer" className="apa-card">
                {img.author}. ({img.year}). <em>{img.title}</em> [Larawan]. Nakuha mula sa <span className="link-text">{img.link}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '50px 20px', backgroundColor: '#1a0101', color: colors.text, fontSize: '0.9rem', opacity: 0.8 }}>
        &copy; 2026 Dokumentasyon Proyekto. Lahat ng Karapatan ay Reserbado.
      </footer>
    </div>
  );
};

export default DocumentationPage;