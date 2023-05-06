import "./Footer.css";
import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url(/img/footer.png)" }}
    >
      <div className="redes">
        <a
          href="https://github.com/janetmu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/github.png" alt="gitbub" />
        </a>
        <a
          href="http://www.linkedin.com/in/janet-marulanda-usma-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/linkedin.png" alt="linked" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=+573193990912&text=Hola%20Janet,%20acabo%20de%20ver%20tu%20proyecto%20Mi%20Organizaci%C3%B3n,"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/whatsapp.png" alt="whatsapp" />
        </a>
      </div>
      <img src="/img/Logo.png" alt="org" />
      <strong> Made with <AiFillHeart color="red" />  by Janet M.U </strong>
    </footer>
  );
};

export default Footer;
