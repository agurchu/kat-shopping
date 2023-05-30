import React from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";

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
      <div className="bg-white fixed top-0 right-0 w-1/4 min-h-full flex shadow-sm flex-col justify-between">
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
        </div>
      </div>
    </div>
  );
}
