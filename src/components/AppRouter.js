import React, { useContext } from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/consts";
import { Context } from "..";

const AppRouter = () => {
  const { user } = useContext(Context);
  // console.log(user);
  return (
    <div>
      <Routes>
        {user.isAuth === true &&
          authRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="/" element={<Navigate to={SHOP_ROUTE} />} />
      </Routes>
      <Outlet />
    </div>
  );
};

export default AppRouter;
