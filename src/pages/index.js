import { useState, useCallback } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from '../styles/Home.module.css';
import ReactGA from "react-ga4";
import Lightbox from "yet-another-react-lightbox";
import SoltopLogo from '../components/SoltopLogo';
import WhatsAppLogo from "../components/WhatsLogo";

//import "yet-another-react-lightbox/styles.css";
//import NextJsImage from "./NextJsImage";
import FsLightbox from "fslightbox-react";
ReactGA.initialize("G-PNN17KL6QD");




export default function Home() {
  
  const [data, setData] = useState({
    loading: true,
    openControl: false,
    openDeslindes: false,
    openEscaner3D: false,
    openFotogrametria: false,
    openLevantamientos: false,
    openRasantes: false,
    openSupervision: false,

    
  });

  const changeParamsData = useCallback(async params => {
    
    return (async () => {
      setData(state => ({
        ...state,
        ...params
      }));
    })();
    // eslint-disable-next-line
  }, [data]);

  
  const slidesControl = [
    "/popups/control-tierra-01.jpg",
    "/popups/control-tierra-02.jpg",
  ];
        
  
  const slidesDeslindes = [
    "/popups/deslindes-01.jpg",
    "/popups/deslindes-02.jpg",
    "/popups/deslindes-03.jpg",
    "/popups/deslindes-04.jpg",
    
  ]
    
  const slidesEscaner3D = [
    "/popups/escaner3d-01.jpg",
    "/popups/escaner3d-02.jpg",
    
  ];
  const slidesFotogrametria = [
    "/popups/fotogrametria-01.jpg",
    "/popups/fotogrametria-02.jpg",
    "/popups/fotogrametria-03.jpg",
    "/popups/fotogrametria-04.jpg",    
  ];
  const slidesLevantamientos = [
    "/popups/levantamientos-01.jpg",
    "/popups/levantamientos-02.jpg",
    "/popups/levantamientos-03.jpg",
    "/popups/levantamientos-04.jpg",  
  ];

  const slidesRasantes = [
    "/popups/rasantes-01.jpg",
    "/popups/rasantes-02.jpg",
    "/popups/rasantes-03.jpg",     
  ];
  const slidesSupervision = [
    "/popups/supervision-01.jpg",
    "/popups/supervision-02.jpg",
    "/popups/supervision-03.jpg",
    "/popups/supervision-04.jpg",      
  ];
  return (
    <>
      <Head>
        <title>Soltop </title>
        <meta name="description" content="soltop saltillo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
              
      </Head>
      <main className={`${styles.main}`}>
        <FsLightbox
          toggler={data.openSupervision}
          sources={slidesSupervision}
        />
        <FsLightbox
          toggler={data.openLevantamientos}
          sources={slidesLevantamientos}
        />
        <FsLightbox
          toggler={data.openDeslindes}
          sources={slidesDeslindes}
        />
        <FsLightbox
          toggler={data.openFotogrametria}
          sources={slidesFotogrametria}
        />
        <FsLightbox
          toggler={data.openRasantes}
          sources={slidesRasantes}
        />
        <FsLightbox
          toggler={data.openControl}
          sources={slidesControl}
        />
        <FsLightbox
        toggler={data.openEscaner3D}
        sources={slidesEscaner3D}
      />

      
        <menu className={`${styles.menu}`}>
          <div className={`${styles.stage}`}>
            <div className={`${styles.menuLeft}`}>
                     
              <div className={`${styles.menuLogoContainer}`}>
                <SoltopLogo
                  className={styles.menuLogo}
                  width={82}
                  height={55}                  
                />
              </div>
              <div className={`${styles.menuItems}`}>
                <a href="#servicios" className={`${styles.menuItem}`}>
                  Servicios
                </a>
                <a href="#vision" className={`${styles.menuItem}`}>
                  Visión
                </a>
                <a href="#mision" className={`${styles.menuItem}`}>
                  Mision
                </a>
                <a href="#proyectos" className={`${styles.menuItem}`}>
                  Proyectos
                </a>
                <a href="#contacto" className={`${styles.menuItem}`}>
                  Contacto
                </a>
              </div>
            </div> 
            <div className={`${styles.menuWhatsContainer}`}>
              <a className={`${styles.menuWhats}`} href="https://wa.me/+528440880492" target="_blank" rel="noopener">
                
                <WhatsAppLogo                  
                  alt="WhatsApp Logo"
                  className={styles.menuWhatsIcon}
                  width={30}
                  height={30}
                  priority
                />
                
                <div className={`${styles.menuWhatsText}`}>844 - 088 - 0492</div>
              </a>
            </div>
          </div>
        </menu>
        <div className={`${styles.heroImageContainer}`}>
          <Image
            src="/soltop_header.jpg"
            alt="Soltop hero"
            className={styles.heroImage}
            width={1366}
            height={768}
            priority
          />
          <div  className={`${styles.hero} ${styles.section}`}>
          
            <div className={`${styles.stage}`}>
              <div className={`${styles.heroTextContainer}`}>
                <div className={`${styles.heroText}`}>
                  <div className={`${styles.heroTitle}`}>Servicios de topografía de la más alta calidad y precisión</div>
                  <div className={`${styles.heroSubtitle}`}>
                  Soluciones eficientes y efectivas para la gestión de tierras, la construcción y la planificación urbana.
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
        <div className={`${styles.services} ${styles.section}`} id="servicios">
          
          <div className={`${styles.stage}`}>
            <ul className={`${styles.servicesItemscontainer}`}>
              <li className={`${styles.servicesItem}`} onClick={() => changeParamsData({openSupervision: true})}>
                <div className={`${styles.servicesItemIconContainer}`}>
                  <Image
                    src="/servicios_logo.png"
                    alt="Soltop servicios logo"
                    className={styles.servicesItemIcon}
                    width={49}
                    height={49}
                    priority
                  />
                </div>
                <div className={`${styles.servicesItemTitle}`}>Supervisión de Proyectos</div>              
              </li>
              <li className={`${styles.servicesItem}`} onClick={() => changeParamsData({openLevantamientos: true})}>
                <div className={`${styles.servicesItemIconContainer}`}>
                  <Image
                    src="/servicios_logo.png"
                    alt="Soltop servicios logo"
                    className={styles.servicesItemIcon}
                    width={49}
                    height={49}
                    priority
                  />
                </div>
                <div className={`${styles.servicesItemTitle}`}>Levantamientos Topográficos</div>              
              </li>
              <li className={`${styles.servicesItem}`} onClick={() => changeParamsData({openDeslindes: true})}>
                <div className={`${styles.servicesItemIconContainer}`}>
                  <Image
                    src="/servicios_logo.png"
                    alt="Soltop servicios logo"
                    className={styles.servicesItemIcon}
                    width={49}
                    height={49}
                    priority
                  />
                </div>
                <div className={`${styles.servicesItemTitle}`}>Deslindes de Predios</div>              
              </li>
              <li className={`${styles.servicesItem}`} onClick={() => changeParamsData({openFotogrametria: true})}>
                <div className={`${styles.servicesItemIconContainer}`}>
                  <Image
                    src="/servicios_logo.png"
                    alt="Soltop servicios logo"
                    className={styles.servicesItemIcon}
                    width={49}
                    height={49}
                    priority
                  />
                </div>
                <div className={`${styles.servicesItemTitle}`}>Fotogrametría</div>              
              </li>
              <li className={`${styles.servicesItem}`} onClick={() => changeParamsData({openRasantes: true})}>
                <div className={`${styles.servicesItemIconContainer}`}>
                  <Image
                    src="/servicios_logo.png"
                    alt="Soltop servicios logo"
                    className={styles.servicesItemIcon}
                    width={49}
                    height={49}
                    priority
                  />
                </div>
                <div className={`${styles.servicesItemTitle}`}>Proyectos de Rasantes</div>              
              </li>
              <li className={`${styles.servicesItem}`} onClick={() => changeParamsData({openControl: true})}>
                <div className={`${styles.servicesItemIconContainer}`}>
                  <Image
                    src="/servicios_logo.png"
                    alt="Soltop servicios logo"
                    className={styles.servicesItemIcon}
                    width={49}
                    height={49}
                    priority
                  />
                </div>
                <div className={`${styles.servicesItemTitle}`}>Control de Movimientos de Tierra</div>              
              </li>
              <li className={`${styles.servicesItem}`} onClick={() => changeParamsData({openEscaner3D: true})}>
                <div className={`${styles.servicesItemIconContainer}`}>
                  <Image
                    src="/servicios_logo.png"
                    alt="Soltop servicios logo"
                    className={styles.servicesItemIcon}
                    width={49}
                    height={49}
                    priority
                  />
                </div>
                <div className={`${styles.servicesItemTitle}`}>Escáner 3D</div>              
              </li>
            </ul>
            
            
          </div>
          <div className={`${styles.servicesImageContainer}`} id="vision">
            <Image
              src="/services_background.png"
              alt="Services Background"
              className={styles.servicesImage}
              width={1366}
              height={812}
            />
            <div className={`${styles.stage}`}>
              <div className={`${styles.servicesTextContainer}`}>
                <div className={`${styles.servicesText}`}>
                  <div className={`${styles.servicesTitle}`}>Nuestra dedicación al detalle y servicio al cliente nos impulsa a superar expectativas.</div>
                  <div className={`${styles.servicesSubtitle}`}>Transformamos el paisaje de la topografía impulsando avances tecnológicos y metodológicos que faciliten la toma de decisiones y la gestión del territorio de manera más eficaz y sostenible.</div>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
        <div className={`${styles.mision} ${styles.section}`} id="mision">
          <div className={`${styles.misionImageContainer}`}>
            <Image
              src="/img-soltop-mision.jpg"
              alt="Mision Background"
              className={styles.misionImage}
              width={1920}
              height={765}
            />            
          </div>
          <div className={`${styles.stage}`}>
              <h2 className={`${styles.misionTitle}`}>Misión</h2>
              <div className={`${styles.misionContent}`}>Garantizar soluciones eficientes y efectivas para la gestión de tierras, construcción y planificación urbana.</div>
              <div className={`${styles.misionSubtitle}`}>Proporcionamos servicios de topografía de la más alta calidad y precisión a nuestros clientes, utilizando tecnología de punta y metodología innovadora</div>
            </div>

        </div>
        <div className={`${styles.projects} ${styles.section}`} id="proyectos">
          <div className={`${styles.projectsHeader}`}>
            <div className={`${styles.projectHeaderImageContainer}`}>
              <Image
                src="/projects_background.png"
                alt="Projects Background"
                className={styles.projectHeaderImage}
                width={1366}
                height={457}
              />
            </div>
            <div className={`${styles.stage}`}>
              <h2 className={`${styles.projectsTitle}`}>Nuestros Proyectos</h2>
              <div className={`${styles.projectsSubtitle}`}>Reconocidos por la excelencia,  innovación y contribución a desarrollo sostenible.</div>
            </div>
          </div>
          
          <div className={`${styles.projectsMainItemcontainer}`}>
            <div className={`${styles.projectsItem} ${styles.projectsMain}`}>
              <div className={`${styles.projectsItemBackground}`}>
                <Image
                  src="/img_proyecto_ikano.png"
                  alt="Ikano Project"
                  className={styles.projectsItemImage}
                  width={683}
                  height={568}
                />
              </div>
              <div className={`${styles.projectsItemRight}`}>
                <div className={`${styles.projectsItemMainBGContainer}`}>
                  <Image
                    src="/project_main_bg.png"
                    alt="Project Main Background"
                    className={styles.projectsItemMainBG}
                    width={683}
                    height={568}
                  />
                </div>
                <div className={`${styles.projectsItemDataContainer}`}>
                
                  <div className={`${styles.projectsItemData}`}>
                    <div className={`${styles.projectsItemType}`}>Proyecto</div>
                    <div className={`${styles.projectsItemName}`}>Ikano</div>
                  </div>
                  <div className={`${styles.projectsItemData}`}>
                    <div className={`${styles.projectsItemType}`}>Ubicación</div>
                    <div className={`${styles.projectsItemContent}`}>Ramos Arizpe, Coahuila</div>
                  </div>
                  <div className={`${styles.projectsItemData}`}>
                    <div className={`${styles.projectsItemType}`}>Actividad</div>
                    <div className={`${styles.projectsItemContent}`}>Iniciando con los trabajos del proyecto de rasantes para una vez que fue aceptado, pasar a los trabajos de terracerías, cimentaciones, obra civil, montaje de estructura, instalaciones subterráneas, etc. Durante estas actividades en obra, también se llevó de manera paralela, el control de movimientos de tierra y modificaciones al proyecto por necesidades del cliente.</div>
                  </div>              
                </div>
              </div>
              
              
            </div>
          </div>
          <div className={`${styles.projectsItemsContainer}`}>
            <div className={`${styles.stage}`}>
              <div className={`${styles.projectsItem}`}>
                <div className={`${styles.projectsItemBackground}`}>
                  <Image
                    src="/img_project_lennox3.png"
                    alt="Project Lenox 3 "
                    className={styles.projectsItemImage}
                    width={382}
                    height={306}
                  />
                </div>
                <div className={`${styles.projectsItemDataContainer}`}>
                  <div className={`${styles.projectsItemData}`}>
                    <div className={`${styles.projectsItemType}`}>Proyecto</div>
                    <div className={`${styles.projectsItemName}`}>Lennox 3</div>
                  </div>
                  <div className={`${styles.projectsItemData}`}>
                    <div className={`${styles.projectsItemType}`}>Ubicación</div>
                    <div className={`${styles.projectsItemContent}`}>Ramos Arizpe, Coahuila</div>
                  </div>                             
                </div>
              </div>
              <div className={`${styles.projectsItem}`}>
                <div className={`${styles.projectsItemBackground}`}>
                  <Image
                    src="/project_martinrea_fluidos.png"
                    alt="Project Martinrea Fluidos "
                    className={styles.projectsItemImage}
                    width={382}
                    height={306}
                  />
                </div>
                <div className={`${styles.projectsItemDataContainer}`}>
                  <div className={`${styles.projectsItemData}`}>
                    <div className={`${styles.projectsItemType}`}>Proyecto</div>
                    <div className={`${styles.projectsItemName}`}>Martinrea Fluidos</div>
                  </div>
                  <div className={`${styles.projectsItemData}`}>
                    <div className={`${styles.projectsItemType}`}>Ubicación</div>
                    <div className={`${styles.projectsItemContent}`}>Ramos Arizpe, Coahuila</div>
                  </div>                             
                </div>
              </div>
              <div className={`${styles.projectsItem}`}>
                <div className={`${styles.projectsItemBackground}`}>
                  <Image
                    src="/project_skyjack.png"
                    alt="Project Skyjack "
                    className={styles.projectsItemImage}
                    width={382}
                    height={306}
                  />
                </div>
                <div className={`${styles.projectsItemDataContainer}`}>
                  <div className={`${styles.projectsItemData}`}>
                    <div className={`${styles.projectsItemType}`}>Proyecto</div>
                    <div className={`${styles.projectsItemName}`}>Skyjack</div>
                  </div>
                  <div className={`${styles.projectsItemData}`}>
                    <div className={`${styles.projectsItemType}`}>Ubicación</div>
                    <div className={`${styles.projectsItemContent}`}>Ramos Arizpe, Coahuila</div>
                  </div>                             
                </div>
              </div>
              <div className={`${styles.projectsItem}`}>
                <div className={`${styles.projectsItemBackground}`}>
                  <Image
                    src="/project_lennox_iron_gate.png"
                    alt="Project Lennox Iron Gate "
                    className={styles.projectsItemImage}
                    width={382}
                    height={306}
                  />
                </div>
                <div className={`${styles.projectsItemDataContainer}`}>
                  <div className={`${styles.projectsItemData}`}>
                    <div className={`${styles.projectsItemType}`}>Proyecto</div>
                    <div className={`${styles.projectsItemName}`}>Lennox Iron Gate</div>
                  </div>
                  <div className={`${styles.projectsItemData}`}>
                    <div className={`${styles.projectsItemType}`}>Ubicación</div>
                    <div className={`${styles.projectsItemContent}`}>Ramos Arizpe, Coahuila</div>
                  </div>                             
                </div>
              </div>
              <div className={`${styles.projectsItem}`}>
                <div className={`${styles.projectsItemBackground}`}>
                  <Image
                    src="/project_martinrea_estampados.png"
                    alt="Project Martinrea Estampados "
                    className={styles.projectsItemImage}
                    width={382}
                    height={306}
                  />
                </div>
                <div className={`${styles.projectsItemDataContainer}`}>
                  <div className={`${styles.projectsItemData}`}>
                    <div className={`${styles.projectsItemType}`}>Proyecto</div>
                    <div className={`${styles.projectsItemName}`}>Martinrea Estampados</div>
                  </div>
                  <div className={`${styles.projectsItemData}`}>
                    <div className={`${styles.projectsItemType}`}>Ubicación</div>
                    <div className={`${styles.projectsItemContent}`}>Ramos Arizpe, Coahuila</div>
                  </div>                             
                </div>
              </div>
              <div className={`${styles.projectsItem}`}>
                <div className={`${styles.projectsItemBackground}`}>
                  <Image
                    src="/project_mahle3.png"
                    alt="Project Mahle 3 "
                    className={styles.projectsItemImage}
                    width={382}
                    height={306}
                  />
                </div>
                <div className={`${styles.projectsItemDataContainer}`}>
                  <div className={`${styles.projectsItemData}`}>
                    <div className={`${styles.projectsItemType}`}>Proyecto</div>
                    <div className={`${styles.projectsItemName}`}>Mahle 3</div>
                  </div>
                  <div className={`${styles.projectsItemData}`}>
                    <div className={`${styles.projectsItemType}`}>Ubicación</div>
                    <div className={`${styles.projectsItemContent}`}>Ramos Arizpe, Coahuila</div>
                  </div>                             
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className={`${styles.contact} ${styles.section}`} id="contacto">
          <div className={`${styles.stage}`}>
            
            <div className={`${styles.contactTextcontainer}`}>
              <div className={`${styles.contactText}`}>
                <div className={`${styles.contactTitle}`}>
                  Trabajemos juntos
                </div>
                <div className={`${styles.contactSubtitle}`}>
                Para poder responder de la manera más rápida y precisa posible contáctanos via correo electrónico o whatsapp.
                </div>
                <div className={`${styles.contactItemsContainer}`}>                  
                  <a className={`${styles.contactItem} ${styles.contactItemMail}`} href="mailto:info@soltop.mx?subject=Contacto!">
                    
                      <Image
                        src="/mail_icon.png"
                        alt="Email Logo"
                        className={styles.contactEmailIcon}
                        width={32}
                        height={32}
                        priority
                      />
                    
                    info@soltop.mx
                  </a>
                  <a className={`${styles.contactItem} ${styles.contactItemWhats}` } href="https://wa.me/+528440880492" target="_blank" rel="noopener">
                    
                  <WhatsAppLogo
                    alt="WhatsApp Logo"
                    className={styles.contactWhatsIcon}
                    width={30}
                    height={30}
                    priority
                  />
                    
                    844 - 088 - 0492
                  </a>
                </div>
              </div>
              <div className={`${styles.contactBgContainer}`}>
                <Image
                  src="/contact_bg.jpg"
                  alt="Contact Background"
                  className={styles.contactBg}
                  width={1185}
                  height={875}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className={`${styles.footer} ${styles.section}`}>
          <div className={`${styles.stage}`}>
            <div className={`${styles.footerTextcontainer}`}>
              <div className={`${styles.footerText}`}>
                <div className={`${styles.footerTitle}`}>Soltop</div>
                <div className={`${styles.footerSpacer}`} />
                <div className={`${styles.footerSubtitle}`}>Soluciones Topográficas </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.js</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Docs <span>-&gt;</span>
            </h2>
            <p>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Learn <span>-&gt;</span>
            </h2>
            <p>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main> */}
    </>
  );
}
