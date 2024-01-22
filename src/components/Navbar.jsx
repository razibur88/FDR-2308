import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  let [cartShow, setCartShow] = useState(false);
  let cartRef = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (cartRef.current.contains(e.target)) {
        setCartShow(true);
      } else {
        if (e.target.tagName != "LI") {
          setCartShow(false);
        }
      }
    });
  }, []);

  return (
    <Container>
      <Flex className="items-center">
        <div className="w-1/4 relative">
          <div className="flex items-center gap-x-2 demo" ref={cartRef}>
            <FaBars />
            <h3 className="font-dms text-[14px]">Shop by Category</h3>
          </div>
          {cartShow && (
            <div className="bg-[#262626] absolute left-0 top-[30px] w-full">
              <ul>
                <li className="font-dms font-normal text-[16px] text-white/50 py-3 px-4 hover:pl-6 hover:text-white ease-in duration-300">
                  Accesories
                </li>
                <li className="font-dms font-normal text-[16px] text-white/50 py-3 px-4 hover:pl-6 hover:text-white ease-in duration-300">
                  Furniture
                </li>
                <li className="font-dms font-normal text-[16px] text-white/50 py-3 px-4 hover:pl-6 hover:text-white ease-in duration-300">
                  Electronics
                </li>
                <li className="font-dms font-normal text-[16px] text-white/50 py-3 px-4 hover:pl-6 hover:text-white ease-in duration-300">
                  Clothes
                </li>
                <li className="font-dms font-normal text-[16px] text-white/50 py-3 px-4 hover:pl-6 hover:text-white ease-in duration-300">
                  Bags
                </li>
                <li className="font-dms font-normal text-[16px] text-white/50 py-3 px-4 hover:pl-6 hover:text-white ease-in duration-300">
                  Home appliances
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="w-1/2">
          <input
            type="search"
            className="w-full py-3 px-3 border-2 border-black outline-0"
            placeholder="Search...."
          />
        </div>
        <div className="w-1/4">1</div>
      </Flex>
    </Container>
  );
};

export default Navbar;
