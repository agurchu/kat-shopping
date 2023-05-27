import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineMessage } from "react-icons/ai";

export default function ProductDetailsCard({ setOpen, data, open }) {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(false);

  const handleMessageSubmit = () => {};

  return (
    <div className="bg-white">
      {data && (
        <div className="fixed z-40 bg-[#00000030] top-0 w-full h-screen left-0 normalFlex justify-center">
          <div className="bg-white relative w-[90%] h-[90vh] rounded-md p-4 shadow-sm overflow-y-scroll 800px:w-[60%] 800px:h-[75vh]">
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
                <div
                  onClick={handleMessageSubmit}
                  className="bg-black rounded w-[150px] cursor-pointer mt-4 h-11 normalFlex justify-center"
                >
                  <span className="text-white flex items-center">
                    Send Message <AiOutlineMessage className="ml-1" />{" "}
                  </span>
                </div>
                <h5 className="text-base text-red-500 mt-5">
                  {data.total_sell} Sold out
                </h5>
              </div>
              <div className="w-full pt-5 px-2 800px:w-[50">
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
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
