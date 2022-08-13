import React, { useEffect, useState } from "react";
import { quiz } from "../../Data";
import { BiSearch } from "react-icons/bi";
import { BsFillPlayCircleFill } from "react-icons/bs";
import "../../Styles/Quiz/Quiz.css";
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
          <div key={q.title} className="quizBox">
            {q.test &&
              q.test.map((t) => (
                <div key={t.title} className="quizCard">
                  <img src={t.img} />
                  <div className="quizCardPlayBox">
                    <h4>{t.title}</h4>
                    <button>
                      <BsFillPlayCircleFill />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
