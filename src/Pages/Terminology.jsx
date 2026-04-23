import React from 'react';

// Import Images kagamitan
import bangkaImg from '../assets/termpic/KAGAMITAN_BANGKA.jpg';
import batingalImg from '../assets/termpic/KAGAMITAN_BATINGAL.jpg';
import bayongImg from '../assets/termpic/KAGAMITAN_BAYONG.jpg';
import boardImg from '../assets/termpic/KAGAMITAN_BOARD.jpg';
import haloImg from '../assets/termpic/KAGAMITAN_HALO.jpg';
import hulmaImg from '../assets/termpic/KAGAMITAN_HULMAHAN.jpg';
import kapingImg from '../assets/termpic/KAGAMITAN_KAPING.jpg';
import kawilImg from '../assets/termpic/KAGAMITAN_KAWIL.jpg';
import lambatImg from '../assets/termpic/KAGAMITAN_LAMBAT.jpg';
import lubidImg from '../assets/termpic/KAGAMITAN_LUBID.jpg';
import lusongImg from '../assets/termpic/KAGAMITAN_LUSONG.jpg';
import makarinaImg from '../assets/termpic/KAGAMITAN_MAKARINA.jpg';
import netImg from '../assets/termpic/KAGAMITAN_NET.jpg';
import pamuntotImg from '../assets/termpic/KAGAMITAN_PAMUNTOT.jpg';
import plastikImg from '../assets/termpic/KAGAMITAN_PLASTIK.jpg';
import sakoImg from '../assets/termpic/KAGAMITAN_SAKO.jpg';
import styroImg from '../assets/termpic/KAGAMITAN_STYROFOAM.jpg';
import taktakanImg from '../assets/termpic/KAGAMITAN_TAKTAKAN.jpg';
import tiklisImg from '../assets/termpic/KAGAMITAN_TIKLIS.jpg';

// Import audio kagamitan
import bangka from '../assets/RECORD/KAGAMITAN/BANGKA_KAGAMITAN.m4a';
import batingal from '../assets/RECORD/KAGAMITAN/BATINGAL_KAGAMITAN.m4a';
import bayong from '../assets/RECORD/KAGAMITAN/BAYONG_KAGAMITAN.m4a';
import board from '../assets/RECORD/KAGAMITAN/BOARD_KAGAMITAN.m4a';
import halo from '../assets/RECORD/KAGAMITAN/HALO_KAGAMITAN.m4a';
import hulma from '../assets/RECORD/KAGAMITAN/HULMAHAN_KAGAMITAN.m4a';
import kaping from '../assets/RECORD/KAGAMITAN/KAPING_KAGAMITAN.m4a';
import kawil from '../assets/RECORD/KAGAMITAN/KAWIL_KAGAMITAN.m4a';
import lambat from '../assets/RECORD/KAGAMITAN/LAMBAT_KAGAMITAN.m4a';
import lubid from '../assets/RECORD/KAGAMITAN/LUBID_KAGAMITAN.m4a';
import lusong from '../assets/RECORD/KAGAMITAN/LUSONG_KAGAMITAN.m4a';
import makarina from '../assets/RECORD/KAGAMITAN/MAKARINA_KAGAMITAN.m4a';
import net from '../assets/RECORD/KAGAMITAN/NET_KAGAMITAN.m4a';
import pamuntot from '../assets/RECORD/KAGAMITAN/PAMUNTOT_KAGAMITAN.m4a';
import plastik from '../assets/RECORD/KAGAMITAN/PLASTIK_KAGAMITAN.m4a';
import sako from '../assets/RECORD/KAGAMITAN/SAKO_KAGAMITAN.m4a';
import estyrofoam from '../assets/RECORD/KAGAMITAN/ESTYROFOAM_KAGAMITAN.m4a';
import taktakan from '../assets/RECORD/KAGAMITAN/TAKTAKAN_KAGAMITAN.m4a';
import tiklis from '../assets/RECORD/KAGAMITAN/TIKLIS_KAGAMITAN.m4a';

