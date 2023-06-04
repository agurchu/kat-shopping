import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";
export default function Cart({ setOpenCart }) {
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
              onClick={() => setOpenCart(false)}
            />
          </div>
          {/* iten length */}
          <div className="normalFlex p-4">
            <IoBagHandleOutline size={25} />
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
        <div className="section mb-4">
          {/* checkout buttons */}
          <Link>
            <div className="bg-orange-600 w-full h-11 normalFlex justify-center rounded-md">
              <h1 className="text-white font-medium text-lg">
                Checkout Now (R50,000)
              </h1>
            </div>
          </Link>
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
  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    if (value === 1) return;
    setValue(value - 1);
  };
  return (
    <div className="border-b p-4">
      <div className="w-full normalFlex">
        <div>
          <div
            onClick={handleIncrement}
            className="bg-black shadow-md bg-opacity-50 p-2 rounded-md cursor-pointer"
          >
            <HiPlus size={18} color="white" />
          </div>
          <span className="p-3 ">{value}</span>
          <div
            onClick={handleDecrement}
            className="bg-black shadow-sm bg-opacity-20 p-2 rounded-md cursor-pointer"
          >
            <HiOutlineMinus size={16} className="text-gray-900" />
          </div>
        </div>
        <img
          src="https://bonik-react.vercel.app/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png"
          alt="cloth"
          className="w-20 h-20 ml-2"
        />
        <div className="pl-1">
          <h1>{data.name}</h1>
          <h2 className="font-normal text-sm text-[#00000082]">
            R
            {(data.price * usdToZar)
              .toFixed(2)
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
            * {value}
          </h2>
          <h3 className="font-semibold font-Roboto text-lg pt-1 text-orange-600">
            R{totalPrice}
          </h3>
        </div>
        <RxCross1 className="cursor-pointer" />
      </div>
    </div>
  );
}
