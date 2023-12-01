import { Route, Routes } from "react-router-dom";
import { Login } from "../assets/pages/login";
import { Register } from "../assets/pages/register";
import { Dashboard } from "../assets/pages/dashboard";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
