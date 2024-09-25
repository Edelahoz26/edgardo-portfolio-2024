import { Button } from "@mui/material"
import { FC } from "react"
import { LandingPageProps } from "../../types"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const LandingPage: FC<LandingPageProps>= ({content}) => {

  return (
    <div className="flex flex-col h-full w-full justify-center items-center text-wrap text-center relative">
      <p className="text-2xl font-medium pb-4">{content.greeting}</p>
      <h1 className="text-[4rem] font-semibold pb-4 max-lg:text-3xl">{content.title}</h1>
      <p className="text-xl font-light pb-4 max-lg:text-lg">{content.description1}</p>
      <p className="text-xl font-light pb-4 max-lg:text-lg">{content.description2}</p>
       <Button variant="outlined" size="large" sx={{
          borderRadius:"4rem",
          padding:"0.8rem 2.6rem",
          fontWeight: "500",
          border:"2px solid #0091ea",
          color: "#0091ea",
          transition:"all 0.5s ease",
          '&:hover': { background: "#0091ea",color:"white", border:"2px solid #0091ea"},
       }} className="">Contáctame</Button>
       <span className="absolute bottom-0 animate-bounce cursor-pointer">
        <KeyboardArrowDownIcon sx={{fontSize:"40px"}} />
       </span>
    </div>
  )
}

export default LandingPage