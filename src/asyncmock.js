const products = [
  {
    id: "1",
    name: "Picada Especial",
    price: 1800,
    category: "Especial",
    img: "https://menulions.files.wordpress.com/2013/10/picada-2.jpg?w=300&h=199",
    stock: 25,
    description: "Descripcion picada especial",
  },
  {
    id: "2",
    name: "Picada Super",
    price: 1100,
    category: "Super",
    img: "https://www.infoveloz.com/storage/17/09/15/12/widen638x1134/1563582809_1425061.jpeg",
    stock: 16,
    description: "Descripcion picada super",
  },
  {
    id: "3",
    name: "Picada Comun",
    price: 800,
    category: "Comun",
    img: "https://razaitaliana.com/wp-content/uploads/2021/09/Picadas.jpg",
    stock: 10,
    description: "Descripcion picada comun",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1500);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 1500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 1500);
  });
};
