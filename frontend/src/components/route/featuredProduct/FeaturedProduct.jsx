import React from "react";

import ProductCard from "../productCard/ProductCard";
import { useSelector } from "react-redux";

export default function FeaturedProduct() {
  const { allProducts } = useSelector((state) => state.products);
  return (
    <div>
      <div className="section">
        <div className="heading">
          <h1>Featured Products</h1>
        </div>
        <div className="mainGrid">
          {allProducts && allProducts.length !== 0 && (
            <>
              {allProducts &&
                allProducts.map((item, index) => (
                  <ProductCard data={item} key={index} />
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
