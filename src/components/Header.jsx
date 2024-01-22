import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="py-4">
      <Container>
        <Flex>
          <div className="w-1/3">
            <img src={Logo} alt="logo" />
          </div>
          <div className="w-2/3">
            <ul className="flex justify-center gap-x-10">
              <li>
                <a className="font-dms hover:font-bold" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="font-dms hover:font-bold" href="#">
                  Shop
                </a>
              </li>
              <li>
                <a className="font-dms hover:font-bold" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="font-dms hover:font-bold" href="#">
                  Contacts
                </a>
              </li>
              <li>
                <a className="font-dms hover:font-bold" href="#">
                  Journal
                </a>
              </li>
            </ul>
          </div>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
