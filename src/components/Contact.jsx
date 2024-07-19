import "../styles/Contact.css";
import parse from "html-react-parser";

import { contactSection } from "../data/ContactSection";

function Contact() {
  return (
    <div id="contact">
      <div className="wrapper">
        <div className="footer">
          {contactSection.map((item, index) => {
            return (
              <div key={index} className="footer-section">
                {parse(item.content)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Contact;
