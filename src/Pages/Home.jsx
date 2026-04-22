import { useState, useEffect } from 'react';
import firstPic from '../assets/firstpic.png';

// Local assets for the Camarines Norte Carousel
import camNorte1 from '../assets/camnorte1.png'; 
import camNorte2 from '../assets/camnorte2.jpg';
import camNorte3 from '../assets/camnorte3.jpg';

import Vinzons from '../assets/vinzonsm.jpg';
import Sabang from '../assets/sabang.png'
import Sula from '../assets/sula.png'
import Proses from '../assets/PROSES.jpg';

const norteImages = [camNorte1, camNorte2, camNorte3];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % norteImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        .home-page {
          overflow-x: hidden;
          font-family: 'Montserrat', 'Segoe UI', sans-serif;
          background-color: #2d0505;
          margin: 0;
          padding: 0;
          color: #ffeaea;
        }

        /* HERO */
        .hero-section {
          position: relative;
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${firstPic});
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }

        .hero-title {
          font-size: clamp(3.5rem, 12vw, 7rem);
          font-weight: 900;
          letter-spacing: 15px;
          text-transform: uppercase;
          margin: 0;
        }

        /* INTRO */
        .intro-bridge {
          background-color: #380202;
          padding: 6rem 10%;
          text-align: center;
          border-bottom: 1px solid rgba(255, 204, 0, 0.1);
        }

        .intro-content p {
          font-size: 1.2rem;
          line-height: 2;
          max-width: 1000px;
          margin: 0 auto;
          text-align: justify;
          opacity: 0.95;
        }

        /* SECTION 1: UNIQUE STACKED LAYOUT */
        .stacked-section {
          padding: 6rem 10%;
          background-color: #440000;
          text-align: center;
        }

        .stacked-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .stacked-image-box {
          width: 100%;
          max-width: 900px;
          margin: 2rem auto;
          aspect-ratio: 16 / 9;
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 30px 60px rgba(0,0,0,0.5);
        }

        /* CONTENT ROWS (Sections 2-5) */
        .content-row { 
          padding: 8rem 8%; 
          display: flex; 
          justify-content: center; 
          align-items: center;
        }
        
        .row-2 { background-color: #5c0000; } 
        .row-3 { background-color: #2b0000; } 
        .row-4 { background-color: #4a0404; } 
        .row-5 { background-color: #630000; } 

        .row-container {
          max-width: 1400px; 
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr; /* Balanced 50/50 split */
          gap: 60px;
          align-items: center; /* Vertical center */
        }

        /* Alternation Logic */
        .row-container.img-right { grid-template-areas: "text img"; }
        .row-container.img-left { grid-template-areas: "img text"; }

        .row-image-box {
          grid-area: img;
          width: 100%;
          aspect-ratio: 4 / 3; 
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0,0,0,0.4);
        }

        .row-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .row-text {
          grid-area: text;
        }

        .row-text h2, .stacked-container h2 {
          font-size: clamp(2rem, 3.5vw, 3rem);
          margin-bottom: 1.5rem;
          color: #ffcc00;
          text-transform: uppercase;
          letter-spacing: 3px;
        }

        .row-text p, .stacked-container p {
          font-size: 1.1rem;
          line-height: 1.8;
          text-align: justify;
          opacity: 0.9;
        }

        .carousel-dots {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 5;
        }

        .dot { 
          width: 10px; height: 10px; 
          background: rgba(255,255,255,0.3); 
          border-radius: 50%; cursor: pointer; 
        }
        
        .dot.active { background: #ffcc00; width: 30px; border-radius: 6px; }

        @media (max-width: 1000px) {
          .row-container { grid-template-columns: 1fr; grid-template-areas: "img" "text"; }
          .row-container.img-right { grid-template-areas: "img" "text"; }
          .content-row { padding: 4rem 5%; }
        }
      `}</style>

      <div className="home-page">
        {/* HERO */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">BALAW</h1>
            <p className="hero-subtitle">Kultura at Tradisyon ng Vinzons</p>
          </div>
        </section>

        {/* INTRO */}
        <section className="intro-bridge">
          <div className="intro-content">
            <p className='text-justify'>
              Ang website na ito ay nilikha upang magbigay ng malinaw at organisado, na mapagkukunan ng impormasyon tungkol sa balaw, isang mahalagang bahagi ng kultura at tradisyon sa ilang lugar sa Bicol, partikular sa bayan ng Vinzons, Camarines Norte sa. Layunin nito na ipakita at ipaliwanag ang iba’t ibang terminolohiyang ginagamit magmula sa panghuhuli hanggang sa paggawa ng balaw, kasama ang kanilang kahulugan upang mas madaling maunawaan ng mga mag-aaral, mananaliksik at mambabasa ang mga salitang ginagamit sa larangan na ito. Sa pamamagitan nito, mas nagiging malinaw ang bawat hakbang at bahagi ng tradisyong ito.
            </p>
            <p>
              Bukod sa mga kahulugan ng bawat termino, naglalaman din ang pahinang ito ng mga larawan upang mas malinaw na makita at maunawaan ang mga bagay, kagamitan, at hakbang na may kaugnayan sa balaw. Nagsisilbing biswal na gabay ang mga larawan na tumutulong upang mailarawan ang mga sangkap, kagamitan, at iba pang bahagi na ginagamit sa paggawa ng balaw.
            </p>
          </div>
        </section>

        {/* SECTION 1: CAMARINES NORTE (Stacked: Title -> Image -> Text) */}
        <section className="stacked-section">
          <div className="stacked-container">
            <h2>Camarines Norte</h2>
            <div className="stacked-image-box">
              <img src={norteImages[currentIndex]} alt="Cam Norte" className="row-image" />
              <div className="carousel-dots">
                {norteImages.map((_, idx) => (
                  <div key={idx} className={`dot ${idx === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(idx)} />
                ))}
              </div>
            </div>
            <p>
              Ang Camarines Norte ay isang lalawigan na matatagpuan sa Rehiyon V o Bicol Region sa timog na bahagi ng Luzon, Pilipinas. Ito ay mayaman sa kultura at kasaysayan na makikita sa mga tradisyon, kabuhayan, at pamumuhay ng mga mamamayan nito. Binubuo ito ng 12 bayan na kinabibilangan ng<strong> Basud, Capalonga, Daet, Jose Panganiban, Labo, Mercedes, Paracale, San Lorenzo Ruiz, San Vicente, Santa Elena, Talisay, at Vinzons </strong>na sa bawat bayan ay may kani-kaniyang natatanging ambag sa kultura, tradisyon, at ekonomiya ng lalawigan.
            </p>

            <p>
              May kabuuang sukat na humigit-kumulang 2,277.93 kilometro kuwadrado ang Camarines Norte, kaya’t kabilang ito sa mga lalawigan na may malawak na saklaw ng lupain sa Bicol Region. Ang lawak na ito ang nagbibigay daan sa iba’t ibang anyo ng kabuhayan tulad ng pagsasaka, pangingisda, at pagmimina, na patuloy na bahagi ng pamumuhay ng mga mamamayan. Isa sa mga nagpapatingkad sa kultura ng Camarines Norte ang masiglang mga pista, sining, at tradisyonal na gawain ng mga komunidad. Makikita rin ang yaman nito sa mga katutubong kaalaman tulad ng pangingisda, pagsasaka, at iba pang kabuhayang nakaangkla sa kalikasan. Ang mga ito ay hindi lamang pinagkukunan ng kabuhayan kundi bahagi rin ng kanilang pagkakakilanlan bilang isang lalawigan.
            </p>

            <p>
              Patuloy na pinagyayaman ng Camarines Norte ang pagkakaisa at pakikipagtulungan ng mga mamamayan upang mapanatili ang kanilang kultura. Sa bawat bayan at barangay, makikita ang pagsisikap na mapreserba ang mga tradisyon habang tinatanggap ang makabagong pagbabago. Dahil dito, nananatiling buhay at makabuluhan ang kultura ng lalawigan na patuloy na nagbibigay inspirasyon sa mga susunod na henerasyon.
            </p>
          </div>
        </section>

        {/* SECTION 2: VINZONS (Image Right) */}
        <div className="content-row row-2">
          <div className="row-container img-right">
            <div className="row-image-box">
              <img src={Vinzons} alt="Vinzons" className="row-image" />
            </div>
            <div className="row-text">
              <h2>Vinzons</h2>
              <p>
                Ang Vinzons, ay isang baybaying bayan na matatagpuan sa lalawigan ng Camarines Norte. Kilala ang bayan na ito sa yamang-dagat at kabuhayang nakatuon sa pangingisda, kung saan makikita ang mga produkto tulad ng balaw sa pang-araw-araw na pamumuhay ng mga mamamayan. Dahil sa lokasyon nitong malapit sa dagat, maraming residente o mamamayan ang umaasa sa likas na yaman ng karagatan bilang pangunahing pinagkakakitaan ng kanilang hanapbuhay.
              </p>

              <p>
                Ang Vinzons, ay isang fourth class municipality sa Camarines Norte, na binubuo ng 19 barangay ang bawat barangay ay kilala sa iba't ibang gawaing pang-agrikultura at maliliit na industriya. Matatagpuan ang Vinzons sa silangang bahagi ng Camarines Norte, sa baybayin ng Pacific Ocean. Bilang isang bayan na malapit lamang sa kabisera ng lalawigan, tinuturi itong satellite municipality.
              </p>

              <p>
                Ang pamahalaang bayan ng Vinzons ay nakatuon sa pagpapaunlad ng ekonomiya at serbisyong pampubliko na tumutugon sa pangangailangan ng mga mamamayan. Kabilang sa kanilang mga layunin ang pagpapabuti ng pangunahing serbisyo, pagpapatayo, at pagpapanatili ng mga kalsada mula sa bukirin hanggang pamilihan (farm-to-market roads), pagbibigay ng mas maraming pasilidad publiko, at pagtaas ng kita ng bayan.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3: SABANG (Image Left) */}
        <div className="content-row row-3">
          <div className="row-container img-left">
            <div className="row-image-box">
              <img src={Sabang} alt="Sabang" className="row-image" />
            </div>
            <div className="row-text">
              <h2>Sabang</h2>
              <p>
                Ang Sabang ay isang barangay sa bayan ng Vinzons, Camarines Norte. Ayon sa 2020 census, ang populasyon nito ay umabot sa 3,618 katao, na kumakatawan sa 7.38% ng kabuuang populasyon ng Vinzons.
              </p>

              <p>
                Bilang isang barangay sa bayang may pangunahing kabuhayan sa pangingisda at pagsasaka, malaki ang papel ng Sabang sa lokal na ekonomiya. Karaniwan na ang mga residente rito ay umaasa sa yamang-dagat at maliit na agrikultural na produksyon upang matustusan ang pang-araw-araw na pangangailangan. Isa sa pangunahing kabuhayan dito ay ang pangingisda kabilang ang pagtutuyo, pagkakasag, pagpupusit, at pagbabalaw.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 4: SULA (Image Right) */}
        <div className="content-row row-4">
          <div className="row-container img-right">
            <div className="row-image-box">
              <img src={Sula} alt="Sula" className="row-image" />
            </div>
            <div className="row-text">
              <h2>Sula</h2>
              <p>
                Ang Sula ay isang barangay sa bayan ng Vinzons, Camarines Norte. Ayon sa 2020 census, ang populasyon nito ay umabot sa 1,638 katao, na katumbas ng 3.34% ng kabuuang populasyon ng Vinzons.
              </p>

              <p>
                Ang pangunahing pangkabuhayan ng barangay ay ang pangingisda kabilang na ang pagbabalaw na minana pa sa mga sinaunang nakatira sa lugar, dahil sa lokasyon na malapit sa dagat, ito ang kanilang nagiging pangunahing pinagkukunan ng kabuhayan. Bukod sa pangingisda, mayroon ding maliit na agrikultural na produksyon, subalit mas nakatuon ang komunidad sa yamang-dagat.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 5: PROSESO (Image Left) */}
        <div className="content-row row-5">
          <div className="row-container img-left">
            <div className="row-image-box">
              <img src={Proses} alt="Proseso" className="row-image" />
            </div>
            <div className="row-text">
              <h2>Balaw sa Sabang at Sula</h2>
              <p>
                Ang pagbabalaw ay isang proseso ng pagbuburo na isinasagawa sa pamamagitan ng pagpapatuyo o pagbibilad sa init ng araw. Isa ito sa mga pangunahing pinagkakakitaan sa Vinzons, lalo na sa Barangay Sula at Sabang. Ang balaw o krill sa Ingles ang siyang pangunahing ginagamit upang mabuo ito. Sa Bicol Region, kilala ang balaw bilang “dinailan” at sa ibang lugar sa Pilipinas, mas kilala ito sa tawag na “bagoong”.  May iba’t ibang katawagan ang balaw depende kung paano iproseso ang mga mabubuong produkto mula rito. Isang halimbawa ng katawagan ang “alamang”, tumutukoy ito sa sariwang balaw. Tibulaka naman ang tawag sa balaw na pinatuyo sa init ng araw. Matagal na itong nagsisilbing hanapbuhay ng mga mamamayan sa nasabing lugar at patuloy pa ring isinasagawa hanggang sa kasalukuyan bunga ng pagpapasa ng kaalaman at kasanayan mula sa isang henerasyon patungo sa susunod.
              </p>

              <p>
                Hindi lamang mayaman ang bayan ng Vinzons sa iba’t ibang yamang-dagat, kundi mayaman rin sa mga salita o terminolohiyang may kaugnay sa kanilang kabuhayan na sumasalamin sa kanilang tradisyon, karanasan, at paraan ng pamumuhay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;