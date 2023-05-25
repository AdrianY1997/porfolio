"use client";

import logo from "../../public/img/HappyFox2.jpg";
import Link from "next/link";
import { motion, spring } from "framer-motion";
import { Image } from "@chakra-ui/next-js";
import { Button, List, ListItem, Text, Tooltip } from "@chakra-ui/react";
import {
  faGithub,
  faLinkedin,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef, useState } from "react";
import {
  faBars,
  faHome,
  faInfo,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { FaIcon } from "../faicon";
import { TooltipRight } from "../tooltip-right";

type NavBarProps = {
  headerHeight: number;
};
export const NavBar = (props: NavBarProps) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);

  const hiddenMenuVariants = {
    hide: { height: "0px" },
    show: { height: "fit-content" },
  };

  const navBarVariants = {
    hide: { top: "-5rem" },
    show: { top: "0" },
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > props.headerHeight) {
      setShowNavBar(true);
    } else {
      setShowNavBar(false);
      setShowMenu(false);
    }
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <motion.nav
      variants={navBarVariants}
      animate={showNavBar ? "show" : "hide"}
      transition={{ type: "spring", bounce: "0.3" }}
      className={`fixed text-center m-2 bg-red-950 rounded-full flex items-center`}
    >
      <div>
        <TooltipRight label="menu">
          <button
            title="menu"
            type="button"
            className="p-1 hover:scale-125"
            onClick={handleMenuClick}
          >
            <FaIcon icon={faBars} fontSize="10px" color="white" />
          </button>
        </TooltipRight>
        <motion.div
          variants={hiddenMenuVariants}
          animate={showMenu ? "show" : "hide"}
          transition={{ type: "spring", bounce: "0.3" }}
          className="overflow-hidden"
        >
          <div>
            <TooltipRight label="home">
              <button
                title="home"
                type="button"
                className="p-2 hover:scale-125"
              >
                <FaIcon icon={faHome} fontSize="10px" color="white" />
              </button>
            </TooltipRight>
          </div>
          <div>
            <TooltipRight label="text">
              <button
                title="text"
                type="button"
                className="p-2 hover:scale-125"
              >
                <FaIcon icon={faInfo} fontSize="10px" color="white" />
              </button>
            </TooltipRight>
          </div>
          <div>
            <TooltipRight label="text">
              <button
                title="text"
                type="button"
                className="p-2 hover:scale-125"
              >
                <FaIcon icon={faQuestion} fontSize="10px" color="white" />
              </button>
            </TooltipRight>
          </div>
          <div>
            <TooltipRight label="text">
              <button
                title="text"
                type="button"
                className="p-2 hover:scale-125"
              >
                <FaIcon icon={faQuestion} fontSize="10px" color="white" />
              </button>
            </TooltipRight>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.getBoundingClientRect().height);
    }
  }, []);

  return (
    <header ref={headerRef} className="rounded-b-xl shadow-md shadow-gray-300">
      <div className="flex container mx-auto py-2 justify-between items-center px-5 sm:px-0 relative">
        <div>
          <button
            type="button"
            className="py-1 px-2 hover:bg-slate-100 transition duration-500 rounded-md tracking-wider"
          >
            <Text className="text-lg/loose font-light">Home</Text>
          </button>
          <button
            type="button"
            className="py-1 px-2 hover:bg-slate-100 transition duration-500 rounded-md tracking-wider"
          >
            <Text className="text-lg/loose font-light">Projects</Text>
          </button>
        </div>
        <div className="logo-container">
          <div className="flex items-center">
            <Image
              priority={true}
              src={logo}
              alt="Logo"
              className="rounded-full shadow-md shadow-gray-300"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div>
          <Link href="#" title="LinkedIn">
            <FaIcon icon={faLinkedinIn} className="hover:scale-110" />
          </Link>
          <Link href="#" className="ms-3" title="GitHub">
            <FaIcon icon={faGithub} className="hover:scale-110" />
          </Link>
        </div>
        <NavBar headerHeight={headerHeight} />
      </div>
    </header>
  );
};

// export const Header = () => {

//     function handleHover() {
//         setState
//     }

//
// };
