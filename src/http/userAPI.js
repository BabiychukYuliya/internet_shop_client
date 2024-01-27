import { $host, $authHost } from "./index";
import { jwtDecode } from "jwt-decode";

export const register = async (email, password) => {
  const { data } = await $host.post("/api/user/register", {
    email,
    password,
    role: "ADMIN",
  });
  return jwtDecode(data.token);
};

export const login = async (email, password) => {
  const { data } = await $host.post("/api/user/login", {
    email,
    password,
  });
  return jwtDecode(data.token);
};

export const check = async () => {
  const { data } = await $authHost.post("/api/user/auth");
  return jwtDecode(data.token);
};
