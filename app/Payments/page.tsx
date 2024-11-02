"use client"; // Agregar esta línea al inicio del archivo

import React, { useState, CSSProperties } from 'react';

const Payments: React.FC = () => {
  const items = [
    { id: 1, name: 'Skin', points: 10 },
    { id: 2, name: 'Mejora Salto Doble', points: 15 },
    { id: 3, name: 'Mejora Velocidad', points: 20 },
    { id: 4, name: 'Acceso Zona Secreta', points: 25 },
  ];

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const toggleSelection = (id: number) => {
    setSelectedItems(prevSelected =>
      prevSelected.includes(id)
        ? prevSelected.filter(itemId => itemId !== id)
        : [...prevSelected, id]
    );
  };

  const totalPoints = selectedItems.reduce((total, itemId) => {
    const item = items.find(item => item.id === itemId);
    return item ? total + item.points : total;
  }, 0);

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px', color: 'white' }}>Resumen de Pagos</h1>
        <ul style={styles.itemList}>
          {items.map(item => (
            <li key={item.id} style={styles.item}>
              <label style={styles.label}>
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => toggleSelection(item.id)}
                />
                <span style={styles.itemName}>{item.name}</span>
                <span style={styles.itemPoints}>{`${item.points} Puntos`}</span>
              </label>
            </li>
          ))}
        </ul>
        <div style={styles.total}>
          <strong style={{ color: 'white' }}>Total: {totalPoints} Puntos</strong>
        </div>
        <button style={styles.button} disabled={totalPoints === 0}>
          Realizar Pago
        </button>
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
    width: '300px',
  },
  itemList: {
    listStyleType: 'none',
    padding: 0,
    marginBottom: '20px',
  },
  item: {
    marginBottom: '10px',
    color: 'white',
  },
  label: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  itemName: {
    fontWeight: 'bold',
  },
  itemPoints: {
    color: 'lightgray',
  },
  total: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Payments;
