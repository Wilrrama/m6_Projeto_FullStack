import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@UserTOKEN");
    const userString = localStorage.getItem("@USER");
    const user = userString ? JSON.parse(userString) : null;
    if (!token) {
      setLoading(false);
      localStorage.removeItem("@USER");
      navigate("");
      return;
    }
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    setUser(user);
    navigate("dashboard");
    setLoading(false);
  }, []);

  const userLogin = async (formData) => {
    try {
      const response = await api.post("/login", formData);
      const { token } = response.data;
      console.log(response);

      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      const getUsersRes = await api.get("/users");
      console.log(getUsersRes);
      const loggedUser = getUsersRes.data.filter(
        (elt) => elt.email === formData.email
      )[0];
      console.log(loggedUser);

      localStorage.setItem("@UserTOKEN", token);
      localStorage.setItem("@USER", JSON.stringify(loggedUser));
      setUser(loggedUser);

      navigate("dashboard");
      toast.success("Usuário Aceito", { autoClose: 500 });
    } catch (error) {
      console.log(error);
      toast.error("Email ou senha inválidos", { autoClose: 500 });
    }
  };

  const userRegister = async (formData) => {
    try {
      await api.post("/users", formData);
      navigate("");
      toast.success("Usuário Cadastrado", { autoClose: 500 });
    } catch (error) {
      toast.error("Email ou Telefone já Existente", { autoClose: 500 });
      console.log(error);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@UserTOKEN");
    localStorage.removeItem("@USER");
    toast.success("Saindo do Sistema", { autoClose: 500 });
    navigate("");
  };

  const userDelete = async (id) => {
    try {
      const token = localStorage.getItem("@UserTOKEN");

      if (!token) {
        console.error("Token não encontrado. Usuário não autenticado.");
        return;
      }

      await api.delete(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.removeItem("@UserTOKEN");
      localStorage.removeItem("@USER");
      toast.success("Usuário Deletado do Sistema", { autoClose: 500 });
      navigate("");
    } catch (error) {
      toast.error("Algo deu Errado", { autoClose: 500 });
      console.error("Erro ao excluir o usuário:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userLogin,
        loading,
        userLogout,
        userRegister,
        user,
        userDelete,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
