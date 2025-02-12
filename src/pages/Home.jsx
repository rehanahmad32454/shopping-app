import React, { useEffect, useState } from "react";
import { Products } from "../components/Products";
import { Spinner } from "../components/Spinner";
export const Home = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  async function fetchProductData() {
    try {
      setLoading(true);
      const data = await fetch("https://fakestoreapi.com/products");
      const res = await data.json();
      setProductData(res);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchProductData();
  }, []);
  return (
    <div className="w-full mt-10 flex items-center justify-center">
      {loading ? (
        <Spinner />
      ) : (
        productData.length > 0 && <Products productData={productData} />
      )}
    </div>
  );
};
