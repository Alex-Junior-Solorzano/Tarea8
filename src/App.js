import React, { Component } from 'react';
import './index.css';

import Componente from './Componente.jsx';

class App extends Component {
  state = { 
    mostrar: true
  }

  render() {
    const { mostrar } = this.state

    return (
      <div>
        <h3>Ejemplo de componentDidMount</h3>
        <button
          onClick={() => this.setState({ mostrar: !this.state.mostrar })}>
          {`${mostrar ? 'Ocultar' : 'Mostrar'} el componente`}
        </button>
        {mostrar && <Componente />}
      </div>
    );
  }
}

export default App
