import {  Outlet } from "react-router-dom";

import { Cabecalho, Conteudo, Rodape } from "./componentes";
import { useAppContext } from "./hooks";

import "./App.css";

const LayoutPadrao = () => {
  const { criador } = useAppContext();


  return (
    <>
      <Cabecalho />
      <Conteudo>
        <Outlet/>
      </Conteudo>
      <Rodape criador={ criador }/>
    </>
  );
};

export { LayoutPadrao };
