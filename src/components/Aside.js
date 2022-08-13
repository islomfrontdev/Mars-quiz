import React from "react";
import "../Styles/AsideStyles/aside.css";
import { FaHtml5 } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { MdDashboard, MdQuiz } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";
import Mars from "../Images/Mars.png";
export default function Aside() {
  return (
    <div className="asideWrapper">
      <div className="logoBox">
        <NavLink className="logoLink" to={"/"}>
          {/* <FaHtml5 /> Islomfrontdev */}
          <img className="logo" src={Mars} />
        </NavLink>
      </div>
      <button className="createQuizBtn">
        <span>
          <AiOutlinePlus color="#fff" />
        </span>
        Create quiz
      </button>
      <nav>
        <ul>
          <li>
            <MdDashboard size={24} /> <Link to={"dashboard"}>Dashboard</Link>
          </li>
          <li>
            <MdQuiz size={24} /> <Link to={"quiz"}>Quiz Tets</Link>
          </li>
          <li>
            <FiUsers size={24} /> <Link to={"users"}> Top Users </Link>
          </li>
          <li>
            <AiOutlineInfoCircle size={24} /> <Link to={"about"}>About </Link>
          </li>
          <li>
            <BsFillTelephoneFill size={24} />{" "}
            <Link to={"contacts"}>Contacts</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
