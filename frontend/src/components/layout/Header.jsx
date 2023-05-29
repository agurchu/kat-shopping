import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { categoriesData, productData } from "../../static/data";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { backend_url } from "../../server";

export default function Header({ activeHeading }) {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState("");
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts = productData.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchData(filteredProducts);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 70) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }, []);

  return (
    <>
      <div className="section">
        <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
          <div>
            <Link to="/">
              <img className="h-12" src="kj_dev_logo.png" alt="logo" />
            </Link>
          </div>
          {/* search box */}
          <div className="relative w-[50%] mx-4">
            <input
              type="text"
              placeholder="Search Product"
              value={searchTerm}
              onChange={handleSearchChange}
              className="border-black rounded-md w-full border-2 px-2 h-10"
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
          <div className="button">
            <Link to="/seller">
              <h1 className="text-white flex items-center">
                Become Seller <IoIosArrowForward className="ml-1" />{" "}
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : ""
        } transition hidden 800px:flex items-center justify-between w-full bg-black h-[70px]`}
      >
        <div className="section relative normalFlex justify-between">
          {/* categories */}
          <div onClick={() => setDropDown(!dropDown)}>
            <div className="relative h-16 mt-2.5 w-[270px] hidden 1000px:block">
              {/* hidden above */}
              <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
              <button className="h-full w-full bg-white pl-10 flex justify-between items-center font-sans text-lg font-[500] select-none rounded-t-md">
                All Categories
              </button>
              <IoIosArrowDown
                size={20}
                className="absolute right-2 top-4 cursor-pointer"
                onClick={() => setDropDown(!dropDown)}
              />
              {dropDown ? (
                <DropDown
                  setDropDown={setDropDown}
                  categoriesData={categoriesData}
                />
              ) : null}
            </div>
          </div>
          {/* navitems */}
          <div className="normalFlex">
            <Navbar active={activeHeading} />
          </div>

          <div>
            <div className="normalFlex">
              <div className="relative cursor-pointer mr-4">
                <AiOutlineHeart size={30} color="rgb(255 255 255/83%)" />
                <span className="absolute right-0 top-0 bg-orange-600 rounded-full w-4 h-4 p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  0
                </span>
              </div>
              <div className="relative cursor-pointer mr-4">
                <AiOutlineShoppingCart size={30} color="rgb(255 255 255/83%)" />
                <span className="absolute right-0 top-0 bg-orange-600 rounded-full w-4 h-4 p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  1
                </span>
              </div>
              <div className="relative cursor-pointer mr-4">
                {isAuthenticated ? (
                  <Link to="/profile">
                    <img
                      className="w-[33px] h-[33px] rounded-full"
                      src={`${backend_url}${user.avatar}`}
                      alt="profile"
                    />
                  </Link>
                ) : (
                  <Link to="/login">
                    <CgProfile size={30} color="rgb(255 255 255/83%)" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
