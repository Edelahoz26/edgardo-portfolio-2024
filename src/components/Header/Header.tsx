import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Close, Dehaze, GitHub} from "@mui/icons-material";
import imgLogo from "../../assets/images/img CV.png";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { HeaderPros } from "../../types/menuItem";

const Header: FC<HeaderPros> = ({ items }) => {
  const [enableAccordion, setEnableAccordion] = useState(false);
  const handleClickAccordion = () => setEnableAccordion((rev) => !rev);
  
  return (
    <>
      <div className="bg-[#111418] h-full w-full flex flex-col max-lg:hidden">
        <div className="flex justify-center flex-col max-lg:flex-0 pt-8">
          <a href="/" className="lg:mb-auto mt-0 lg:mt-4 text-center">
            <span className="bg-gray-800 rounded-full p-2 lg:mb-1 hidden lg:inline-block">
              <img
                className="w-40 h-40 rounded-full block object-cover"
                src={imgLogo}
                title="Soy Edgardo"
                alt="Profile Image"
                loading="lazy"
              />
            </span>
            <h1 className="text-xl text-center mb-0 lg:block">
              Edgardo De la hoz
            </h1>
          </a>
        </div>
        <div className="grow w-full content-center text-center max-lg:flex-1">
          <nav>
            <ul className="flex flex-col gap-6">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="hover:text-green-400 font-medium transition-all duration-[0.2s] ease-in"
                >
                  {<Link to={`${item.link}`}><p>{item.label}</p></Link>}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex-none w-full h-14 text-center max-lg:flex-1 max-lg:content-center max-lg:h-full hover:text-gray-600 transition-all duration-[0.2s] ease-in text-gray-400">
          <Link
            to={"https://github.com/Edelahoz26"}
            aria-label="GitHub"
            title="GitHub"
            className=""
          >
            <GitHub />
          </Link>
        </div>
        <div className="hidden max-lg:flex items-center max-lg:flex-none  text-white"></div>
      </div>

      <div className=" hidden max-lg:block max-lg:w-full max-lg:fixed ">
        <Accordion
          disableGutters
          elevation={0}
          sx={{ backgroundColor: "transparent" }}
        >
          <AccordionSummary
            onClick={handleClickAccordion}
            expandIcon={
              enableAccordion ? (
                <Close className="text-white" fontSize="large" />
              ) : (
                <Dehaze className="text-white" fontSize="large" />
              )
            }
            sx={{
              backgroundColor: "#111418",
              height: "70px",
            }}>
            <div className="flex justify-between w-full items-center ">
              <h1 className="text-lg text-white">Edgardo De la hoz</h1>
              <div>
                <Link
                  to={"https://github.com/Edelahoz26"}
                  aria-label="GitHub"
                  title="GitHub"
                  className="text-gray-400 "
                >
                  <GitHub className="mr-5" fontSize="small" />
                </Link>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "rgba(0, 0, 0, .94)" }}>
            <nav>
              <ul className="flex flex-col gap-4 text-white  py-[15px]">
                {items.map((item, index) => (
                  <li
                    key={index}
                    className="hover:text-green-400  border-b-[1px] border-b-zinc-500"
                  >
                    {<Link to={`${item.link}`}><p>{item.label}</p></Link>}
                  </li>
                ))}
              </ul>
            </nav>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default Header;