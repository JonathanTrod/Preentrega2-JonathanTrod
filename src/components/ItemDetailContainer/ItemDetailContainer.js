import { useState, useEffect } from "react";
import { getProductsById } from "../../asyncmock";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductsById("2")
      .then((res) => {
        setProduct(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1>Detalle del producto</h1>
      <div>
        <h2>{product.name}</h2>
        <img src={product.img} alt={product.name} />
        <p>Precio: ${product.price}</p>
        <p>Stock: {product.stock}</p>
        <p>Descripcion: {product.description}</p>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
