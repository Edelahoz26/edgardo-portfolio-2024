import Footer from "../../components/Footer/Footer";
import backgroundHero from "../../assets/images/backgroundHero.jpg"
import { lazy } from "react";
import { MenuItem } from "../../types/menuItem";
import { LandingPageContent, /* ProgressBar */ } from "../../types";
import { AboutMeSkill as Skill } from "../../types/AboutMeSkill";
import AboutMeSkill from "../aboutMeSkill";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import Project from "../projects";
import TitleSection from "../../components/TitleSection/TitleSection";


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
    description2: "Apasionado por UX/UI",
    backgroundLandingPage: `${backgroundHero}`
  };

/*   const progressBar: ProgressBar[]= [
    {title: "My Skills"},
    {skill: "HTML", progress:"80%"},
    {skill: "CSS", progress:"80%"},
    {skill: "JavaScript", progress:"65%"},
    {skill: "JavaScript", progress:"65%"},
    {skill: "React", progress:"70%"},
  ] */
  const skills: Skill[] = [
    { name: "HTML", icon: FaHtml5, color: "green-400" },
    { name: "CSS", icon: FaCss3Alt, color: "green-400" },
    { name: "Tailwind CSS", icon: SiTailwindcss , color: "green-400" },
    { name: "JavaScript", icon: FaJs, color: "green-400" },
    { name: "TypeScript", icon: SiTypescript, color: "green-400" },
    { name: "React", icon: FaReact, color: "green-400" },
    { name: "React Native", icon: TbBrandReactNative, color: "green-400" },
    { name: "NextJs", icon: SiNextdotjs, color: "green-400" },
    { name: "GitHub", icon: FaGithub, color: "green-400" },
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
            <div className="w-full py-[72px] px-14 max-lg:px-3 flex flex-col text-[#111418]">
                <TitleSection items={{title:"ACERCA DE Mí", subTitle:"Conóceme Más"}}/>
                <AboutMe />
            </div>
          </section>
          <section>
          <div className="w-full py-[72px] px-14 max-lg:px-3 flex flex-col text-[#111418] bg-[#f8f9fa]">
              <TitleSection items={{title:"ACERCA DE MIS",subTitle:"Habilidades"}}/>
              <AboutMeSkill skills={skills}/>
            </div>
          </section>
          <section>
          <div className="w-full py-[72px] px-14 max-lg:px-3 flex flex-col text-[#111418]">
          <TitleSection items={{title: "Portafolio", subTitle:"Proyectos"}}/>
              <Project />
            </div>
          </section>
        </main>
        <div>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Home;
