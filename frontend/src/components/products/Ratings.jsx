import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function Ratings({ ratings }) {
  return (
    <>
      <AiFillStar size={20} color="#f6ba00" className="mr-2 cursor-pointer" />
      <AiFillStar size={20} color="#f6ba00" className="mr-2 cursor-pointer" />
      <AiFillStar size={20} color="#f6ba00" className="mr-2 cursor-pointer" />
      <AiFillStar size={20} color="#f6ba00" className="mr-2 cursor-pointer" />
      <AiOutlineStar
        size={20}
        color="#f6ba00"
        className="mr-2 cursor-pointer"
      />
    </>
  );
}
