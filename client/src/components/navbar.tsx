import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  BriefcaseBusiness,
  Home,
  Menu,
  Newspaper,
  SmileIcon,
} from "lucide-react";
import Brutal1 from "../assets/Brutalist 53.svg";
import Brutal2 from "../assets/Brutalist 59.svg";
import Brutal3 from "../assets/Brutalist 62.png";
import Brutal4 from "../assets/Brutalist 86.svg";

const Navbar = () => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);

  const screenSize = () => {
    setScreenWidth(window.screen.width);
  };

  useEffect(() => {
    window.addEventListener("resize", screenSize);
    return () => window.removeEventListener("resize", screenSize);
  }, [screenSize]);

  const NavbarDesktop = () => {
    return (
      <div className="font-spaceGrotesk p-6 px-12 bg-bg border-darkBorder border-b-4 flex">
        <div className="flex-1">
          <Link to={"/"} className="mx-1">
            <Button>
              <Home className="mr-2" /> Home
            </Button>
          </Link>
          <Link to={"/about"} className="mx-1">
            <Button>
              <SmileIcon className="mr-2" /> About
            </Button>
          </Link>
          <Link to={"/portfolio"} className="mx-1">
            <Button>
              <BriefcaseBusiness className="mr-2" /> Portfolio
            </Button>
          </Link>
          <Link to={"/blog"} className="mx-1">
            <Button>
              <Newspaper className="mr-2" /> Blog
            </Button>
          </Link>
        </div>
        <div className="flex -m-4 items-center self-center">
          <img
            src={Brutal1}
            width={45}
            className="m-2"
            hidden={screenWidth < 840}
          />
          <img
            src={Brutal3}
            width={45}
            className="m-2"
            hidden={screenWidth < 840}
          />
          <img
            src={Brutal4}
            width={45}
            className="m-2"
            hidden={screenWidth < 840}
          />
          <img
            src={Brutal2}
            width={45}
            className="m-2"
            hidden={screenWidth < 840}
          />
        </div>
      </div>
    );
  };

  const NavbarPhone = () => {
    return (
      <div className="font-spaceGrotesk p-6 px-12 bg-bg border-darkBorder border-b-4 flex items-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="noShadow" className="p-2 mr-2">
              <Menu />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-48 dark:text-text ml-4">
            <div className="grid gap-4">
              <div className="space-y-2"></div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Link to={"/"} className="mx-1 m-1">
                    <Button>
                      <Home className="mr-2" /> Home
                    </Button>
                  </Link>
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Link to={"/about"} className="mx-1 m-1">
                    <Button>
                      <SmileIcon className="mr-2" /> About
                    </Button>
                  </Link>
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Link to={"/portfolio"} className="mx-1 m-1">
                    <Button>
                      <BriefcaseBusiness className="mr-2" /> Portfolio
                    </Button>
                  </Link>
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Link to={"/blog"} className="mx-1 m-1">
                    <Button>
                      <Newspaper className="mr-2" /> Blog
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        {/* Move this div to the right */}
        <div className="flex items-center ml-auto">
          <img
            src={Brutal1}
            width={45}
            className="m-2"
            hidden={screenWidth < 340}
          />
          <img
            src={Brutal3}
            width={45}
            className="m-2"
            hidden={screenWidth < 400}
          />
          <img
            src={Brutal4}
            width={45}
            className="m-2"
            hidden={screenWidth < 425}
          />
          <img
            src={Brutal2}
            width={45}
            className="m-2"
            hidden={screenWidth < 500}
          />
        </div>
      </div>
    );
  };

  if (screenWidth <= 640) {
    return <NavbarPhone />;
  }
  return <NavbarDesktop />;
};

export default Navbar;
