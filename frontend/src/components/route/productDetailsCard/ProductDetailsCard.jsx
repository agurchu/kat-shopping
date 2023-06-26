import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineMessage, AiOutlineShoppingCart } from "react-icons/ai";
import Favourite from "../../usablePieces/Favourite";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addTocart } from "../../../redux/actions/cart";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../redux/actions/wishlist";
import { Link } from "react-router-dom";
import { backend_url } from "../../../server";
import IncrementBtn from "../../usablePieces/incrementBtn";

export default function ProductDetailsCard({ setOpen, data }) {
  const [click, setClick] = useState(false);
  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  const handleMessageSubmit = () => {};

  const addToCartHandler = (id) => {
    const isItemExists = cart && cart.find((i) => i._id === id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock < count) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: count };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
  };

  useEffect(() => {
    if (wishlist && wishlist.find((i) => i._id === data._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [wishlist]);

  const removeFromWishlistHandler = (data) => {
    setClick(!click);
    dispatch(removeFromWishlist(data));
  };

  const addToWishlistHandler = (data) => {
    setClick(!click);
    dispatch(addToWishlist(data));
  };

  return (
    <div className="bg-white">
      {data && (
        <div className="fixed z-40 bg-[#00000030] top-0 w-full h-screen left-0 normalFlex justify-center">
          <div className="bg-white relative w-[90%] h-[90vh] rounded-md mt-16 p-4 shadow-sm overflow-y-scroll lg:w-[60%] lg:h-[75vh]">
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
                <IncrementBtn count={count} />
                <div>
                  <Favourite
                    size={22}
                    style={"absolute right-2 top-5"}
                    data={data}
                    click={click}
                  />
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
