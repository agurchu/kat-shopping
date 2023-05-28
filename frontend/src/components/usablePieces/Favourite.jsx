import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function Favourite({ size, style }) {
  const [click, setClick] = useState(false);
  return (
    <>
      {" "}
      {click ? (
        <AiFillHeart
          onClick={() => setClick(!click)}
          color={click ? "red" : "#333"}
          size={size}
          className={`cursor-pointer ${style}`}
          title="Remove from wishlist"
        />
      ) : (
        <AiOutlineHeart
          onClick={() => setClick(!click)}
          color={click ? "red" : "#333"}
          size={size}
          className={`cursor-pointer ${style}`}
          title="Add to wishlist"
        />
      )}
    </>
  );
}
