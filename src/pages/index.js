import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="soltop saltillo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <menu className={`${styles.menu}`}>
          <div className={`${styles.stage}`}>
            <div className={`${styles.menuLeft}`}>
                     
              <div className={`${styles.menuLogoContainer}`}>
                <div className={`${styles.menuLogo}`}></div>
              </div>
              <div className={`${styles.menuItems}`}>
                <a href="#" className={`${styles.menuItem}`}>
                  Servicios
                </a>
                <a href="#" className={`${styles.menuItem}`}>
                  Visión
                </a>
                <a href="#" className={`${styles.menuItem}`}>
                  Proyectos
                </a>
                <a href="#" className={`${styles.menuItem}`}>
                  Contacto
                </a>
              </div>
            </div> 
            <div className={`${styles.menuWhatsContainer}`}>
              <div className={`${styles.menuWhats}`}>
                <div className={`${styles.menuWhatsIcon}`}></div>
                <div className={`${styles.menuWhatsText}`}>844-088-0492</div>
              </div>
            </div>
          </div>
        </menu>
        <div  className={`${styles.hero} ${styles.section}`}>
          <div className={`${styles.heroImageContainer}`}>
            <div className={`${styles.heroImage}`}></div>
          </div>
          <div className={`${styles.heroTextContainer}`}>
            <div className={`${styles.heroText}`}>
              <div className={`${styles.heroTitle}`}>Servicios de topografía de la más alta calidad y precisión</div>
              <div className={`${styles.heroSubtitle}`}>
              Soluciones eficientes y efectivas para la gestión de tierras, la construcción y la planificación urbana.
              </div>
            </div>            
          </div>
        </div>
        <div className={`${styles.services} ${styles.section}`}>
          <ul className={`${styles.servicesItemscontainer}`}>
            <li className={`${styles.servicesItem}`}>
              <div className={`${styles.servicesItemIcon}`}></div>
              <div className={`${styles.servicesItemTitle}`}>Supervisión de Proyectos</div>              
            </li>
            <li className={`${styles.servicesItem}`}>
              <div className={`${styles.servicesItemIcon}`}></div>
              <div className={`${styles.servicesItemTitle}`}>Levantamientos Topográficos</div>              
            </li>
            <li className={`${styles.servicesItem}`}>
              <div className={`${styles.servicesItemIcon}`}></div>
              <div className={`${styles.servicesItemTitle}`}>Deslindes de Predios</div>              
            </li>
            <li className={`${styles.servicesItem}`}>
              <div className={`${styles.servicesItemIcon}`}></div>
              <div className={`${styles.servicesItemTitle}`}>Fotogrametría</div>              
            </li>
            <li className={`${styles.servicesItem}`}>
              <div className={`${styles.servicesItemIcon}`}></div>
              <div className={`${styles.servicesItemTitle}`}>Proyectos de Rasantes</div>              
            </li>
            <li className={`${styles.servicesItem}`}>
              <div className={`${styles.servicesItemIcon}`}></div>
              <div className={`${styles.servicesItemTitle}`}>Control de Movimientos de Tierra</div>              
            </li>
            <li className={`${styles.servicesItem}`}>
              <div className={`${styles.servicesItemIcon}`}></div>
              <div className={`${styles.servicesItemTitle}`}>Escáner 3D</div>              
            </li>
          </ul>
          <div className={`${styles.servicesText}`}>
            <div className={`${styles.servicesTitle}`}>Nuestra dedicación al detalle y servicio al cliente nos impulsa a superar expectativas.</div>
            <div className={`${styles.servicesSubtitle}`}>Transformamos el paisaje de la topografía impulsando avances tecnológicos y metodológicos que faciliten la toma de decisiones y la gestión del territorio de manera más eficaz y sostenible.</div>
          </div>
        </div>
        <div className={`${styles.projects} ${styles.section}`}>
          <div className={`${styles.projectsText}`}>
            <div className={`${styles.projectsTitle}`}>Nuestros Proyectos</div>
            <div className={`${styles.projectsSubtitle}`}>Reconocidos por la excelencia,  innovación y contribución a desarrollo sostenible.</div>
          </div>
          <div className={`${styles.projectsMainItemcontainer}`}>
            <div className={`${styles.projectsItem} ${styles.projectsMain}`}>
              <div className={`${styles.projectsItemBackground}`}></div>
              <div className={`${styles.projectsItemDataContainer}`}>
                <div className={`${styles.projectsItemData}`}>
                  <div className={`${styles.projectsItemType}`}>Proyecto</div>
                  <div className={`${styles.projectsItemContent}`}>Ikano</div>
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
          <div className={`${styles.projectsItemsContainer}`}>
            <div className={`${styles.projectsItem}`}>
              <div className={`${styles.projectsItemBackground}`}></div>
              <div className={`${styles.projectsItemDataContainer}`}>
                <div className={`${styles.projectsItemData}`}>
                  <div className={`${styles.projectsItemType}`}>Proyecto</div>
                  <div className={`${styles.projectsItemContent}`}>Lennox 3</div>
                </div>
                <div className={`${styles.projectsItemData}`}>
                  <div className={`${styles.projectsItemType}`}>Ubicación</div>
                  <div className={`${styles.projectsItemContent}`}>Ramos Arizpe, Coahuila</div>
                </div>                             
              </div>
            </div>
            <div className={`${styles.projectsItem}`}>
              <div className={`${styles.projectsItemBackground}`}></div>
              <div className={`${styles.projectsItemDataContainer}`}>
                <div className={`${styles.projectsItemData}`}>
                  <div className={`${styles.projectsItemType}`}>Proyecto</div>
                  <div className={`${styles.projectsItemContent}`}>Martinrea Fluidos</div>
                </div>
                <div className={`${styles.projectsItemData}`}>
                  <div className={`${styles.projectsItemType}`}>Ubicación</div>
                  <div className={`${styles.projectsItemContent}`}>Ramos Arizpe, Coahuila</div>
                </div>                             
              </div>
            </div>
            <div className={`${styles.projectsItem}`}>
              <div className={`${styles.projectsItemBackground}`}></div>
              <div className={`${styles.projectsItemDataContainer}`}>
                <div className={`${styles.projectsItemData}`}>
                  <div className={`${styles.projectsItemType}`}>Proyecto</div>
                  <div className={`${styles.projectsItemContent}`}>Skyjack</div>
                </div>
                <div className={`${styles.projectsItemData}`}>
                  <div className={`${styles.projectsItemType}`}>Ubicación</div>
                  <div className={`${styles.projectsItemContent}`}>Ramos Arizpe, Coahuila</div>
                </div>                             
              </div>
            </div>
            <div className={`${styles.projectsItem}`}>
              <div className={`${styles.projectsItemBackground}`}></div>
              <div className={`${styles.projectsItemDataContainer}`}>
                <div className={`${styles.projectsItemData}`}>
                  <div className={`${styles.projectsItemType}`}>Proyecto</div>
                  <div className={`${styles.projectsItemContent}`}>Lennox Iron Gate</div>
                </div>
                <div className={`${styles.projectsItemData}`}>
                  <div className={`${styles.projectsItemType}`}>Ubicación</div>
                  <div className={`${styles.projectsItemContent}`}>Ramos Arizpe, Coahuila</div>
                </div>                             
              </div>
            </div>
            <div className={`${styles.projectsItem}`}>
              <div className={`${styles.projectsItemBackground}`}></div>
              <div className={`${styles.projectsItemDataContainer}`}>
                <div className={`${styles.projectsItemData}`}>
                  <div className={`${styles.projectsItemType}`}>Proyecto</div>
                  <div className={`${styles.projectsItemContent}`}>Martinrea Estampados</div>
                </div>
                <div className={`${styles.projectsItemData}`}>
                  <div className={`${styles.projectsItemType}`}>Ubicación</div>
                  <div className={`${styles.projectsItemContent}`}>Ramos Arizpe, Coahuila</div>
                </div>                             
              </div>
            </div>
            <div className={`${styles.projectsItem}`}>
              <div className={`${styles.projectsItemBackground}`}></div>
              <div className={`${styles.projectsItemDataContainer}`}>
                <div className={`${styles.projectsItemData}`}>
                  <div className={`${styles.projectsItemType}`}>Proyecto</div>
                  <div className={`${styles.projectsItemContent}`}>Mahle 3</div>
                </div>
                <div className={`${styles.projectsItemData}`}>
                  <div className={`${styles.projectsItemType}`}>Ubicación</div>
                  <div className={`${styles.projectsItemContent}`}>Ramos Arizpe, Coahuila</div>
                </div>                             
              </div>
            </div>
            
          </div>
        </div>
        <div className={`${styles.contact} ${styles.section}`}>
          <div className={`${styles.contactTextcontainer}`}>
            <div className={`${styles.contactText}`}>
              <div className={`${styles.contactTitle}`}>Trabajemos juntos</div>
              <div className={`${styles.contactSubtitle}`}>Para poder responder de la manera más rápida y precisa posible, llene el formulario que se muestra a continuación. Los campos obligatorios están marcados con un asterisco(*) y deben completarse para permitirnos procesar su solicitud.</div>
              <div className={`${styles.contactEmail}`}>soltopsaltillo@gmail.com</div>
            </div>
          </div>
        </div>
        <div className={`${styles.footer} ${styles.section}`}>
          <div className={`${styles.footerTextcontainer}`}>
            <div className={`${styles.footerText}`}>
              <div className={`${styles.footerTitle}`}>Soltop</div>
              <div className={`${styles.footerSubtitle}`}>Soluciones Topográficos </div>
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
