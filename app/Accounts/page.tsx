"use client"; // Asegúrate de agregar esta línea al inicio del archivo

import React, { useState, CSSProperties } from 'react';

const Accounts: React.FC = () => {
  const accountTypes = [
    { id: 1, name: 'Comprador', description: 'Compra productos en el marketplace.' },
    { id: 2, name: 'Vendedor', description: 'Vende productos en el marketplace.' },
    { id: 3, name: 'Admin', description: 'Administra el marketplace.' },
  ];

  const [selectedAccount, setSelectedAccount] = useState<number | null>(null);

  const handleAccountSelection = (id: number) => {
    setSelectedAccount(id === selectedAccount ? null : id);
  };

  const handleConfirm = () => {
    if (selectedAccount !== null) {
      alert(`Cuenta seleccionada: ${accountTypes.find(acc => acc.id === selectedAccount)?.name}`);
      // Aquí puedes agregar la lógica adicional que necesites para continuar
    } else {
      alert('Por favor, selecciona un tipo de cuenta.');
    }
  };

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px', color: 'white' }}>Seleccionar Tipo de Cuenta</h1>
        <ul style={styles.accountList}>
          {accountTypes.map(account => (
            <li key={account.id} style={styles.accountItem}>
              <label style={styles.label}>
                <input
                  type="radio"
                  checked={selectedAccount === account.id}
                  onChange={() => handleAccountSelection(account.id)}
                />
                <span style={styles.accountName}>{account.name}</span>
                <span style={styles.accountDescription}>{account.description}</span>
              </label>
            </li>
          ))}
        </ul>
        <div style={styles.selectedAccount}>
          {selectedAccount !== null && (
            <strong style={{ color: 'white' }}>
              Cuenta Seleccionada: {accountTypes.find(acc => acc.id === selectedAccount)?.name}
            </strong>
          )}
        </div>
        <button style={styles.button} onClick={handleConfirm} disabled={selectedAccount === null}>
          Confirmar
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
  accountList: {
    listStyleType: 'none',
    padding: 0,
    marginBottom: '20px',
  },
  accountItem: {
    marginBottom: '10px',
    color: 'white',
  },
  label: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  accountName: {
    fontWeight: 'bold',
  },
  accountDescription: {
    color: 'lightgray',
    fontSize: 'small',
  },
  selectedAccount: {
    marginTop: '20px',
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
    marginTop: '20px',
  },
};

export default Accounts;
