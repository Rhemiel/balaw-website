import React from 'react';
import prec from '../assets/MANANALIKSIK_PRECIOUS.png';
import lea from '../assets/MANANALIKSIK_LEA.png';

const MananaliksikPage = () => {
  // A palette of maroon shades to create the "layered" effect
  const maroonShades = [
    '#800000', // Maroon
    '#630310', // Deep Wine
    '#4a0404', // Dark Blood Red
    '#5c0d12', // Garnet
  ];

  const teamMembers = [
    {
      roleTitle: 'Mga Lumikha Ng Website',
      name: 'PRECIOUS B. BELESTA',
      role: 'Mananaliksik',
      description: 'Si Precious B. Belesta ay nagtapos sa Anita V. Romero Elementary School at sekondarya naman sa Camarines Norte National High School. Siya ay kasalukuyang nag-aaral sa Camarines Norte State College - Abaño Campus sa ilalim ng kursong Bachelor of Secondary Education Major in Filipino. Kaniyang pinalalawak at pinalalago ang kaalaman sa pananaliksik at asignaturang Filipino.',
      image: prec // Replace with actual image path
    },
    {
      roleTitle: null, // Only the first section has the main header
      name: 'LEA B. VENIDA',
      role: 'Mananaliksik',
      description: 'Si Lea B. Venida ay nagtapos ng Elementarya sa Batobalani Elementary School at Sekondarya naman sa Jose Panganiban National High School. Siya ay kasalukuyang nag-aaral sa Camarines Norte State College - Abaño Campus sa ilalim ng kursong Bachelor of Secondary Education Major in Filipino. Pinapayabong at hinahasa pa niya ang kaniyang kaalaman at kakayahan sa asignaturang Filipino.',
      image: lea
    },
    {
      roleTitle: null,
      name: 'Pangalan ng Tagapayo',
      role: 'Tagapayo',
      description: 'Si Lea B. Venida ay nagtapos ng Elementarya sa Batobalani Elementary School at Sekondarya naman sa Jose Panganiban National High School. Siya ay kasalukuyang nag-aaral sa Camarines Norte State College - Abaño Campus sa ilalim ng kursong Bachelor of Secondary Education Major in Filipino. Pinapayabong at hinahasa pa niya ang kaniyang kaalaman at kakayahan sa asignaturang Filipino.',
      image: 'https://via.placeholder.com/200'
    }
  ];

  return (
    <div style={styles.container}>
      {teamMembers.map((member, index) => (
        <section 
          key={index} 
          style={{ 
            ...styles.section, 
            backgroundColor: maroonShades[index % maroonShades.length] 
          }}
        >
          <div style={styles.contentWrapper}>
            {member.roleTitle && <h1 style={styles.mainTitle}>{member.roleTitle}</h1>}
            
            <div style={styles.card}>
              <img 
                src={member.image} 
                alt={member.name} 
                style={styles.profileImage} 
              />
              <h2 style={styles.nameText}>{member.name}</h2>
              <h3 style={styles.roleTagline}>{member.role}</h3>
              <p style={styles.descriptionText}>{member.description}</p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: '100vh',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 20px',
    transition: 'transform 0.3s ease',
  },
  contentWrapper: {
    maxWidth: '800px',
    width: '100%',
    textAlign: 'center',
    color: '#ffffff',
  },
  mainTitle: {
    fontSize: '2.5rem',
    marginBottom: '40px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    borderBottom: '2px solid rgba(255,255,255,0.3)',
    display: 'inline-block',
    paddingBottom: '10px',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  profileImage: {
    width: '220px',
    height: '220px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '5px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    marginBottom: '25px',
  },
  nameText: {
    fontSize: '2rem',
    margin: '10px 0 5px 0',
    fontFamily: 'serif',
  },
  roleTagline: {
    fontSize: '1.2rem',
    fontStyle: 'italic',
    color: '#ffcccb', // Light pinkish-red for contrast
    marginBottom: '20px',
    fontWeight: '400',
  },
  descriptionText: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    maxWidth: '600px',
    margin: '0 auto',
    opacity: '0.9',
  },
};

export default MananaliksikPage;