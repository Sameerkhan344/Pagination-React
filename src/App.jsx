import "./App.css";
import React, { useEffect, useState } from "react";
import { useProductsData } from "./hooks/useProductsData";
import Pagination from "./components/Pagination";

import { PAGE_SIZE } from "./Constants"; // FIXED: Added curly braces for named export
import ProductsCard from "./components/ProductsCard";

export default function App() {
  const { currentPage, setCurrentPage, products, setproducts, loading } =
    useProductsData();
  console.log(products);
  const totalPage = products.length;
  const noOfPages = Math.ceil(totalPage / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  return !products.length ? (
    <h1 className="">No Produts Found</h1>
  ) : (
    <div className="App">
      <h1>Pagination</h1>
      <Pagination currentPage={currentPage} noOfPages={noOfPages} setCurrentPage={setCurrentPage} />
      <div className="product-container">
        {products.slice(start, end).map((p) => {
          return (
            <ProductsCard key={p.id} title={p.title} thumbnail={p.thumbnail} />
          );
        })}
      </div>
    </div>
  );
}
