import React from 'react';
import pic1 from "../images/quote1.jpeg";
import pic2 from "../images/quote2.jpeg";
import pic3 from "../images/quote3.jpeg";

export default function Innerfit() {
  return (
    <div>
      <h1>Mentalwear</h1>
      <ul>
          {/* Render each member from the `group` array */}
          <li><a href="https://www.caitlinmargaret.com/hated-appearance-10-years-how-to-overcome-anxiety-love-myself/</li>></>Appearance anxiety">Appearance anxiety</a></li>
          <li><a href="https://health.clevelandclinic.org/how-to-overcome-social-anxiety/">Social anxiety</a></li>
          <li><a href="https://www.medicalnewstoday.com/articles/dating-anxiety#speaking-with-a-doctor">Dating anxiety</a></li>
      </ul>
      <img
          className="card-img-top"
          src={pic1}
          alt="Card cap"
          style={{ width:300 }}
        />
        <img
        className="card-img-top"
        src={pic2}
        alt="Card cap"
        style={{ width:300 }}
      />
      <img
      className="card-img-top"
      src={pic3}
      alt="Card cap"
      style={{ width:300 }}
    />
    </div>

  );
}
