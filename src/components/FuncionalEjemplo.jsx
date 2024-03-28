import React, { useState, useEffect, useRef } from "react";

const FuncionalEjemplo = () => {
  const [contador, setContador] = useState(0); // Estado

  const intervaloRef = useRef(null); // Referencia para el intervalo

  useEffect(() => {
    // Lifecycle: Equivalente a componentDidMount y componentDidUpdate
    intervaloRef.current = setInterval(() => {
      setContador((prevContador) => prevContador + 1);
    }, 1000);

    return () => {
      // Lifecycle: Equivalente a componentWillUnmount
      clearInterval(intervaloRef.current);
    };
  }, []); // El segundo argumento [] indica que useEffect se ejecuta solo una vez

  return (
    <div className="container container-funcional">
      <p>Contador: {contador}</p>
    </div>
  );
};

export default FuncionalEjemplo;
