import React from "react";
import {
  FaTelegramPlane,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-sec">
      <div className="container">
        <h2 className="title">Bog'lanish</h2>
        <p className="subtitle">
          Savollaringiz bo'lsa yoki hamkorlik taklifingiz bo'lsa, istalgan
          vaqtda aloqaga chiqing!
        </p>

        <div className="contact-grid">
          {/* Telegram */}
          <a
            href="https://t.me/Temur_FrontEnd_Developer"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-icon tg">
              <FaTelegramPlane />
            </div>
            <h3>Telegram</h3>
            <p>@Temur_FrontEnd_Developer</p>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/temur.s1"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-icon insta">
              <FaInstagram />
            </div>
            <h3>Instagram</h3>
            <p>@temur.s1</p>
          </a>

          {/* Email */}
          <a href="mailto:tmaq77@gmail.com" className="contact-card">
            <div className="contact-icon email">
              <FaEnvelope />
            </div>
            <h3>Email</h3>
            <p>tmaq77@gmail.com</p>
          </a>

          {/* Telefon */}
          <a href="tel:+998906967999" className="contact-card">
            <div className="contact-icon phone">
              <FaPhoneAlt />
            </div>
            <h3>Telefon</h3>
            <p>+998 90 696 79 99</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
 