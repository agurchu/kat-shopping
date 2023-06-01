import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductDeails({ data }) {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);

  const navigate = useNavigate();
  return (
    <div className="bg-white">
      {data && (
        <div className="section w-[90%] 800px:w-[80%] h-screen">
          <div className="w-full py-5">
            <div className="block w-full 800px:flex">
              <div className="w-full 800px:w-[50%]">
                <img
                  src={data.image_Url[select].url}
                  className="w-[80%]"
                  alt=""
                />
                <div className="w-full flex">
                  <div className={`${select === 0 ? "border" : ""}`}>
                    <img
                      className="h-[200px]"
                      onClick={() => setSelect(0)}
                      src={data?.image_Url[0].url}
                      alt=""
                    />
                  </div>
                  <div className={`${select === 1 ? "border" : ""}`}>
                    <img
                      className="h-[200px]"
                      onClick={() => setSelect(1)}
                      src={data?.image_Url[1].url}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="w-full 800px:w-1/2">
                <h1 className="productTitle">{data.name}</h1>
                <p>{data.description}</p>
                <div className="flex pt-3">
                  <h4 className="productDiscountPrice">
                    R
                    {data.discount_price
                      .toFixed(2)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </h4>
                  {data.price && (
                    <h3 className="price">
                      R
                      {data.price
                        .toFixed(2)
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </h3>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
