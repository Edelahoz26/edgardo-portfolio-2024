import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { ContentCopy, DoneAll } from "@mui/icons-material";
import { useState } from "react";
import imgColombia from "../../assets/images/colombia.png"

const AboutMe = () => {
  const textToCopy = "delahozedgardo4@gmail.com";
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
          <h1 className="text-3xl mb-5">
            Soy <span className="text-green-400">Edgardo De la hoz</span>, un
            Desarrollador Frontend
          </h1>
          <p className="text-[#4c4d4d]">
            Estoy estudiando ingeniería de sistemas con enfoque en desarrollo
            front-end. Tengo conocimientos de React, Next.js, TypeScript,
            JavaScript, API Management, GitHub, CSS y HTML. Me adapto
            rápidamente a diferentes entornos y disfruto trabajando en equipo.
            Estoy buscando oportunidades para desarrollar aún más mis
            habilidades y adquirir más experiencia en este campo.
          </p>
        </div> 

        <div className="flex flex-col max-lg:justify-start md:px-3 gap-4 text-[#4c4d4d]">
          <p className="flex gap-2 border-b-[#eaeaea] border-b-2 pb-2">
            <span className="font-semibold ">Name:</span> Edgardo De la hoz
          </p>
          <p className="flex gap-2 border-b-[#eaeaea] border-b-2 pb-2">
            <span className="font-semibold">Email: </span>
            <a href={`mailto:${textToCopy}`} className="text-green-400 hover:text-green-500">{textToCopy}</a>
            <span onClick={handleCopy} className=" max-lg:ml-3  cursor-pointer">
              {!isClicked ? <ContentCopy titleAccess="Copiar"/> : <DoneAll color="success" />}
            </span>
          </p>
          <p className="flex gap-2 border-b-[#eaeaea] border-b-2 pb-2">
            <span className="font-semibold ">Edad:</span> 25
          </p>
          <p className="flex gap-2 border-b-[#eaeaea] mb-4">
            <span className="font-semibold ">De:</span> Barranquilla, Atlantico{" "}
            <img
              src={imgColombia}
              alt="Bandera de Colombia"
              title="Colombia"
            />
          </p>

          <Link to={"https://www.flipsnack.com/557F7ADD75E/edgardo_de-la-hoz_cv/full-view.html"}
          >
            <Button
              variant="contained"
              className="max-lg:w-[57%]"
              sx={{
                padding:"2rem 3rem",
                borderRadius: "4rem",
                background: "#4ade80",
                fontWeight: "600",
                "&:hover": { background: "#4ade80" },
                height: "50px",
                fontSize: "16px"
              }}>
              Descargar HV
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
