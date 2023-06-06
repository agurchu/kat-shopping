import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function Favourite({ size, style }) {
  const [click, setClick] = useState(false);
  return (
    <>
      {" "}
      {click ? (
        <AiFillHeart
          onClick={() => setClick(false)}
          color={click ? "red" : "#333"}
          size={size}
          className={`cursor-pointer ${style}`}
          title="Remove from wishlist"
        />
      ) : (
        <AiOutlineHeart
          onClick={() => setClick(true)}
          color={click ? "red" : "#333"}
          size={size}
          className={`cursor-pointer ${style}`}
          title="Add to wishlist"
        />
      )}
    </>
  );
}
