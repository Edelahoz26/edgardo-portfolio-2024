import { useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { ContentCopy, DoneAll } from "@mui/icons-material";
import { FaFileDownload } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import curriculum from "../../assets/pdf/Edgardo_De la hoz_CV.pdf";
import imgColombia from "../../assets/images/colombia.png"

const AboutMe = () => {
  const textToCopy = "delahoze64@gmail.com";
  const [isClicked, setIsClicked] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 3000);
    } catch (error) {
      console.error("Error al copiar el texto:", error);
    }
  };

  return (
    <div className=" w-full flex flex-col justify-center relative text-wrap ">
      <div className="md:flex  w-full h-auto mt-12 md:px-36">
        <div className="flex flex-col w-full max-lg:text-center md:px-3 mb-4">
          <h1 className="text-3xl mb-5 text-[#eeeeee]">
            Soy <span className="text-[#0091ea]">Edgardo De la hoz</span>, un
            Desarrollador Frontend
          </h1>
          <p className="text-[#eeeeee]">
            Estoy estudiando ingeniería de sistemas con enfoque en desarrollo
            front-end. Tengo conocimientos de React, Next.js, TypeScript,
            JavaScript, API Management, GitHub, CSS y HTML. Me adapto
            rápidamente a diferentes entornos y disfruto trabajando en equipo.
            Estoy buscando oportunidades para desarrollar aún más mis
            habilidades y adquirir más experiencia en este campo.
          </p>
        </div> 

        <div className="flex flex-col max-lg:justify-start md:px-3 gap-4 text-[#757575]">
          <p className="flex gap-2 border-b-[#eaeaea] border-b-2 pb-2">
            <span className="font-semibold ">Name:</span> Edgardo De la hoz
          </p>
          <p className="flex gap-2 border-b-[#eaeaea] border-b-2 pb-2">
            <span className="font-semibold">Email: </span>
            <a href={`mailto:${textToCopy}`} className="text-[#0091ea] hover:text-[#01579b]">{textToCopy}</a>
            <span onClick={handleCopy} className="   cursor-pointer">
              {!isClicked ? <ContentCopy titleAccess="Copiar"/> : <DoneAll color="success" />}
            </span>
          </p>
          <p className="flex gap-2 border-b-[#eaeaea] border-b-2 pb-2">
            <span className="font-semibold ">Edad:</span> 26
          </p>
          <p className="flex gap-2 border-b-[#eaeaea] mb-4">
            <span className="font-semibold ">De:</span> Barranquilla, Atlantico{" "}
            <LazyLoadImage
              src={imgColombia}
              alt="Bandera de Colombia"
              effect="blur"
              title="Colombia"
            />
          </p>

          <Link to={curriculum} target="_blank" download
          >
            <Button
              variant="contained"
              className="max-lg:w-[57%]"
              sx={{
                padding:"2rem 3rem",
                borderRadius: "4rem",
                background: "#0091ea",
                fontWeight: "600",
                "&:hover": { background: "#01579b]" },
                height: "50px",
                fontSize: "16px",
              }}>
              Descargar CV
              <span>
                  <FaFileDownload className="text-xl ml-2" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