function Terminology() {
  
  // --- DATA ARRAYS ---
  const kagamitanData = [
    { term: "Bangka Bang-ká (mabilis, pangngalan)", audio: bangka, definition: "Sinasakyan ng mga manlalaot na gawa sa kahoy papunta sa gitna ng dagat upang makahuli.", image: bangkaImg },
    { term: "Batingal Ba-ti-ngál (mabilis, pangngalan)", audio: batingal, definition: "Isang uri ng lambat na may maliliit na butas na ginagamit sa paghuli ng balaw.", image: batingalImg },
    { term: "Bayong Ba-yóng ( mabilis, pangngalan)", audio: bayong, definition: "Tumutukoy sa lalagyan na ginagamit sa pag-iipon ng mga nahuling balaw upang mapanatiling maayos at malinis ito.", image: bayongImg },
    { term: "Board bóard ( mabilis, pangngalan )", audio: board, definition: "Isang uri ng kagamitang panghuli sa dagat na gawa sa tabla o bakal; karaniwang ikinakabit ito sa magkabilang dulo ng lambat.", image: boardImg },
    { term: "Halo Ha-lò ( malumay, pangngalan)", audio: halo, definition: "Isang mahabang kahoy na ginagamit na pandukdok o pangbayo sa binilad na balaw.", image: haloImg },
    { term: "Hulmahan Hul-ma-hán (pangngalan)", audio: hulma, definition: "Tawag sa lalagyan o kasangkapan na ginagamit sa paghuhulma tulad ng pagbuo ng balaw sa nais nitong anyo o hugis.", image: hulmaImg },
    { term: "Kaping Kà -ping (pangngalan)", audio: kaping, definition: "Isang kagamitan na ginagamit sa pagpapatuyo o pagbibilad ng mga balaw. Ito ay karaniwang tinatawag ding screen.", image: kapingImg },
    { term: "Kawil Ka-wíl (pangngalan)", audio: kawil, definition: "Isang kagamitan na ginagamit sa paghuli ng lamang-dagat, na nilalagyan ng pain upang makahuli.", image: kawilImg },
    { term: "Lambat Lam-bát (pangngalan)", audio: lambat, definition: "Isang kagamitang ginagamit sa paghuli ng iba’t ibang uri ng lamang-dagat.", image: lambatImg },
    { term: "Lubid Lù-bid (pangngalan)", audio: lubid, definition: "Ginagamit sa paghila ng lambat upang maiahon ang mga nahuling lamang-dagat.", image: lubidImg },
    { term: "Lusong Lù-song (pangngalan)", audio: lusong, definition: "Tumutukoy sa lagayan ng balaw upang mabayo ang pinatuyong balaw.", image: lusongImg },
    { term: "Makarina Ma-ka-ri-ná (pangngalan)", audio: makarina, definition: "Isang kagamitan na lapad, kung saan ang mga balaw ay inilalagay upang maiwagwag o maalis ang mga dumi.", image: makarinaImg },
    { term: "Net Nét (pangngalan)", audio: net, definition: "Isang bahagi ng kaping o screen na ginagamit sa pagpapatuyo o pagbibilad ng mga balaw.", image: netImg },
    { term: "Pamuntot Pa-mun-tót (pangngalan)", audio: pamuntot, definition: "Ito ay bahagi ng lambat kung saan ikinakabit sa dulo ng lambat para lumubog ito at hindi lumutang sa tubig.", image: pamuntotImg },
    { term: "Plastik Plas-tík (pangngalan)", audio: plastik, definition: "Nagsisilbing lagayan na ginagamit sa pagbebenta ng balaw.", image: plastikImg },
    { term: "Sako Sà-ko (pangngalan)", audio: sako, definition: "Lalagyan ng balaw upang maiawas ang asin para di mabulok ang balaw.", image: sakoImg },
    { term: "Styrofoam Es-tay-ro-fóm (pangngalan)", audio: estyrofoam, definition: "Lalagyan o imbakan ng mga balaw.", image: styroImg },
    { term: "Taktakan Tak-ta-kán (pangngalan)", audio: taktakan, definition: "Nagsisilbing lalagyan o imbakan ng mga balaw na nahuli.", image: taktakanImg },
    { term: "Tiklis Tik-lís (pangngalan)", audio: tiklis, definition: "Lalagyan na ginagamit sa pag-iimbak o paglalagay ng balaw.", image: tiklisImg }
  ];

  const prosesoTableData = [
    { term: "Pag-aariya", speech: "Pag-aariya", definition: "Terminolohiya para sa paglalatag ng lambat.", image: null },
  ];

  const sangkapData = [
    { term: "Asin", speech: "Asin", definition: "Ginagamit upang mapanatiling sariwa ang balaw.", image: null },
  ];

  const ibaPangData = [
    { term: "Makarina", speech: "Makarina", definition: "Proseso ng paglilinis ng mga nahuling balaw.", image: null },
  ];

  // --- LOGIC ---
  const playAudio = (audioFile) => {
    if (audioFile) {
      const audio = new Audio(audioFile);
      audio.play().catch(error => console.error("Error playing audio:", error));
    }
  };

  // --- REUSABLE TABLE COMPONENT ---
  const TerminologyTable = ({ data }) => (
    <div style={styles.tableContainer}>
      <table style={styles.table}>
        <thead>
          <tr style={styles.tableHeaderRow}>
            <th style={styles.th}>Salita / Terminolohiya</th>
            <th style={styles.th}>Larawan</th>
            <th style={styles.th}>Kahulugan</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} style={styles.tableRow}>
              <td style={styles.termCell}>
                <span style={styles.termText}>{item.term}</span>
                <button onClick={() => playAudio(item.audio)} style={styles.voiceBtn} disabled={!item.audio}>🔊 Pakinggan</button>
              </td>
              <td style={styles.imageCell}>
                {item.image ? (
                  <img src={item.image} alt={item.term} style={styles.termImg} />
                ) : (
                  <div style={styles.noImg}>Walang Larawan</div>
                )}
              </td>
              <td style={styles.definitionCell}>{item.definition}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div style={styles.mainWrapper}>
      <section style={{ ...styles.section, backgroundColor: '#3d0101' }}>
        <h1 style={styles.titleLarge}>PROSESO NG PAGBABALAW</h1>
        <p style={styles.descriptionText}>
          Hindi lamang pangkabuhayang maituturing ang pagbabalaw, isa itong tradisyon na naging bahagi ng pang araw-araw na buhay ng mga lokal sa Barangay Sabang at Sula. Tulad ng ibang larangan, ang pagbabalaw ay may sistematikong proseso upang epektibong makagawa ng de-kalidad na produkto na gawa sa balaw.
        </p>
      </section>

      <section style={{ ...styles.section, backgroundColor: '#5c0808' }}>
        <h2 style={styles.subtitle}>Mga Hakbang sa Proseso ng Pagbabalaw</h2>
        <ol style={styles.processList}>
          <li>Paghahanda ng mga kinakailangan sa paghuli ng balaw</li>
          <li>Pagpunta ng mga lokal na magbabalaw sa dagat</li>
          <li>Pag - aariya o pagtapon ng lambat sa ilalim ng dagat</li>
          <li>Pag-ahon ng lambat sa bangka matapos mahuli ang mga balaw</li>
          <li>Paghuhugas ng mga balaw sa dagat upang maging malinis</li>
          <li>Pagsasalya ng mga nahuling balaw sa bangka</li>
          <li>Pagbalik ng mga lokal na magbabalaw sa kanilang tirahan</li>
          <li>Pagtatakal ng mga balaw gamit ang lata</li>
          <li>Pagbibilad (Asin muna kung hapon, bilad agad kung umaga)</li>
          <li>Pagpapalamig matapos ibilad ang mga balaw</li>
          <li>Pagpipili o paglilinis gamit ang makarina</li>
          <li>Paglalagay sa sako bilang paghahanda sa bentahan</li>
          <li>Pagbebenta sa merkado o sa mga komersyante</li>
        </ol>
      </section>

      <section style={{ ...styles.section, backgroundColor: '#7a1111' }}>
        <h1 style={styles.titleLarge}>SALITA O TERMINOLOHIYA</h1>
        <h3 style={styles.categoryLabel}>KAGAMITAN</h3>
        <TerminologyTable data={kagamitanData} />
      </section>

      <section style={{ ...styles.section, backgroundColor: '#9c1a1a' }}>
        <h3 style={styles.categoryLabel}>PROSESO</h3>
        <TerminologyTable data={prosesoTableData} />
      </section>

      <section style={{ ...styles.section, backgroundColor: '#3d0101' }}>
        <h3 style={styles.categoryLabel}>SANGKAP</h3>
        <TerminologyTable data={sangkapData} />
      </section>

      <section style={{ ...styles.section, backgroundColor: '#5c0808' }}>
        <h3 style={styles.categoryLabel}>IBA PANG TERMINOLOHIYA</h3>
        <TerminologyTable data={ibaPangData} />
      </section>
    </div>
  );
}

