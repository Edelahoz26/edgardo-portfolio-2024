import { IconType } from "react-icons";

export interface CardProject {
    title: string;
    description: string;
    imgCard: string;
    linkProject: string;
    icon: IconType;
    icon2?: IconType;
    icon3?: IconType;
}

export interface CardProjectProps {
    items: CardProject[];
}
