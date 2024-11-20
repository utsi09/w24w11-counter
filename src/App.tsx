import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((precount) => precount + 1);
        }}
      >
        증가
      </button>
    </>
  );
}

export default App;
