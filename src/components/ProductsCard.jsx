// export const ProductCard = ({ title, thumbnail }) => {
//   return (

//   );
// };

import React from "react";

const ProductsCard = ({ title, thumbnail }) => {
  return (
    <div className="card" key={title}>
      <img src={thumbnail} alt="" />
      <p>{title}</p>
    </div>
  );
};

export default ProductsCard;
