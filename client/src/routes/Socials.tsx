import { Link } from "react-router-dom";
import profile from "../assets/file.png";
import leetcode from "../assets/leetcode-svgrepo-com.svg";
import instagram from "../assets/instagram-logo-thin-svgrepo-com.svg";
import linkedin from "../assets/linkedin-svgrepo-com.svg";
import acm from "../assets/acm-svgrepo-com.svg";
import AnimatedText from "@/components/AnimatedText";

const LINKS = [
  {
    key: 0,
    link: "https://www.linkedin.com/in/peter-mora-stevens/",
    title: "LinkedIn",
    icon: linkedin,
    text: "@peter-mora-stevens",
  },
  {
    key: 1,
    link: "https://www.instagram.com/petermora_",
    title: "Instagram",
    icon: instagram,
    text: "@petermora_",
  },
  {
    key: 2,
    link: "https://acm.oregonstate.edu/",
    title: "ACM @ OSU",
    icon: acm,
    text: "Thursday @ 6pm",
  },
  {
    key: 3,
    link: "https://leetcode.com/u/PeterMoraStevens/",
    title: "Leetcode",
    icon: leetcode,
    text: "550+ solved",
  },
];

function Socials() {
  return (
    <div className="text-text dark:text-darkText relative mx-auto h-full w-[700px] max-w-full p-8 md:p-16 xl:w-[1400px] min-h-screen">
      <div className="mb-12 w-full xl:fixed xl:mb-0 xl:w-[500px]">
        <img
          className="border-border dark:border-darkBorder w-28 rounded-full border-2 xl:w-[250px]"
          src={profile}
          alt="profile picture"
        />

        <div className="mt-8">
          <AnimatedText text={"Peter Mora-Stevens"} />
          <p className="mt-6 sm:text-xl">
            Here are my socials. Feel free to add me anywhere.
          </p>
        </div>
      </div>
      <div className="justify-end xl:flex">
        <div
          id="grid-container"
          className="text-text dark:text-text grid w-full grid-cols-2 gap-10 md:grid-cols-3 xl:w-1/2 xl:pb-16 w450:grid-cols-1 w450:gap-7"
        >
          {Object.keys(LINKS).map((key: any) => (
            <Link
              className="border-border dark:border-darkBorder shadow-light dark:shadow-dark rounded-base border-2 bg-main p-5 transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none"
              key={key}
              target="_blank"
              to={LINKS[key].link}
            >
              <img
                className="h-8 w-8 sm:h-10 sm:w-10"
                src={LINKS[key].icon}
                alt={LINKS[key].title}
              />
              <p className="mt-3 text-lg font-heading sm:text-xl">
                {LINKS[key].title}
              </p>
              <p className="mt-1 text-sm font-base sm:text-base">
                {LINKS[key].text}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Socials;
