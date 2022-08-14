import React from "react";
import { useLocation } from "react-router-dom";
import { quiz } from "../../Data";

export default function Gaming() {
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  };
  const test = usePathname();
  const resPath = test.slice(test.lastIndexOf("/") + 1, test.length);
  const data = quiz[resPath - 1];
  return <div>Gaming</div>;
}