// --- UPDATED CSS IN JS OBJECT ---
const styles = {
  mainWrapper: {
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    width: '100%',
    overflowX: 'hidden', // Prevents body scroll
  },
  section: {
    padding: 'clamp(40px, 10vw, 80px) 5%', // Reduced side padding for mobile
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  titleLarge: {
    fontSize: 'clamp(1.5rem, 6vw, 2.5rem)', // Fluid typography
    textAlign: 'center',
    marginBottom: '20px',
    letterSpacing: '2px',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 'clamp(1.2rem, 5vw, 2rem)',
    marginBottom: '30px',
    borderLeft: '5px solid white',
    paddingLeft: '15px',
    alignSelf: 'flex-start',
  },
  descriptionText: {
    fontSize: 'clamp(1rem, 3vw, 1.2rem)',
    lineHeight: '1.8',
    textAlign: 'center',
    maxWidth: '900px',
  },
  processList: {
    fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
    lineHeight: '2.2',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 'clamp(15px, 5vw, 30px) clamp(20px, 8vw, 50px)',
    borderRadius: '10px',
    width: '100%',
    maxWidth: '800px',
    boxSizing: 'border-box',
  },
  categoryLabel: {
    backgroundColor: 'white',
    color: '#3d0101',
    display: 'inline-block',
    padding: '8px 25px',
    borderRadius: '50px',
    fontWeight: 'bold',
    marginBottom: '30px',
    fontSize: 'clamp(0.9rem, 3vw, 1.2rem)',
  },
  tableContainer: {
    backgroundColor: 'white',
    borderRadius: '12px',
    overflowX: 'auto', // CRITICAL: Allows table to be swiped on mobile
    width: '100%',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
    WebkitOverflowScrolling: 'touch', // Smooth scrolling on iOS
  },
  table: {
    width: '100%',
    minWidth: '700px', // Forces the desktop view layout even on small screens
    borderCollapse: 'collapse',
    color: '#333',
  },
  tableHeaderRow: {
    backgroundColor: '#1a0000',
    color: 'white',
  },
  th: {
    padding: '20px',
    textAlign: 'left',
    fontSize: '1rem',
  },
  tableRow: {
    borderBottom: '1px solid #eee',
  },
  termCell: {
    padding: '20px',
    width: '25%',
    verticalAlign: 'top',
  },
  termText: {
    fontWeight: 'bold',
    display: 'block',
    marginBottom: '10px',
  },
  imageCell: {
    padding: '20px',
    width: '180px',
  },
  termImg: {
    width: '150px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '8px',
    border: '1px solid #ddd',
  },
  noImg: {
    width: '150px',
    height: '100px',
    backgroundColor: '#f0f0f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.8rem',
    color: '#888',
    borderRadius: '8px',
  },
  definitionCell: {
    padding: '20px',
    lineHeight: '1.6',
    verticalAlign: 'top',
  },
  voiceBtn: {
    padding: '6px 12px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#f9f9f9',
    cursor: 'pointer',
    fontSize: '0.9rem',
  }
};

export default Terminology;