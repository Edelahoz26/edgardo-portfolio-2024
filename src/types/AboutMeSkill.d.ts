import { IconType } from "react-icons"; // Importa el tipo IconType

export interface AboutMeSkill {
    name: string;
    icon: IconType;
    color?: string;
}

export interface AboutMeSkillProps{
    skills: AboutMeSkill[];
}