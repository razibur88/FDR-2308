import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import { FaBars, FaCartArrowDown, FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import CartImg from "../assets/cartimg.png";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  let [cartShow, setCartShow] = useState(false);
  let [cartSec, setCartSec] = useState(false);
  let [cartAcc, setCartAcc] = useState(false);
  let cartRef = useRef();
  let cartSecRef = useRef();
  let cartAccRef = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (cartRef.current.contains(e.target)) {
        setCartShow(!cartShow);
      } else {
        if (e.target.tagName != "LI") {
          setCartShow(false);
        }
      }
      if (cartSecRef.current.contains(e.target)) {
        setCartSec(!cartSec);
      } else {
        setCartSec(false);
      }
      if (cartAccRef.current.contains(e.target)) {
        setCartAcc(!cartAcc);
      } else {
        setCartAcc(false);
      }
    });
  }, [cartShow, cartSec, cartAcc]);
  return (
    <nav className="py-4 bg-[#F5F5F3]">
      <Container>
        <Flex className="items-center">
          <div className="w-1/4 relative">
            <div className="flex items-center gap-x-2" ref={cartRef}>
              <FaBars />
              <h3 className="font-dms text-[14px]">Shop by Category</h3>
            </div>
            {cartShow && (
              <div className="bg-[#262626] absolute left-0 top-[50px] z-50 w-full">
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
              className="w-full py-3 px-3 border-2 !outline-0"
              placeholder="Search...."
            />
          </div>
          <div className="w-1/4 relative">
            <div className="flex items-center justify-end gap-x-6">
              <div className="flex" ref={cartAccRef}>
                <FaUser />
                <IoMdArrowDropdown />
              </div>
              <div className="" ref={cartSecRef}>
                <FaCartArrowDown />
              </div>
            </div>
            {cartSec && (
              <div className="absolute right-0 top-[50px] z-50">
                <div className="w-[300px] bg-[#F3F3F3]">
                  <div className="flex items-center justify-around py-3">
                    <div className="">
                      <img src={CartImg} alt="cartimg" />
                    </div>
                    <div className="">
                      <h4>Black Smart Watch</h4>
                      <p>$44.00</p>
                    </div>
                    <div className="">
                      <RxCross2 />
                    </div>
                  </div>
                  <div className="bg-[#fff] py-4">
                    <h4 className="font-dms font-normal text-[16px] pl-4">
                      Subtotal: $44.00
                    </h4>
                    <div className="flex justify-around pt-3">
                      <div className="">
                        <a
                          href="#"
                          className="py-[16px] px-[32px] border-2 inline-block hover:bg-[#262626] hover:text-white ease-in duration-300"
                        >
                          View Cart
                        </a>
                      </div>
                      <div className="">
                        <a
                          href="#"
                          className="py-[16px] px-[32px] border-2 inline-block hover:bg-[#262626] hover:text-white ease-in duration-300"
                        >
                          Checkout
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {cartAcc && (
              <div className="">
                <div className="bg-[#262626] absolute left-[150px] top-[50px] w-[200px] z-50">
                  <ul>
                    <li className="font-dms font-normal text-[16px] text-white py-4 px-3 hover:bg-white hover:text-[#222] ease-in duration-300">
                      My Acoount
                    </li>
                    <li className="font-dms font-normal text-[16px] text-white py-4 px-3 hover:bg-white hover:text-[#222] ease-in duration-300">
                      Logout
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
