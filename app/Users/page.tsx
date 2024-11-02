"use client"; // Asegúrate de agregar esta línea al inicio del archivo

import React, { useState, CSSProperties } from 'react';

const Users: React.FC = () => {
  const [users, setUsers] = useState<{ id: number; name: string; email: string }[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleAddUser = () => {
    if (name && email) {
      const newUser = {
        id: users.length + 1,
        name,
        email,
      };
      setUsers([...users, newUser]);
      setName('');
      setEmail('');
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px', color: 'white' }}>Lista de Usuarios</h1>
        <ul style={styles.userList}>
          {users.map(user => (
            <li key={user.id} style={styles.userItem}>
              <span style={styles.userName}>{user.name}</span>
              <span style={styles.userEmail}>{user.email}</span>
            </li>
          ))}
        </ul>
        <div style={styles.addUser}>
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <button style={styles.button} onClick={handleAddUser}>
            Agregar Usuario
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
  userList: {
    listStyleType: 'none',
    padding: 0,
    marginBottom: '20px',
    maxHeight: '200px',
    overflowY: 'auto',
  },
  userItem: {
    marginBottom: '10px',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
  },
  userName: {
    fontWeight: 'bold',
  },
  userEmail: {
    color: 'lightgray',
  },
  addUser: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
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

export default Users;
