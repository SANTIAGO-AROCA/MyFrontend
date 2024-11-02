import React from 'react';

const Login: React.FC = () => {
  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px', color: 'white' }}>UNIVERSIDAD DE CUNDINAMARCA</h1>
        <h1 style={{ textAlign: 'center', marginBottom: '20px', color: 'white' }}>Inicio de Sesión</h1>
        <form>
          <input type="text" placeholder="Nombre de usuario" required style={styles.input} />
          <input type="password" placeholder="Contraseña" required style={styles.input} />
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
