import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, img, price, stock, description }) => {
  const handleOnAdd = (quantity) => {
    const objProduct = {
      id,
      name,
      price,
      quantity,
    };
    console.log(objProduct);
  };
  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt={name} />
      <p>Precio: ${price}</p>
      <p>Stock: {stock}</p>
      <p>Descripcion: {description}</p>
      <ItemCount stock={stock} onAdd={handleOnAdd} />
    </div>
  );
};

export default ItemDetail;
