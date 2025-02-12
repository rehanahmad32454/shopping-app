import React from "react";
import { Product } from "./Product";
export const Products = ({ productData }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1250px] flex flex-wrap gap-x-5 gap-y-6 items-center justify-center relative">
        {productData.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
