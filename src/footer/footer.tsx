import React, { useState, useEffect } from "react";
import './footer.css';

const Footer: React.FC = () => {

    return (
        <footer className="footer">
          <div className="footer-border">
            <div className="footer-content">
              <h2 className="footer-heading">
                Like what you see? Reach out <a href="mailto:d.evstigneev99@yandex.ru" className="footer-email">via email</a> to collaborate!
              </h2>
              <p className="footer-name">Dmitry Evstigneev</p>
              <p className="footer-rights">© 2024 | All rights reserved</p>
            </div>
          </div>
        </footer>
      );
    };

export default Footer;