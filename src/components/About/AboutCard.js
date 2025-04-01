import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Covey Jorjet De Luna </span>
            from <span className="purple">Philippines.</span>
            <br />
            I work as an Embedded Software Engineer at Sercomm Philippines.
            <br />
            I specialize in developing software for embedded systems and IoT devices.
            <br />
            <br />
            Outside of work, here are a few things I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring Embedded Tech
            </li>
            <li className="about-activity">
              <ImPointRight /> Sharing Knowledge through Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Outdoor Adventures
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Innovate to create impactful solutions!"{" "}
          </p>
          <footer className="blockquote-footer">Covey Jorjet De Luna</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
