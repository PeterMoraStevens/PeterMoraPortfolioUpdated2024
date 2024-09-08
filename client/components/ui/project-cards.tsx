import React from "react";

type cardContent = {
  img: string;
  title: string;
  link: string;
  date: string;
  desc: string;
};

const project_cards = ({ img, title, link, date, desc }: cardContent) => {
  return (
    <div className="w-80 h-full border-black dark:border-white border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] dark:bg-[#dfe5f2] dark:shadow-[#dfe5f2] bg-zinc-900 dark:text-slate-950 text-neutral-200 font-Space_Grotesk">
      <a href={link} className="block cursor-pointer" target="_blank">
        <article className="w-full h-full">
          <figure className="w-full h-1/2 border-black border-b-2">
            <img
              src={img}
              alt="thumbnail"
              className="h-full w-full object-contian"
            />
          </figure>
          <div className="px-6 py-5 text-left h-full">
            <p className="w-min rounded-full border-2 border-black bg-[#C4A1FF] px-3 py-1.5 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
              {date}
            </p>
            <h1 className="text-[32px] mb-4">{title}</h1>
            <p className="text-xs mb-4">{desc}</p>
          </div>
        </article>
      </a>
    </div>
  );
};

export default project_cards;
