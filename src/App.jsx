import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cabecalho, Conteudo, Rodape } from "./componentes";
import { Inicial } from "./pages/Inicial";
import { Servicos } from "./pages/Servicos";
import { Sobrenos } from "./pages/Sobrenos";
import { Cadastro } from "./pages/Cadastro";
import { Login } from "./pages/Login";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Conteudo>
        <Routes>
          <Route path="/" element={<Inicial />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/sobrenos" element={<Sobrenos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </Conteudo>
      <Rodape criador="Pedro Antonio" />
    </BrowserRouter>
  );
};

export default App;
