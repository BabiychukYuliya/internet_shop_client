import { $host, $authHost } from "./index";
import { jwtDecode } from "jwt-decode";

export const register = async (email, password) => {
  const { data } = await $host.post("/api/user/register", {
    email,
    password,
    role: "ADMIN",
  });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

export const login = async (email, password) => {
  const { data } = await $host.post("/api/user/login", {
    email,
    password,
  });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

export const check = async () => {
  const { data } = await $authHost.get("/api/user/auth");
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};
