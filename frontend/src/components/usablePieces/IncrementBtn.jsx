import React, { useState } from "react";
import Favourite from "./Favourite";

export default function IncrementBtn() {
  const [count, setCount] = useState(1);
  const decrementCount = () => {
    if (count > 1) setCount(count - 1);
  };
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
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
  );
}
