"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../../public/img/HappyFox2.jpg";
import Link from "next/link";
import { Image } from "@chakra-ui/next-js";
import { Button, Icon, IconButton, Text } from "@chakra-ui/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Component } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FaIcon } from "../faicon";

interface IState {
  isHovered: boolean;
  handleHover: any;
}

export class NavBar extends Component<{}, IState> {
  constructor(props: Array<any>) {
    super(props);
  }

  render() {
    return (
      <nav>
        <FaIcon icon={faBars} />
      </nav>
    );
  }
}

export class Header extends Component<{}, IState> {
  constructor(props: Array<any>) {
    super(props);
  }

  render() {
    return (
      <header className="rounded-b-xl shadow-md shadow-gray-300">
        <div className="flex container mx-auto py-2 justify-between items-center">
          <div>
            <Link
              href={"#"}
              className="flex items-center logo-container"
            >
              <Image
                src={logo}
                alt="Logo"
                boxSize="32px"
                className="rounded-full"
              />
              <Text
                fontSize="15"
                fontWeight="400"
                letterSpacing="1px"
                className="ms-2  transition-all"
              >
                Portfolio
              </Text>
            </Link>
          </div>
          <div>
            <Link href="#">
              <FaIcon icon={faGithub} className="hover:scale-110" />
            </Link>
          </div>
        </div>
        <NavBar />
      </header >
    );
  }
}

// export const Header = () => {

//     function handleHover() {
//         setState
//     }

//
// };
