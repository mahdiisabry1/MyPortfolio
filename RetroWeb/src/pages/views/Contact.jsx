import Navbar from "../../components/Navbar/Navbar";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="contact-header">
          <h2>Contact Us</h2>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Name" className="input-field" />
          <input type="email" placeholder="Email" className="input-field" />
          <textarea placeholder="Message" className="message-field"></textarea>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
