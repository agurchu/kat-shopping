import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../redux/actions/wishlist";

export default function Favourite({ size, style, data, click }) {
  const handleRemoveFromWishlist = (data) => {
    setClick(!click);
    dispatch(removeFromWishlist(data));
  };

  const handleAddToWishlist = (data) => {
    setClick(!click);
    dispatch(addToWishlist(data));
  };
  return (
    <>
      {" "}
      {click ? (
        <AiFillHeart
          onClick={() => handleRemoveFromWishlist(data)}
          color={click ? "red" : "#333"}
          size={size}
          className={`cursor-pointer ${style}`}
          title="Remove from wishlist"
        />
      ) : (
        <AiOutlineHeart
          onClick={() => handleAddToWishlist(data)}
          color={click ? "red" : "#333"}
          size={size}
          className={`cursor-pointer ${style}`}
          title="Add to wishlist"
        />
      )}
    </>
  );
}
