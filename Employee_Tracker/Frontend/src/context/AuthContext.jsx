// src/context/AuthContext.js
import { createContext, useReducer } from "react";
import axiosInstance from "../services/axiosInstance";
import PropTypes from "prop-types";

const initialState = {
  user: null,
  token: localStorage.getItem("token") || "",
  loading: true,
};

const AuthContext = createContext(initialState);

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
    case "SIGNUP_SUCCESS":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loading: false,
      };
    case "LOGOUT":
      localStorage.removeItem("token");
      return {
        ...state,
        user: null,
        token: "",
        loading: false,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async (email, password) => {
    const res = await axiosInstance.post("/auth/login", { email, password });
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  };

  const signup = async (email, name, password) => {
    const res = await axiosInstance.post("/auth/register", {
      email,
      name,
      password,
    });
    dispatch({ type: "SIGNUP_SUCCESS", payload: res.data });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
