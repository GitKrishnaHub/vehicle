import React from "react";
import { Route, Routes } from "react-router-dom";
import { navData } from "../components/navbar/NavData";

const Content = () => {
  return (
    <Routes>
      {navData?.map((item) => (
        <Route path={item.key} element={item.component} key={item.key}/>
      ))}
    </Routes>
  );
};

export default Content;
