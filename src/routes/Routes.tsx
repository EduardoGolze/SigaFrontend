import { RouteObject } from "react-router-dom";
import Index from "../pages/Index";
import Home from "../pages/Home";
import Disciplinas from "../pages/Disciplinas";
import Boletim from "../pages/Boletim";
import Jogo from "../pages/Jogo";
import Biblioteca from "../pages/Biblioteca";
import Logout from "../pages/Logout";
import Conta from "../pages/Conta";
import "../styles/main.scss";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/conta",
    element: <Conta />,
  },
  {
    path: "/biblioteca",
    element: <Biblioteca />,
  },
  {
    path: "/disciplinas",
    element: <Disciplinas />,
  },
  {
    path: "/boletim",
    element: <Boletim />,
  },
  {
    path: "/jogo",
    element: <Jogo />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
];
