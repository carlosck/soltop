"use client"
import { useState, useCallback, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import '../styles/stylesheet.css';
import "../styles/globals.css";
import styles from '../styles/Home.module.css';
import ReactGA from "react-ga4";
import SoltopLogo from '../components/SoltopLogo';
import WhatsAppLogo from "../components/WhatsLogo";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

//import "yet-another-react-lightbox/styles.css";
//import NextJsImage from "./NextJsImage";
import FsLightbox from "fslightbox-react";
ReactGA.initialize("G-PNN17KL6QD");
 
const schema = z.object({
  nombre: z.string().min(2, "El nombre es obligatorio"),
  paterno: z.string().min(2, "El apellido paterno es obligatorio"),
  materno: z.string().optional(),
  correo: z.string().email("Correo inválido"),
  celular: z.string().min(10, "Número inválido"),
  cv: z.unknown().transform(value => {
    console.log('value__',value[0]);
    return value[0];
  }),
});



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
  
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm({ 
    defaultValues: { nombre: "carlos", paterno: "seca", materno: "aguilar", correo: "carloscka@asd.com", celular: "1234567890", cv: null },
    resolver: zodResolver(schema) });

  const [message, setMessage] = useState("");
  const watchAllFields = watch()
  const onSubmit = async (data) => {
    console.log('onSubmit data',data);
    const formData = new FormData();
    formData.append("nombre", data.nombre);
    formData.append("paterno", data.paterno);
    formData.append("materno", data.materno || "");
    formData.append("correo", data.correo);
    formData.append("celular", data.celular);
    formData.append("cv", data.cv);

    const res = await fetch("/req-body/api", {
      method: "POST",      
      body: formData,      
    });

    if (res.ok) {
      setMessage("Correo enviado con éxito");
    } else {
      setMessage("Hubo un error al enviar el correo");
    }
  };
  
  useEffect(() => {
    const dataForm= getValues();
    console.log(dataForm);
  }, [watchAllFields]);
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
              <a className={`${styles.menuWhats}`} href="https://wa.me/+528441737994" target="_blank" rel="noopener">
                
                <WhatsAppLogo                  
                  alt="WhatsApp Logo"
                  className={styles.menuWhatsIcon}
                  width={30}
                  height={30}
                  priority
                />
                
                <div className={`${styles.menuWhatsText}`}>844 - 173- 7994</div>
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
              <li className={`${styles.servicesItem}`} onClick={() => changeParamsData({openSupervision: !data.openSupervision})}>                
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
              <li className={`${styles.servicesItem}`} onClick={() => changeParamsData({openLevantamientos: !data.openLevantamientos})}>
                
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
              <li className={`${styles.servicesItem}`} onClick={() => changeParamsData({openDeslindes: !data.openDeslindes})}>
                
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
              <li className={`${styles.servicesItem}`} onClick={() => changeParamsData({openFotogrametria: !data.openFotogrametria})}>
                
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
              <li className={`${styles.servicesItem}`} onClick={() => changeParamsData({openRasantes: !data.openRasantes})}>
                
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
              <li className={`${styles.servicesItem}`} onClick={() => changeParamsData({openControl: !data.openControl})}>
                
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
              <li className={`${styles.servicesItem}`} onClick={() => changeParamsData({openEscaner3D: !data.openEscaner3D})}>
                
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
                <>
                  <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md " style={{display: "none"}}>
                    <h2 className="text-2xl font-bold mb-4">Formulario de Contacto</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                      <input {...register("nombre")} placeholder="Nombre" className="border p-2 w-full" />
                      {errors.nombre && <p className="text-red-500">{errors.nombre.message}</p>}

                      <input {...register("paterno")} placeholder="Apellido Paterno" className="border p-2 w-full" />
                      {errors.paterno && <p className="text-red-500">{errors.paterno.message}</p>}

                      <input {...register("materno")} placeholder="Apellido Materno" className="border p-2 w-full" />

                      <input {...register("correo")} type="email" placeholder="Correo" className="border p-2 w-full" />
                      {errors.correo && <p className="text-red-500">{errors.correo.message}</p>}

                      <input {...register("celular")} placeholder="Celular" className="border p-2 w-full" />
                      {errors.celular && <p className="text-red-500">{errors.celular.message}</p>}

                      <input {...register("cv")} type="file" className="border p-2 w-full" />
                      {errors.cv && <p className="text-red-500">{errors.cv.message}</p>}

                      <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full">Enviar</button>
                    </form>
                    {message && <p className="mt-4 text-green-600">{message}</p>}
                  </div>
                </>
                <div className={`${styles.contactSubtitle}`}>
                  Para poder responder de la manera más rápida y precisa posible contáctanos via correo electrónico o whatsapp.
                </div>
                <div className={`${styles.contactItemsContainer}`}>                  
                  <a className={`${styles.contactItem} ${styles.contactItemMail}`} href="mailto:infosoltop@gmail.com?subject=Contacto!">
                    
                      <Image
                        src="/mail_icon.png"
                        alt="Email Logo"
                        className={styles.contactEmailIcon}
                        width={32}
                        height={32}
                        priority
                      />
                    
                    infosoltop@gmail.com
                  </a>
                  <a className={`${styles.contactItem} ${styles.contactItemWhats}` } href="https://wa.me/+528441737994" target="_blank" rel="noopener">
                    
                  <WhatsAppLogo
                    alt="WhatsApp Logo"
                    className={styles.contactWhatsIcon}
                    width={30}
                    height={30}
                    priority
                  />
                    
                    844 - 173- 7994
                  </a>
                </div>
                <div className={`${styles.contactSocialContainer}`}>
                  <div className={`${styles.contactSubtitle}`}>
                    Síguenos en nuestras redes sociales:
                  </div>
                  <div className={`${styles.contactSocialItems}`}>
                    <a href="https://www.facebook.com/profile.php?id=61560280944823" target="_blank" rel="noopener" className={`${styles.contactSocial}`}>
                      <Image
                        src="/redes/img-socialmedia-facebook.png"
                        alt="Facebook Logo"
                        className={styles.contactSocialIcon}
                        width={40}
                        height={40}
                        priority
                      />
                    </a>
                    <a href="https://www.instagram.com/soltop_mx" target="_blank" rel="noopener" className={`${styles.contactSocial}`}>
                      <Image
                        src="/redes/img-socialmedia-instagram.png"
                        alt="Instagram Logo"
                        className={styles.contactSocialIcon}
                        width={40}
                        height={40}
                        priority
                      />
                    </a>
                    <a href="https://www.youtube.com/@soltop_mx" target="_blank" rel="noopener" className={`${styles.contactSocial}`}>
                      <Image
                        src="/redes/img-socialmedia-youtube.png"
                        alt="Youtube Logo"
                        className={styles.contactSocialIcon}
                        width={40}
                        height={40}
                        priority
                      />
                    </a>
                  </div>
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
      
    </>
  );
}
