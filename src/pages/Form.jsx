import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!name) errors.name = 'El nombre es obligatorio';
    if (!email) {
      errors.email = 'El email es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'El email no es válido';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const newUser = { name, email };
    setUsers([...users, newUser]);
    setName('');
    setEmail('');
    setErrors({});
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Ingresa tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <div className="text-danger">{errors.name}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Ingresa tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>
        <button type="submit" className="btn btn-success w-100">Enviar</button>
      </form>

      <h2 className="mt-4">Usuarios Registrados</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Form;