import React from "react";
import { Link } from "react-router-dom";
import Product from "../components/product";

const ProductPage = ({ match }) => {
  return (
    <>
      <div>Strona porduktu</div>
      <Product id={match.params.id} />
      <Link to="/products">Powrot do listy</Link>
    </>
  );
};

export default ProductPage;
