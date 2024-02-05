import { Navbar } from "flowbite-react";
import { TbSearch } from "react-icons/tb";
import { IoMdHome } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import "../index.css";
import { useState } from "react";
import SearchMovie from "./SearchMovie";

function Nabar() {
  //  const handleSearch = (e) =>{
  //   e.preventDefault()
  //   fetchPopular()
  //  }

  return (
    <Navbar
      fluid
      rounded
      className="bg-opacity-1 sticky sm:w-full top-0 bg-stone-900 md:w-full md:mb"
    >
      <Navbar.Brand
        href="https://flowbite-react.com"
        className="w-44 h-10 gap-8 md:ms-24"
      >
        <img src="tv.jpg" className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-DM sana w-32  text-white leading-9">
          MovieBox
        </span>

      </Navbar.Brand>
      
      <div className="search-container">
      
      </div>
      <Navbar.Toggle />
      <Navbar.Collapse className=" md:mr-24">
        <Navbar.Link
          href="#"
          className=" text-white  flex gap-2 flex-row font-Sans leading-3 text-base"
        >
          <IoMdHome size="19px" />
          Home
        </Navbar.Link>
        <Navbar.Link
          href="#"
          className=" text-white flex gap-2 flex-row font-Sans leading-3 text-base"
        >
          <IoPerson size="17px" />
          Signin
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nabar;
