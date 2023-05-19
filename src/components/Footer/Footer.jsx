import React from 'react';

function Footer() {
  return (

    <>
      <div className="footer-container">
        <section className="footer-socials">
          <p className="footer-socials-head">
            Join us on social media
          </p>
          <Link to="/">Twitter</Link>
          <div className="input-areas" />
        </section>
      </div>
      <section>
        <div className="footer-links">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/">Terms of Service</Link>
          </div>
        </div>
      </section>

    </>
  );
}

export default Footer;
