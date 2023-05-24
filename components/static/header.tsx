"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../../public/img/HappyFox2.jpg";
import Link from "next/link";
import { Image } from "@chakra-ui/next-js";
import { Text } from "@chakra-ui/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Component } from "react";

interface IState {
  isHovered: boolean;
  handleHover: any;
}
export class Header extends Component<{}, IState> {
  constructor(props: Array<any>) {
    super(props);

    this.state = {
      isHovered: false,
      handleHover: this.handleHover.bind(this),
    };
  }

  handleHover() {
    this.setState({
      isHovered: !this.state.isHovered,
    });
  }

  render() {
    const btnClass = this.state.isHovered ? "scale-110" : "";

    return (
      <header className="rounded-b-xl shadow-md shadow-gray-300">
        <div className="flex container mx-auto py-2 justify-between items-center">
          <div>
            <Link
              href={"#"}
              className="flex items-center"
              onMouseEnter={this.state.handleHover}
              onMouseLeave={this.state.handleHover}
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
                className={`${btnClass} ms-2  transition-all`}
              >
                Portfolio
              </Text>
            </Link>
          </div>
          <div>
            <Link href="#">
              <FontAwesomeIcon
                className="hover:scale-110"
                icon={faGithub}
                style={{ fontSize: 15 }}
              />
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

// export const Header = () => {

//     function handleHover() {
//         setState
//     }

//
// };
