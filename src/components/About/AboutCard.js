import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hao Huang </span>
            from <span className="purple"> Melbourne, Australia.</span>
            <br />
            I am currently employed as a software developer at Juspay.
            <br />
            I have completed MSc (Software Engineering) at University of Melbourne and BSc (Information Technology) at Shanghai Jiao Tong University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference! Passion!"{" "}
          </p>
          <footer className="blockquote-footer">Hao</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
