import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        This is{" "}
        <a
          href="https://github.com/Axigy/weather-app-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-source project
        </a>{" "}
        by Axigy
      </p>
    </div>
  );
}
