const products = [
    {
      id: 1,
      name: 'Remera',
      description: 'Remera casual de algodón',
      price: 100,
      stock: 10,
    },
    {
      id: 2,
      name: 'Pantalon',
      description: 'Pantalon deportivo',
      price: 150,
      stock: 5,
    },
    
    {
        id: 3,
        name: 'Campera',
        description: 'Campera de cuero',
        price: 300,
        stock: 10,
      },
  ];
  
  export const getProductById = async (id) => {
    const product = products.find((p) => p.id === parseInt(id));
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (product) {
          resolve(product);
        } else {
          reject('No esta disponible');
        }
      }, 500);
    });
  };
  