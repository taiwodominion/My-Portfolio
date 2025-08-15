import "../css/Footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p className="footer-text">© {new Date().getFullYear()} <a href="#">Taiwo Dominion</a>. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;