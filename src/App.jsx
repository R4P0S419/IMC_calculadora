import React, { useState, useEffect } from "react";
import TabelaIMC from "./componentes/Tabela/Index";
import Formulario from "./componentes/Formulario/index"; // Adicionei a importação do componente Formulario

function App() {
  return (
    <>
      <div className="divBlock">
        <section id="result">
        <Formulario />
          <section id="reference-table">
            <TabelaIMC />
          </section>
        </section>
      </div>
    </>
  );
}

export default App;
