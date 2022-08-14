import React, { useEffect, useState } from "react";
import { quiz } from "../../Data";
import { BiSearch } from "react-icons/bi";
import { BsFillPlayCircleFill } from "react-icons/bs";
import "../../Styles/Quiz/Quiz.css";
import { AiFillCheckCircle, AiFillPlayCircle } from "react-icons/ai";
import { FaEllipsisV } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { NavLink } from "react-router-dom";
export default function Quiz() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(quiz);
  }, []);
  return (
    <div className="quizWrapper">
      <div className="searchBox">
        <button>
          <BiSearch />
        </button>
        <input placeholder="Search quiz" />
      </div>

      <div className="quizBoxWrapper">
        {data.map((q) => (
          <div key={q.id} className="quizBox">
            <img src={q.img} className="quizImg" />
            <div className="quizFlex">
              <div className="flex">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png" />
                <div>
                  <h3>{q.title}</h3>
                  <div className="flex">
                    <div className="flex">
                      <AiFillCheckCircle color="blue" />
                      <h6>{q.author}</h6>
                    </div>
                    <div className="flex">
                      <BiTimeFive size={12} />
                      <p className="time">{q.createTime}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="quizBtnBox">
                <NavLink to={`/pincode/${q.id}`}>
                  <button className="startBtn">
                    <AiFillPlayCircle color="blue" />
                  </button>
                </NavLink>
                <button>
                  <FaEllipsisV color="#999" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
