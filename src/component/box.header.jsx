import { Button } from "flowbite-react";
import React from "react";

const Boxheader = () => {
  return (
    <div className=" justify-start w-4/5 max-w-md ml-7 md:ml-40 md:mt-16  h-80 max-h-80">
      <div className=" max-w-xs w-4/5 md:w-screen md:max-w-lg pt-3 pl-10 pb-2">
        <h1 className=" text-white md:text-6xl text-2xl">
          John Wick 3: Parabellum
        </h1>
      </div>
      <div className="flex flex-raw gap-3 ml-7 md:mt-2">
        <div className=" text-white flex gap-1 flex-raw md:text-lg">
          <img src="/public/images/imdb.png" alt="imdb" />
          86.0/100
        </div>
        <div className=" text-white flex gap-1 flex-raw md:text-lg">
          <img src="apple.png" alt="aplle" />
          97%
        </div>
      </div>
      <p className=" text-white mt-2 ml-8 font-sans md:text-lg md:mt-4 md:mb-8 leading-4">
        John Wick is on the run after killing a member of the international
        assassins' guild, and with a $14 million price tag on his head, he is
        the target of hit men and women everywhere.
      </p>

      <Button className=" text-white mt-4 ml-10">
        <img src="icon.png" alt="icon" /> WATCH TRAILER
      </Button>
    </div>
  );
};

export default Boxheader;
