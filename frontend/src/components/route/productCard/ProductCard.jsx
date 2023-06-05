import React, { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Favourite from "../../usablePieces/Favourite";
import ProductDetailsCard from "../productDetailsCard/ProductDetailsCard";
import { useDispatch, useSelector } from "react-redux";
import Ratings from "../../products/Ratings";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../redux/actions/wishlist";
import { backend_url } from "../../../server";
import { toast } from "react-toastify";
import { addTocart } from "../../../redux/actions/cart";

export default function ProductCart({ data, isEvent }) {
  const [open, setOpen] = useState(false);
  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (wishlist && wishlist.find((i) => i._id === data._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [wishlist]);

  const handleRemoveFromWishlist = (data) => {
    setClick(!click);
    dispatch(removeFromWishlist(data));
  };

  const handleAddToWishlist = (data) => {
    setClick(!click);
    dispatch(addToWishlist(data));
  };

  const handleAddToCart = (id) => {
    const isItemExists = cart && cart.find((i) => i._id === id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock < 1) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: 1 };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
  };

  return (
    <>
      <div className="w-full h-[370px] bg-white rounded-lg overflow-hidden shadow-sm p-3 relative cursor-pointer">
        <Link
          to={`${
            isEvent === true
              ? `/product/${data._id}?isEvent=true`
              : `/product/${data._id}`
          }`}
        >
          <img
            className="w-full h-[170px] object-contain"
            src={`${backend_url}${data.images && data.images[0]}`}
            alt=""
          />
        </Link>
        <Link to={`/shop/preview/${data?.shop._id}`}>
          <h5 className="shop_name">{data.shop.name}</h5>
        </Link>
        <Link
          to={`${
            isEvent === true
              ? `/product/${data._id}?isEvent=true`
              : `/product/${data._id}`
          }`}
        >
          <h4 className="pb-3 font-medium">
            {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
          </h4>

          <div className="flex">
            <Ratings rating={data?.ratings} />
          </div>

          <div className="py-2 normalFlex justify-between">
            <div className="flex">
              <h5 className="productDiscountPrice">
                R
                {data.originalPrice === 0
                  ? data.originalPrice
                      .toFixed(2)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  : data.discount_price
                      .toFixed(2)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </h5>
              <h4 className="price">
                {data.originalPrice
                  ? "R" +
                    data.originalPrice
                      .toFixed(2)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  : null}
              </h4>
            </div>
            <span className="font-normal text-lg text-green-500 ">
              {data.sold_out} sold
            </span>
          </div>
        </Link>
        {/* side options */}
        <div>
          <Favourite
            size={22}
            style={"absolute right-2 top-5"}
            data={data}
            click={click}
            onAddToWishlist={handleAddToWishlist}
            onRemoveFromWishlist={handleRemoveFromWishlist}
          />

          <AiOutlineEye
            onClick={() => setOpen(!open)}
            color="#333"
            size={22}
            className="cursor-pointer absolute right-2 top-14"
            title="Quick view"
          />
          <AiOutlineShoppingCart
            onClick={() => handleAddToCart(data._id)}
            color="#444"
            size={25}
            className="cursor-pointer absolute right-2 top-24"
            title="Add to cart"
          />
          {open && (
            <ProductDetailsCard open={open} setOpen={setOpen} data={data} />
          )}
        </div>
      </div>
    </>
  );
}
