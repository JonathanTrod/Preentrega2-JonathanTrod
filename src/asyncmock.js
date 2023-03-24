const products = [
  {
    id: "1",
    name: "picada especial",
    price: 1000,
    category: "tablas",
    img: "img/picada4.jpg",
    stock: 22,
    description: "Descripcion de picada",
  },
  {
    id: "2",
    name: "picada especial",
    price: 1000,
    category: "tablas",
    img: "img/picada5.jpg",
    stock: 25,
    description: "Descripcion de picada",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 500);
  });
};

export const getProductsById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};
