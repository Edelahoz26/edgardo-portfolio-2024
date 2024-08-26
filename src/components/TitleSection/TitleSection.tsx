import { FC } from "react";
import { TitleSectionProps } from "../../types/titleSection";

const TitleSection: FC<TitleSectionProps> = ({ items }) => {
  return (
    <div className="relative w-full flex items-center flex-col ">
      <h1 className="opacity-10 font-extrabold text-9xl max-lg:text-5xl ">
        {items.title}
      </h1>
      <p className=" absolute font-semibold top-10 max-lg:top-0.5 text-4xl max-lg:text-4xl ">
        {items.subTitle}
      </p>
      <span className="md:relative md:top-[-43px] border-b-[4px] border-b-green-400 mx-auto w-20 "></span>
    </div>
  );
};

export default TitleSection;
