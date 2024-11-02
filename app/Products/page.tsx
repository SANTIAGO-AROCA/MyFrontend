import React from 'react';

const Products: React.FC = () => {
  const productList = [
    { id: 1, name: 'Skin', price: '10 Puntos' },
    { id: 2, name: 'Mejora salto doble', price: '15 Puntos' },
    { id: 3, name: 'Mejora velocidad', price: '20 Puntos' },
    { id: 4, name: 'Acceso Zona secreta', price: '25 Puntos' },
  ];

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px', color: 'white' }}>Productos</h1>
        <ul style={styles.productList}>
          {productList.map(product => (
            <li key={product.id} style={styles.productItem}>
              <span style={styles.productName}>{product.name}</span>
              <span style={styles.productPrice}>{product.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

const styles = {
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: 'url("https://www.ucundinamarca.edu.co/images/sedes/chia/2023/chia_15.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fondo oscuro para contraste
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    width: '300px',
  },
  productList: {
    listStyleType: 'none',
    padding: 0,
  },
  productItem: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
    color: 'white', // Color de texto blanco
  },
  productName: {
    fontWeight: 'bold',
  },
  productPrice: {
    color: 'lightgray', // Color de precio más claro
  },
};

export default Products;