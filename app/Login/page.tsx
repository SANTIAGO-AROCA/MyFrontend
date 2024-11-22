"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Cookies from 'js-cookie';

const Login: React.FC = () => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('pass', pass);

      const response = await fetch('https://www.webkazer.somee.com/api/User/Login', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        Cookies.set('Token', data.userTypeId);
        console.log(data)

        alert("Validación exitosa");
        router.push("/Accounts");
        
      } else if (response.status === 404) {
        alert('Incorrect username or password.');
      } else if (response.status === 400) {
        alert('Username or password cannot be empty.');
      } else {
        alert('An error has occurred.');
      }
    } catch (error) {
      alert(error);
    }
  };


  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px', color: 'white' }}>UNIVERSIDAD DE CUNDINAMARCA</h1>
        <h1 style={{ textAlign: 'center', marginBottom: '20px', color: 'white' }}>Inicio de Sesión</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Nombre de usuario" value={email} onChange={(e) => setEmail(e.target.value)} required style={styles.input} />
          <input type="password" placeholder="Contraseña" value={pass} onChange={(e) => setPass(e.target.value)} required style={styles.input} />
          <button type="submit" style={styles.button}>Iniciar Sesión</button>
        </form>
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
    backgroundColor: 'grey',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    width: '300px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    color: 'black', // Cambia el color del texto a negro
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

export default Login;
