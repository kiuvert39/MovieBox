import { Navbar } from "flowbite-react";
import { TbSearch } from "react-icons/tb";
import { IoMdHome } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import "../index.css";

function Nabar() {
  return (
    <Navbar fluid rounded className="bg-opacity-10 fixed top-0 bg-black md:w-full md:mb-16">
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
        <input
          className=" input bg-gray-50  bg-opacity-30 text-white  rounded-lg border-2"
          placeholder="What do you want to watch"
        />

        <TbSearch
          style={{
            osition: "absolute",
            left: "90px",
            top: "50%",
            transform: "translateY(-130%)",
            color: "white",
            paddingLeft: "15px",
          }}
          size="30px"
          color="white"
        />
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
