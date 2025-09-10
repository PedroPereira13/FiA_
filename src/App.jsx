import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cabecalho, Conteudo, Rodape } from "./componentes";
import { Inicial } from "./pages/Inicial";
import { Servicos } from "./pages/Servicos";
import { SobreNos } from "./pages/Sobrenos/Sobrenos";

import "./App.css";


const App = () => {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Conteudo>
        <Routes>
          <Route path="/" element={<Inicial />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/sobre" element={<SobreNos />} />
        </Routes>
      </Conteudo>
      <Rodape criador="Pedro Antonio" />
    </BrowserRouter>
  );
};

export { App };
