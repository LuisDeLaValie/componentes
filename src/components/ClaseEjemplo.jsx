import React, { Component } from "react";

class ClaseEjemplo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    this.intervalo = null; // Referencia para el intervalo
  }

  componentDidMount() {
    // Lifecycle: Se llama después de que el componente es montado
    this.intervalo = setInterval(() => {
      this.setState((prevState) => (
        { contador: prevState.contador + 1 }
      ));
    }, 1000);
  }

  componentWillUnmount() {
    // Lifecycle: Se llama antes de que el componente sea desmontado
    clearInterval(this.intervalo);
  }

  render() {
    return (
      <div className="container container-clase">
        <p>Contador: {this.state.contador}</p>
      </div>
    );
  }
}

export default ClaseEjemplo;
