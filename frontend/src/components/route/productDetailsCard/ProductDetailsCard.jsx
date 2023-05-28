import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import Favourite from "../../usablePieces/Favourite";

export default function ProductDetailsCard({ setOpen, data, open }) {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(false);

  const handleMessageSubmit = () => {};
  const decrementCount = () => {
    if (count > 1) setCount(count - 1);
  };
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="bg-white">
      {data && (
        <div className="fixed z-40 bg-[#00000030] top-0 w-full h-screen left-0 normalFlex justify-center">
          <div className="bg-white relative w-[90%] h-[90vh] rounded-md p-4 shadow-sm overflow-y-scroll lg:w-[60%] lg:h-[75vh]">
            <RxCross1
              size={30}
              className="absolute right-3 top-3 z-50"
              onClick={() => setOpen(false)}
            />
            <div className="block w-full 800px:flex">
              <div className="w-full 800px:w-[50%]">
                <img src={data.image_Url[0].url} alt="" />
                <div className="flex">
                  <img
                    className="w-12 h-12 rounded-full mr-2 "
                    src={data.shop.shop_avatar.url}
                    alt=""
                  />
                  <div>
                    <h3 className="shop_name">{data.shop.name}</h3>
                    <h4 className="pb-3 text-sm">{data.shop.ratings}</h4>
                  </div>
                </div>
                <div onClick={handleMessageSubmit} className="button2">
                  <span className="text-white flex items-center">
                    Send Message <AiOutlineMessage className="ml-1" />{" "}
                  </span>
                </div>
                <h5 className="text-base text-red-500 mt-5">
                  {data.total_sell} Sold out
                </h5>
              </div>
              <div className="w-full pt-5 px-2 800px:w-[50%]">
                <h1 className="text-xl productTitle">{data.name}</h1>
                <p>{data.description}</p>
                <div className="flex pt-3">
                  <h4 className="productDiscountPrice">
                    R{data.discount_price}
                  </h4>
                  <h3 className="price">
                    {data.price ? "R" + data.price : null}
                  </h3>
                </div>
                <div className="normalFlex mt-12 justify-between pr-3">
                  <div>
                    <button
                      onClick={decrementCount}
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-[250ms]"
                    >
                      -
                    </button>
                    <div className="bg-gray-200 inline-flex justify-center w-10 py-2 font-medium text-gray-800 ">
                      {count}
                    </div>
                    <button
                      onClick={incrementCount}
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-r px-4 py-2 shadow-lg hover:opacity-75 transition duration-[250ms]"
                    >
                      +
                    </button>
                  </div>
                  <div>
                    <Favourite size={30} />
                  </div>
                </div>
                <div className="button2">
                  <span className="normalFlex text-white">
                    Add to cart <AiOutlineShoppingCart className="ml-1" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
