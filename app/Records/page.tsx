"use client";

//import { error } from 'console';
import { useRouter } from 'next/navigation';
import React, { useState } from "react";

const Register: React.FC = () => {
  const router = useRouter();
import React, { useState } from "react";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    city: "",
    addres: "",
    phone: "",
    acceptTerms: false,
    stateId: "", // Tipo de cuenta
    address: "",
    phone: "",
    acceptTerms: false,
    accountType: "", // Tipo de cuenta
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const validateFields = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio";
    if (!formData.email.trim()) newErrors.email = "El correo es obligatorio";
    if (!formData.password.trim()) newErrors.password = "La contraseña es obligatoria";
    if (!formData.city.trim()) newErrors.city = "La ciudad es obligatoria";
    if (!formData.addres.trim()) newErrors.address = "La dirección es obligatoria";
    if (!formData.phone.trim()) newErrors.phone = "El teléfono es obligatorio";
    if (!formData.acceptTerms) newErrors.acceptTerms = "Debes aceptar el tratamiento de datos";
    if (!formData.stateId) newErrors.accountType = "Debes seleccionar un tipo de cuenta";
    if (!formData.address.trim()) newErrors.address = "La dirección es obligatoria";
    if (!formData.phone.trim()) newErrors.phone = "El teléfono es obligatorio";
    if (!formData.acceptTerms) newErrors.acceptTerms = "Debes aceptar el tratamiento de datos";
    if (!formData.accountType) newErrors.accountType = "Debes seleccionar un tipo de cuenta";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateFields()) return;

    try {
      setErrors({});

      const formApi = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        city: formData.city,
        address: formData.city,
        phone: formData.phone,
        rolId: 1,
        userId: formData.stateId === "Cliente" ? 2 : 3,
        isDeleted: false
      };

      const response = await fetch("http://www.webkazer.somee.com/api/User", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formApi),
      });

      console.log(formApi)

      if (!response.ok) {
        const errorData = await response.json();

        console.error("Error del servidor:", errorData);
        setErrors({ general: errorData.message || "Error al registrar el usuario" });
        return;
      }

      alert("Registro exitoso. ¡Bienvenido!");
      router.push("/Login");
    } catch (error) {
      console.log("error:",error)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateFields()) {
      console.log("Formulario enviado:", formData);
      alert("Registro exitoso");
      // Aquí puedes agregar la lógica para enviar los datos al servidor
    }
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h1 style={headerStyle}>Registro de Usuarios</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.name && <p style={errorStyle}>{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.email && <p style={errorStyle}>{errors.email}</p>}

          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.password && <p style={errorStyle}>{errors.password}</p>}

          <input
            type="text"
            name="city"
            placeholder="Ciudad"
            value={formData.city}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.city && <p style={errorStyle}>{errors.city}</p>}

          <input
            type="text"
            name="addres"
            placeholder="Dirección"
            value={formData.addres}
            name="address"
            placeholder="Dirección"
            value={formData.address}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.address && <p style={errorStyle}>{errors.address}</p>}

          <input
            type="text"
            name="phone"
            placeholder="Teléfono"
            value={formData.phone}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.phone && <p style={errorStyle}>{errors.phone}</p>}

          {/* Tipo de cuenta */}
          <div style={accountTypeStyle}>
            <label>
              <input
                type="radio"
                name="stateId"
                value="Cliente"
                checked={formData.stateId === "Cliente"}
                name="accountType"
                value="Cliente"
                checked={formData.accountType === "Cliente"}
                onChange={handleChange}
              />
              Cliente
            </label>
            <label>
              <input
                type="radio"
                name="stateId"
                value="Vendedor"
                checked={formData.stateId === "Vendedor"}
                name="accountType"
                value="Vendedor"
                checked={formData.accountType === "Vendedor"}
                onChange={handleChange}
              />
              Vendedor
            </label>
          </div>
          {errors.accountType && <p style={errorStyle}>{errors.accountType}</p>}

          {/* Tratamiento de datos */}
          <div style={termsStyle}>
            <input
              type="checkbox"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
            />
            <label htmlFor="acceptTerms" style={termsLabelStyle}>
              Acepto los términos del <strong>Tratamiento de Datos</strong>: no nos hacemos responsables
              por la información suministrada por el usuario. Los datos recolectados serán tratados conforme a
              la legislación vigente.
            </label>
          </div>
          {errors.acceptTerms && <p style={errorStyle}>{errors.acceptTerms}</p>}

          <button type="submit" style={buttonStyle}>
            Registrar
          </button>

          {typeof errors === "string" && <p style={errorStyle}>{errors}</p>}

        </form>
      </div>
    </div>
  );
};

// Estilos definidos
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundImage: 'url("https://www.ucundinamarca.edu.co/images/sedes/chia/2023/chia_15.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const formContainerStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  maxWidth: "400px",
  width: "100%",
};

const headerStyle = {
  textAlign: "center" as const,
  marginBottom: "20px",
  color: "#333",
  fontSize: "24px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  fontSize: "16px",
};

const accountTypeStyle = {
  marginBottom: "15px",
  display: "flex",
  justifyContent: "space-between",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "16px",
};

const errorStyle = {
  color: "red",
  fontSize: "12px",
  marginBottom: "10px",
};

const termsStyle = {
  marginBottom: "10px",
  display: "flex",
  alignItems: "center",
};

const termsLabelStyle = {
  marginLeft: "10px",
  fontSize: "14px",
  color: "#333",
};

export default Register;
