import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { quiz } from "../../Data";
import "../../Styles/Gaming/gaming.css";
import Grid from "@mui/material/Grid";
import { BsFillTriangleFill } from "react-icons/bs";
export default function Gaming() {
  const [order, setOrder] = useState(0);
  const [question, setQuestion] = useState([]);
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  };
  const test = usePathname();
  const resPath = test.slice(test.lastIndexOf("/") + 1, test.length);
  const data = quiz[resPath - 1];
  const next = () => {
    setOrder(order + 1);
  };
  useEffect(() => {
    setQuestion(data.test[order]);
  }, [order]);
  console.log(question.variants);
  return (
    <div className="questionWrapper">
      {order != data.test.length - 1 ? (
        <div>
          <div className="questionHeaderBox">
            <h1>{question != undefined && question.title}</h1>
          </div>

          <Container>
            <button className="nextBtn" onClick={() => next()}>
              Next
            </button>
            <img
              className="questionImg"
              src={
                question.img ||
                "https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?k=20&m=922962354&s=612x612&w=0&h=f-9tPXlFXtz9vg_-WonCXKCdBuPUevOBkp3DQ-i0xqo="
              }
            />
            <Grid container spacing={2}>
              {question.variants &&
                question.variants.map((vari) => (
                  <Grid item xs={6}>
                    <button className="answerFlex aBtn">
                      <BsFillTriangleFill />
                      <p>{vari}</p>
                    </button>
                  </Grid>
                ))}
            </Grid>
          </Container>
        </div>
      ) : (
        <div className="resultWrapper">
          <h1 className="resultTitle">Results</h1>
          <Container>
            <NavLink className="homeLink" to={"/quiz"}>
              Quiz Test
            </NavLink>
            <div className="resultsFlex">
              <div className="top2">
                <p className="result">2</p>
              </div>
              <div className="top1">
                <p className="result">1</p>
              </div>
              <div className="top3">
                <p className="result">3</p>
              </div>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
}
