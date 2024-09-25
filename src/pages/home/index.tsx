import Footer from "../../components/Footer/Footer";
import backgroundHero from "../../assets/images/backgroundHero.jpg"
import { lazy } from "react";
import { MenuItem } from "../../types/menuItem";
import { LandingPageContent, /* ProgressBar */ } from "../../types";
import { AboutMeSkill as Skill } from "../../types";
import AboutMeSkill from "../aboutMeSkill";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import Project from "../projects";
import TitleSection from "../../components/TitleSection/TitleSection";
import { CardProject } from "../../types/Cards";
import imgProyect2 from '../../assets/images/proyect2svg.svg'
import imgProyect3 from '../../assets/images/proyect3svg.svg'
import imgProyect4 from '../../assets/images/proyect4svg.svg'


const Header = lazy(()=> import ("../../components/Header/Header"));
const LandingPage = lazy(()=> import ("../landingPage"));
const AboutMe = lazy(()=> import ("../aboutMe"));

const Home = () => {

  const menuItems: MenuItem[] = [
    { label: 'Inicio', link: '/' },
    { label: 'Acerca de mí' },
    { label: 'Habilidades' },
    { label: 'Proyectos' },
    { label: 'Contactarme' },
  ];

  const landingPageContent: LandingPageContent = {
    greeting: "Hola, soy Edgardo",
    title: "Desarrollador Frontend",
    description1: "Apasionado por el aprendizaje continuo",
    backgroundLandingPage: `${backgroundHero}`
  };

  const skills: Skill[] = [
    { name: "HTML", icon: FaHtml5, color: "[#0091ea]" },
    { name: "CSS", icon: FaCss3Alt, color: "[#0091ea]" },
    { name: "Tailwind CSS", icon: SiTailwindcss , color: "[#0091ea]" },
    { name: "JavaScript", icon: FaJs, color: "[#0091ea]" },
    { name: "TypeScript", icon: SiTypescript, color: "[#0091ea]" },
    { name: "React", icon: FaReact, color: "[#0091ea]" },
    { name: "React Native", icon: TbBrandReactNative, color: "[#0091ea]" },
    { name: "NextJs", icon: SiNextdotjs, color: "[#0091ea]" },
    { name: "GitHub", icon: FaGithub, color: "[#0091ea]" },
  ];

  const cardProject: CardProject[] = [
    {title: "Maquetado", 
      description: "Es un maquetado de una página web, con HTML y CSS.", 
      imgCard: `${imgProyect3}`,
      linkProject:"https://inspiring-llama-c2604f.netlify.app/",
      icon: FaHtml5,
    },
    {title: "Formulario", 
      description: "Este es un formulario de Usuarios, donde se puede registrar, editar y eliminar.", 
      imgCard: `${imgProyect2}`,
      linkProject:"https://darling-snickerdoodle-80ebca.netlify.app",
      icon: FaReact /* Este es css FaCss3Alt */},
    {title: "Login Page", 
      description: "Este sitio web es un login page, con autenticación de usuarios y registro. Realizado en React Native con Firebase.", 
      imgCard: `${imgProyect4}`,
      linkProject:"#",
      icon: TbBrandReactNative},
/*     {title: "Proyecto 4", 
      description: "Descripción del proyecto 4", 
      imgCard: `${imgProyect1}`,
      linkProject:"#",
      icon: SiTypescript}, */
  ];
  
  return (
    <div className="flex  max-lg:flex-col min-h-screen">
      {/* HEADER */}
      {/* max-lg:relative */}
      <div className="h-screen max-lg:h-[5.8vh] w-[14%] fixed flex max-lg:w-full z-10">
        <Header items={menuItems}/>
      </div>
      {/* Main */}
      <div className="ml-auto w-[86%]  max-lg:w-full z-0">
        <main>
          <section>
            <div className="h-screen w-full bg-cover bg-center overflow-hidden max-lg:bg-cover"  
              style={{backgroundImage: `linear-gradient(rgba(17, 20, 24, 0.7), rgba(17, 20, 24, 0.7)), url(${landingPageContent.backgroundLandingPage})`}}>
              <LandingPage content={landingPageContent}/>
            </div>
          </section>
          <section>
            <div className="w-full py-[72px] px-14 max-lg:px-3 flex flex-col text-[#eeeeee] bg-[#111418] border-b-zinc-800 border-b-[2px]">
                <TitleSection items={{title:"ACERCA DE Mí", subTitle:"Conóceme Más"}}/>
                <AboutMe />
            </div>
          </section>
          <section>
          <div className="w-full py-[72px] px-14 max-lg:px-3 flex flex-col text-[#111418] bg-[#111418] border-b-zinc-800 border-b-[2px]">
              <TitleSection items={{title:"ACERCA DE MIS",subTitle:"Habilidades"}}/>
              <AboutMeSkill skills={skills}/>
            </div>
          </section>
          <section>
          <div className="w-full py-[72px] px-5 max-lg:px-3 flex flex-col bg-[#111418] text-[#111418] border-b-zinc-800 border-b-[2px]">
          <TitleSection items={{title: "Portafolio", subTitle:"Proyectos"}}/>
              <Project items={cardProject}/>
            </div>
          </section>
        </main>
        <div>
          <footer className="bg-[#111418]">
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Home;