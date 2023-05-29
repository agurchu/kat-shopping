import { set } from "mongoose";
import React, { useState } from "react";
import {
  AiFillStar,
  AiOutlineEye,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import Favourite from "../../usablePieces/Favourite.jsx";
import ProductDetailsCard from "../productDetailsCard/ProductDetailsCard.jsx";

export default function ProductCart({ data }) {
  const [open, setOpen] = useState(false);

  const product_name = data.name.replace(/\s+/g, "-");
  return (
    <>
      <div className="w-full h-[370px] bg-white rounded-lg overflow-hidden shadow-sm p-3 relative cursor-pointer">
        <Link to={`/product/${product_name}`}>
          <img
            className="w-full h-[170px] object-contain"
            src={data.image_Url[0].url}
            alt=""
          />
        </Link>
        <Link to="/">
          <h5 className="shop_name">{data.shop.name}</h5>
        </Link>
        <Link to={`/product/${product_name}`}>
          <h4 className="pb-3 font-medium">
            {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
          </h4>
          <div className="flex">
            <AiFillStar
              size={20}
              color="#f6ba00"
              className="mr-2 cursor-pointer"
            />
            <AiFillStar
              size={20}
              color="#f6ba00"
              className="mr-2 cursor-pointer"
            />
            <AiFillStar
              size={20}
              color="#f6ba00"
              className="mr-2 cursor-pointer"
            />
            <AiFillStar
              size={20}
              color="#f6ba00"
              className="mr-2 cursor-pointer"
            />
            <AiOutlineStar
              size={20}
              color="#f6ba00"
              className="mr-2 cursor-pointer"
            />
          </div>

          <div className="py-2 normalFlex justify-between">
            <div className="flex">
              <h5 className="productDiscountPrice">
                R{data.price === 0 ? data.price : data.discount_price}
              </h5>
              <h4 className="price">{data.price ? "R" + data.price : null}</h4>
            </div>
            <span className="font-normal text-lg text-green-500 ">
              {data.total_sell} sold
            </span>
          </div>
        </Link>
        {/* side options */}
        <div>
          <Favourite size={22} style={"absolute right-2 top-5"} />

          <AiOutlineEye
            onClick={() => setOpen(!open)}
            color="#333"
            size={22}
            className="cursor-pointer absolute right-2 top-14"
            title="Quick view"
          />
          <AiOutlineShoppingCart
            onClick={() => setOpen(!open)}
            color="#444"
            size={25}
            className="cursor-pointer absolute right-2 top-24"
            title="Add to cart"
          />
          {open && (
            <ProductDetailsCard open={open} setOpen={setOpen} data={data} />
          )}
        </div>
      </div>
    </>
  );
}
