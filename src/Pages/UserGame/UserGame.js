import React from "react";
import { useState } from "react";
import "../../Styles/UserGame/userGame.css";
export default function UserGame() {
  const [userId, setUserid] = useState("");
  const enter = () => {
    console.log(userId);
  };
  return (
    <div>
      <div className="homeWrapper">
        <div className="usenameBox">
          <input
            placeholder="username"
            onChange={(e) => setUserid(e.target.value)}
          />
          <button onClick={() => enter()}>Let's Go</button>
        </div>
      </div>
    </div>
  );
}
