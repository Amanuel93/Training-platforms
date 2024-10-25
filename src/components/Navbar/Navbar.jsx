import React from "react";
import { NavbarMenu } from "../../mockData/data.js";
import { MdComputer, MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import logo from "../../assets/ethiopost_logo.jfif";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="container flex justify-between items-center py-6">
          {/* Logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold">
            {/* <MdComputer className="text-3xl text-secondary" /> */}
            <img src={logo} alt="Ethiopost logo"  className="h-16 w-16 rounded-full"/>
            <p>POETS</p>
          </div>

          {/* Menu section */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block text-gray-600 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-indigo-700 transition-all duration-300 font-semibold"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* CTA Button section */}
          <div className="hidden lg:block space-x-6">
            <Link to="/Login"><button className="font-semibold">Log in</button></Link>
            <Link to="/Signup">
             <button className="text-white bg-indigo-900 font-semibold rounded-full px-6 py-2 ">
              Register
             </button>
            </Link>
          </div>
          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? <MdMenu className="text-4xl" /> : <IoMdClose className="text-4xl" />}
          </div>
        </div>
      </motion.div>

      {/* mobile Sidebar section */}
      <ResponsiveMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  );
};

export default Navbar;
