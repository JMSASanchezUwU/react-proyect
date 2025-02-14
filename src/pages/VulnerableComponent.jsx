// VulnerableComponent.jsx
import React, { useState, useEffect } from 'react';

// Vulnerabilidad 1: Uso inseguro de eval() sin sanitización
function insecureEval(input) {
  // ¡Peligroso! Evalúa cualquier cadena sin validar la entrada.
  return eval(input);
}

// Vulnerabilidad 2: Uso de dangerouslySetInnerHTML sin sanitizar el contenido
function InsecureHTML({ htmlContent }) {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

// Vulnerabilidad 3: Exposición de credenciales en el código fuente
const API_KEY = "12345-SECRET-API-KEY"; // Nunca exponer claves o contraseñas en el código

// Vulnerabilidad 4: Almacenamiento de datos sensibles en localStorage sin encriptación
function storeSensitiveData(data) {
  localStorage.setItem('sensitiveData', data);
}

// Vulnerabilidad 5: Inclusión de script externo inseguro (HTTP en lugar de HTTPS)
function loadExternalScript() {
  const script = document.createElement('script');
  script.src = "http://insecure.example.com/malicious.js";
  document.body.appendChild(script);
}

// Vulnerabilidad 6: Uso de un algoritmo de hashing inseguro (simulado, MD5 o similar)
function insecureHash(password) {
  // Este hashing es meramente ilustrativo y no es seguro para contraseñas reales
  let hash = 0;
  for (let i = 0; i < password.length; i++) {
    hash = (hash << 5) - hash + password.charCodeAt(i);
    hash |= 0; // Convertir a entero
  }
  return hash;
}

// Vulnerabilidad 7: Comentarios que exponen datos sensibles
// Nota: Usuario: admin, Contraseña: admin123

// Vulnerabilidad 8: Función administrativa expuesta sin control de acceso
function adminFunction() {
  // Esta función debería estar protegida, pero se expone a cualquier usuario
  alert("Función administrativa ejecutada sin control de acceso");
}

// Vulnerabilidad 9: Uso de fetch sin validar la fuente o la respuesta
function insecureFetch(url) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      console.log("Datos recibidos:", data);
    });
}

// Vulnerabilidad 10: Exposición de datos sensibles a través de logs
function logSensitiveData(data) {
  console.log("Datos sensibles:", data);
}

const VulnerableComponent = () => {
  const [result, setResult] = useState(null);
  const [htmlContent, setHtmlContent] = useState("<p>Contenido inicial</p>");
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    // Carga de script externo inseguro al montar el componente
    loadExternalScript();
  }, []);

  const handleEval = () => {
    // Vulnerabilidad 1: Ejecuta código ingresado sin sanitización
    const res = insecureEval(userInput);
    setResult(res);
  };

  const handleStoreData = () => {
    // Vulnerabilidad 4: Almacena datos sensibles sin protección
    storeSensitiveData("Datos MUY sensibles");
  };

  const handleHash = () => {
    // Vulnerabilidad 6: Usa un hash inseguro para procesar contraseñas
    const hash = insecureHash(userInput);
    setResult(hash);
  };

  const handleAdmin = () => {
    // Vulnerabilidad 8: Ejecuta función administrativa sin control
    adminFunction();
  };

  const handleFetch = () => {
    // Vulnerabilidad 9: Realiza un fetch sin validar la fuente
    insecureFetch("http://insecure-api.example.com/data");
  };

  const handleLog = () => {
    // Vulnerabilidad 10: Loguea información sensible en la consola
    logSensitiveData("Información confidencial");
  };

  return (
    <div>
      <h1>Componente con Vulnerabilidades de Prueba</h1>

      <div>
        <h2>1. Eval Inseguro</h2>
        <input 
          type="text" 
          value={userInput} 
          onChange={(e) => setUserInput(e.target.value)} 
          placeholder="Ingresa una expresión, ej: 2+2"
        />
        <button onClick={handleEval}>Ejecutar eval()</button>
      </div>

      <div>
        <h2>2. Inyección de HTML Inseguro</h2>
        <button onClick={() => setHtmlContent("<script>alert('XSS');</script>")}>
          Inyectar HTML Inseguro
        </button>
        <InsecureHTML htmlContent={htmlContent} />
      </div>

      <div>
        <h2>3. Hash Inseguro</h2>
        <button onClick={handleHash}>Generar Hash Inseguro</button>
      </div>

      <div>
        <h2>4. Función Administrativa sin Control</h2>
        <button onClick={handleAdmin}>Ejecutar Función Admin</button>
      </div>

      <div>
        <h2>5. Fetch Inseguro</h2>
        <button onClick={handleFetch}>Realizar Fetch Inseguro</button>
      </div>

      <div>
        <h2>6. Log de Datos Sensibles</h2>
        <button onClick={handleLog}>Loguear Datos Sensibles</button>
      </div>

      <div>
        <h2>7. Almacenamiento Inseguro</h2>
        <button onClick={handleStoreData}>Guardar Datos Sensibles en localStorage</button>
      </div>

      {result !== null && <p>Resultado: {result}</p>}
    </div>
  );
};

export default VulnerableComponent;
