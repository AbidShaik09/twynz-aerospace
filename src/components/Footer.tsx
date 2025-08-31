import React from "react";

const Footer: React.FC = () => {
  const quickLinks = ["Home", "About", "MED Services", "Blogs"];
  const aboutLinks = ["Company Info", "Investor Relations", "Careers"];
  const siteInfoLinks = [
    "Legal",
    "Privacy Policy",
    "Cookies Settings",
    "Terms of Use",
    "Trademarks",
    "Trust Center",
  ];
  const contactLinks = ["FAQ", "Contact Us", "Newsletter"];

  const renderButtons = (items: string[]) =>
    items.map((text) => (
      <button key={text} type="button" className="footer-button">
        {text}
      </button>
    ));

  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h4>Quick Links</h4>
        {renderButtons(quickLinks)}
      </div>
      <div className="footer-section">
        <h4>About</h4>
        {renderButtons(aboutLinks)}
      </div>
      <div className="footer-section">
        <h4>Site Info</h4>
        {renderButtons(siteInfoLinks)}
      </div>
      <div className="footer-section">
        <h4>Contact</h4>
        {renderButtons(contactLinks)}
      </div>
    </footer>
  );
};

export default Footer;
