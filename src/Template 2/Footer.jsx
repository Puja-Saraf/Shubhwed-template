import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="details ft">
        IIIT Allahabad Jhalwa, Uttar Pradesh 211012
        <br />
        Ananya: +91 8922068512
        <br />
        Sneha: +91 9462572921
        <br />
        info@shubhwed.com
      </div>
      <div className="ft">
          <p className="fot">Support</p>
          <ul className="fot-link">
              <li><a href="./">Product Help</a></li>
              <li><a href="./">Learn & Care</a></li>
              <li><a href="./">Partner</a></li>
              <li><a href="./">Community</a></li>
          </ul>
      </div>
      <div className="ft">
          <p className="fot">Company</p>
          <ul className="fot-link">
              <li><a href="./">About Us</a></li>
              <li><a href="./">Careers</a></li>
              <li><a href="./">News & Press</a></li>
              <li><a href="./">Investor Relation</a></li>
          </ul>
      </div>
    </div>
  );
}
