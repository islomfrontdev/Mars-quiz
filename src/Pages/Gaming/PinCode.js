import React from "react";
import { useLocation } from "react-router-dom";
import { quiz } from "../../Data";
import "../../Styles/Gaming/gaming.css";
import { AiOutlineUser } from "react-icons/ai";

export default function PinCode() {
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  };
  const test = usePathname();
  const resPath = test.slice(test.lastIndexOf("/") + 1, test.length);
  const data = quiz[resPath - 1];
  return (
    <div className="gameWrapper">
      <div className="gameHeader">
        <div className="pinBox">
          <h2>Game Pin</h2>
          <h1>{Math.floor(Math.random() * (1000 - 500 + 1)) + 500}</h1>
        </div>
      </div>
      <div className="gameBody">
        <div className="gameBodyBox1"></div>
        <div className="gameBodyBox2"></div>
        <div className="userNumberox">
          <AiOutlineUser size={30} color={"#fff"} />
          <p>5</p>
        </div>
        <div>
          <h1>Mars Quiz</h1>
          <div className="flex">
            <div className="userBox">
              <h3>Islom</h3>
            </div>
            <div className="userBox">
              <h3>Kamron</h3>
            </div>
            <div className="userBox">
              <h3>Oybek</h3>
            </div>
            <div className="userBox">
              <h3>Bobur</h3>
            </div>
            <div className="userBox">
              <h3>Jahongir</h3>
            </div>
          </div>
        </div>
        <div>
          <button className="startGameBtn">Start</button>
        </div>
      </div>
    </div>
  );
}
