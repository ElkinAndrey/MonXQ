import { Navigate } from "react-router-dom";
import Monitors from './../components/Monitors/Monitors';
import Monitor from './../components/Monitor/Monitor';
import Error from './../components/Error/Error';

export const routes = [
  { path: "/", element: <Navigate to="/Monitors" />, exact: true },
  { path: "*", element: <Error />, exact: true },
  { path: "/Monitors", element: <Monitors />, exact: true },
  { path: "/Monitors/:id", element: <Monitor />, exact: true },
];