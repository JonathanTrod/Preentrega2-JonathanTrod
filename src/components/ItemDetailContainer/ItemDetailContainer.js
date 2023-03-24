import { useState, useEffect } from "react";
import { getProductsById } from "../../asyncmock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { itemId } = useParams();

  useEffect(() => {
    getProductsById(itemId)
      .then((res) => {
        setProduct(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [itemId]);
  return (
    <div>
      <h1>Detalle del producto</h1>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
