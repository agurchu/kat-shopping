import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";

export default function Wishlist({ setOpenWishList }) {
  const cartData = [
    {
      name: "Iphone 14 pro max 256 gb ssd and 8gb ram sliver colour",
      description: "test",
      price: 999,
    },
    {
      name: "Iphone 14 pro max 256 gb ssd and 8gb ram sliver colour",
      description: "test",
      price: 245,
    },
    {
      name: "Iphone 14 pro max 256 gb ssd and 8gb ram sliver colour",
      description: "test",
      price: 645,
    },
  ];
  return (
    <div className="h-screen z-10 fixed bg-[#0000004b] top-0 left-0 right-0">
      <div className="bg-white fixed top-0 right-0 lg:w-2/5 w-full sm:w-2/4 min-h-full flex shadow-sm flex-col justify-between">
        <div>
          <div className="flex w-full pt-5 pr-5 justify-end">
            <RxCross1
              size={25}
              className="cursor-pointer"
              onClick={() => setOpenWishList(false)}
            />
          </div>
          {/* iten length */}
          <div className="normalFlex p-4">
            <AiOutlineHeart size={25} />
            <h5 className="pl-5 text-xl font-medium">3 items</h5>
          </div>

          {/* cart single items */}
          <div>
            {cartData &&
              cartData.map((item, index) => (
                <CartSingle key={index} data={item} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CartSingle({ data }) {
  const [value, setValue] = useState(1);
  const usdToZar = 19.66;
  const totalPrice = (data.price * usdToZar * value)
    .toFixed(2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className="border-b p-4">
      <div className="w-full normalFlex">
        <RxCross1 size={18} className="cursor-pointer" />
        <img
          src="https://bonik-react.vercel.app/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png"
          alt="cloth"
          className="w-20 h-20 ml-2"
        />

        <div className="px-1">
          <h1>{data.name}</h1>
          <h3 className="font-semibold font-Roboto text-lg pt-1 text-orange-600">
            R{totalPrice}
          </h3>
        </div>
        <div>
          <BsCartPlus
            size={20}
            className="cursor-pointer "
            title="Add to cart"
          />
        </div>
      </div>
    </div>
  );
}
