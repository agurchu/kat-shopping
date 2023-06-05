import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function Favourite({
  click,
  data,
  size,
  style,
  onAddToWishlist,
  onRemoveFromWishlist,
}) {
  return (
    <>
      {" "}
      {click ? (
        <AiFillHeart
          onClick={() => onRemoveFromWishlist(data)}
          color={click ? "red" : "#333"}
          size={size}
          className={`cursor-pointer ${style}`}
          title="Remove from wishlist"
        />
      ) : (
        <AiOutlineHeart
          onClick={() => onAddToWishlist(data)}
          color={click ? "red" : "#333"}
          size={size}
          className={`cursor-pointer ${style}`}
          title="Add to wishlist"
        />
      )}
    </>
  );
}
