import { IconType } from "react-icons";

export interface CardProject {
    title: string;
    description: string;
    imgCard: string;
    linkProject: string;
    icon: IconType;
}

export interface CardProjectProps {
    items: CardProject[];
}
