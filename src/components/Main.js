import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Dashboard from "./Main/Dashboard";

export default function Main() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
