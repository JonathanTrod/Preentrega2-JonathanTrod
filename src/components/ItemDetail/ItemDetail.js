import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ name, price, img, description }) => {
  return (
    <>
      <div style={{ background: "pink", margin: 10 }}>
        <h2>{name}</h2>
        <img src={img} alt={name} style={{ width: 100 }} />
        <h3>precio: {price}</h3>
        <p>descripcion: {description}</p>
      </div>
      <ItemCount />
    </>
  );
};

export default ItemDetail;
