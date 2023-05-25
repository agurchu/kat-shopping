import React, { useState } from "react";
import { Link } from "react-router-dom";
import { productData } from "../../static/data";
import { AiOutlineSearch } from "react-icons/ai";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState("");

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts = productData.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchData(filteredProducts);
  };

  return (
    <div className="section">
      <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
        <div>
          <Link to="/">
            <img className="h-12" src="kj_dev_logo.png" alt="logo" />
          </Link>
        </div>
        {/* search box */}
        <div className="relative w-[50%]">
          <input
            type="text"
            placeholder="Search Product"
            value={searchTerm}
            onChange={handleSearchChange}
            className="border-orange-600 rounded-md w-full border-2 px-2 h-10"
          />
          <AiOutlineSearch
            size={30}
            className="absolute right-2 top-1.5 cursor-pointer"
          />
          {searchData && searchData.length !== 0 ? (
            <div className="absolute min-h-[30hv] bg-slate-50 shadow-sm-2 z-[9] p-4">
              {searchData &&
                searchData.map((i, index) => {
                  const d = i.name;

                  const product_name = d.replace(/\s+/g, "-");
                  return (
                    <Link key={index} to={`/product/${product_name}`}>
                      <div className="w-full flex items-start-py-3">
                        <img
                          src={i.image_Url[0].url}
                          alt=""
                          className="w-[40px] h-[40px] mr-[10px]"
                        />
                        <h1>{i.name}</h1>
                      </div>
                    </Link>
                  );
                })}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
