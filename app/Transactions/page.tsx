"use client"; // Asegúrate de agregar esta línea al inicio del archivo

import React, { useState, CSSProperties } from 'react';

const Transactions: React.FC = () => {
  const products = [
    { id: 1, name: 'Skin', price: 10 },
    { id: 2, name: 'Mejora salto doble', price: 15 },
    { id: 3, name: 'Mejora velocidad', price: 20 },
    { id: 4, name: 'Acceso Zona secreta', price: 25 },
  ];

  const [transactions, setTransactions] = useState<{ id: number; description: string; amount: number }[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const handleAddTransaction = () => {
    if (selectedProduct !== null) {
      const product = products.find(prod => prod.id === selectedProduct);
      if (product) {
        const newTransaction = {
          id: transactions.length + 1,
          description: `Compra de ${product.name}`,
          amount: product.price,
        };
        setTransactions([...transactions, newTransaction]);
        setSelectedProduct(null);
      }
    } else {
      alert('Por favor, selecciona un producto.');
    }
  };

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px', color: 'white' }}>Historial de Transacciones</h1>
        <ul style={styles.transactionList}>
          {transactions.map(transaction => (
            <li key={transaction.id} style={styles.transactionItem}>
              <span style={styles.transactionDescription}>{transaction.description}</span>
              <span style={styles.transactionAmount}>${transaction.amount}</span>
            </li>
          ))}
        </ul>
        <div style={styles.addTransaction}>
          <select
            value={selectedProduct || ''}
            onChange={(e) => setSelectedProduct(Number(e.target.value))}
            style={styles.select}
          >
            <option value="" disabled>Selecciona un producto</option>
            {products.map(product => (
              <option key={product.id} value={product.id}>
                {product.name} - ${product.price}
              </option>
            ))}
          </select>
          <button style={styles.button} onClick={handleAddTransaction}>
            Agregar Transacción
          </button>
        </div>
      </div>
    </main>
  );
};

const styles: { [key: string]: CSSProperties } = {
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
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    width: '400px',
  },
  transactionList: {
    listStyleType: 'none',
    padding: 0,
    marginBottom: '20px',
    maxHeight: '200px',
    overflowY: 'auto',
  },
  transactionItem: {
    marginBottom: '10px',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
  },
  transactionDescription: {
    fontWeight: 'bold',
  },
  transactionAmount: {
    fontWeight: 'bold',
  },
  addTransaction: {
    display: 'flex',
    flexDirection: 'column',
  },
  select: {
    marginBottom: '10px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    color: 'black', // Cambia el color del texto a negro
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Transactions;
