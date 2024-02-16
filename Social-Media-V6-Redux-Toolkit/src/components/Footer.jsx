import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <span className="mb-3 mb-md-0 text-primary">
          © 2024 Social Media, Inc
        </span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <a href="#">
            <FaTwitter size={24} />
          </a>
        </li>
        <li className="ms-3">
          <a href="#">
            <FaInstagram size={24} />
          </a>
        </li>
        <li className="ms-3">
          <a href="#">
            <FaFacebook size={24} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
