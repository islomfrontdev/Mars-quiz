import React from "react";
import "../../Styles/Contacts/contact.css";
import { AiFillPhone, AiFillMail, AiOutlineUser } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
export default function Contacts() {
  return (
    <div className="contactWrapper">
      <h1 className="contactsTitle">Have Some Question?</h1>
      <div className="contactFlex">
        <div>
          <div>
            <img
              src="https://www.primeit.org/wp-content/uploads/2021/10/content-image-2.png"
              width={300}
            />
            <h2 className="phonesBox">Get in touch</h2>
            <div className="line"></div>
          </div>
          <div className="flex">
            <button className="btnPhones">
              <AiFillPhone color="#9D5EE4" />
            </button>
            <a target={"_blank"} href="tel:998787777757">
              +998787777757
            </a>
          </div>
          <div className="flex">
            <button className="btnPhones">
              <ImLocation color="#9D5EE4" />
            </button>
            <a target={"_blank"} href="https://goo.gl/maps/wHXRFpzSSnJxZvh26">
              Beruniy Street, Tinchlik station
            </a>
          </div>
          <div className="flex">
            <button className="btnPhones">
              <AiFillMail color="#9D5EE4" />
            </button>
            <a target={"_blank"} href="mailto:marsitschool@gmail.com">
              marsitschool@gmail.com
            </a>
          </div>
        </div>
        <div className="messageBox">
          <div className="messageFlex">
            <AiOutlineUser />
            <input type={"text"} placeholder="Firstname" />
          </div>
          <div className="messageFlex">
            <AiOutlineUser />
            <input type={"text"} placeholder="Lastname" />
          </div>
          <div className="messageFlex">
            <AiFillPhone />
            <input type={"text"} placeholder="Phone" />
          </div>
          <div className="messageFlex">
            <AiFillMail />
            <input type={"text"} placeholder="Email" />
          </div>
          <div className="messageFlex">
            <BsReverseLayoutTextWindowReverse />
            <textarea placeholder="Meessage" rows={6} />
          </div>
          <button className="sendBtn">Send Message</button>
        </div>
      </div>
    </div>
  );
}
