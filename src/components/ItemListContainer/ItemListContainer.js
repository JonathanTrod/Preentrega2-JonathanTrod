import { useState, useEffect } from "react";
import { getProducts } from "../../asyncmock";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
      {products.map((prod) => {
        return (
          <div>
            <h3>{prod.name}</h3>
            <buttom>ver detalle</buttom>
          </div>
        );
      })}
    </div>
  );
};

export default ItemListContainer;
