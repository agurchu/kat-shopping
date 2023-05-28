import React from "react";
import { productData } from "../../../static/data";
import ProductCard from "../productCard/ProductCard";

export default function FeaturedProduct() {
  return (
    <div>
      <div className="section">
        <div className="heading">
          <h1>Featured Products</h1>
        </div>
        <div className="mainGrid">
          {productData &&
            productData.map((item, index) => (
              <ProductCard data={item} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
}
