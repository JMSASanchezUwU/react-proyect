import React, { useState } from 'react';

function vulnerableFunction(userInput) {
  // ¡Esta práctica es insegura!
  // Se utiliza eval sobre un input que podría ser controlado por un atacante.
  return eval(userInput);
}

const VulnerableComponent = () => {
  const [result, setResult] = useState(null);

  const handleClick = () => {
    // Simula un input inseguro; en un caso real, podría provenir de una entrada de usuario.
    const unsafeInput = "2+2"; 
    const res = vulnerableFunction(unsafeInput);
    setResult(res);
  };

  return (
    <div>
      <h1>Componente Vulnerable</h1>
      <button onClick={handleClick}>Ejecutar Código Inseguro</button>
      {result !== null && <p>Resultado: {result}</p>}
    </div>
  );
};

export default VulnerableComponent;
