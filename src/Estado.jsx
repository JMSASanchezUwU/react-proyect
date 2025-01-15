import React from 'react';
import useInput from './useInput';
import Efecto from './Efecto';
import { useState } from 'react';   

const Estado = () => {
  const [state, setState] = useState(5);
  const [a, handleAChange] = useInput('a');
  const [b, handleBChange] = useInput('b');
  const [c, handleCChange] = useInput('c');
  const [d, handleDChange] = useInput('d');

  console.log('Estado renderizado');

  return (
    <div>
      <h1>Clase estado</h1>
      <hr />
      <h2>{state}</h2>
      <button onClick={() => setState(state + 1)}>Incrementar</button>
      <button onClick={() => setState(state - 1)}>Decrementar</button>
     { state <=10 && <Efecto state={state} setState={setState} /> }
      <form>
        <input type="text" name='a' value={a} onChange={handleAChange} />
        <input type="text" name='b' value={b} onChange={handleBChange} />
        <input type="text" name='c' value={c} onChange={handleCChange} />
        <input type="text" name='d' value={d} onChange={handleDChange} />
      </form>
    </div>
  );
};

export default Estado;