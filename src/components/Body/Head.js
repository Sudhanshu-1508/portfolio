import React from "react";
import "./Head.css";
import "./Img/DP.jpeg";

function Head() {
  function clickHandler() {
    window.open(
      "https://drive.google.com/file/d/1w_DSopFUY-LfREjZgw2uJ8sj1rdN9d5L/view?usp=share_link"
    );
  }

  const img = require("./Img/DP.jpeg");

  return (
    <div className="heading">
      <p className="name">Sudhanshu Kulkarni</p>
      <br></br>
      <p className="desg">Software Developer</p>
      <p className="data">
        I am an Aspiring Full-Stack Software Engineer with a keen interest in
        building robust and user-focused applications with a strong emphasis on
        design, usability, and efficiency. Having worked with different
        technologies across the spectrum, I have found my passion in web
        development, and ever since then I have been highly focused towards
        specializing in this domain. Apart from coding, in my leisure time, I
        enjoy traveling and watching sci-fi movies!
        <img src={img} alt="Dp" className="dp"></img>
      </p>
      <p className="desg">About</p>
      <p className="data">
        During my college days, I got introduced to coding in C++ and Java which
        intrigued me, and shortly after, through college placements, I was
        offered an internship opportunity as a Software Developer. During my
        time as an intern, I learned the basics of web development (HTML, CSS,
        PHP, JavaScript), I wanted to explore this domain and upskill myself,
        therefore I signed up for a 7-month long military style Coding Bootcamp
        at Masai School (Full Stack Web Development Programme).
      </p>
      <p className="data">
        At Masai School, after completing my journey as a student (500+ hours of
        learning!) I was presented with an opportunity to become a teaching
        associate, and as I always wanted to contribute towards the education
        sector, I gladly accepted the opportunity.
      </p>
      <p className="data">
        As a teaching associate at Masai School, I mentored and managed more
        than 100+ students, helping them with their daily coding-related doubts
        and concepts. After such a wonderful experience full of learning, I am
        now confident to take on the role of a Software Developer and begin the
        next phase of my life building real-world applications and customer
        facing products!
      </p>
      <button onClick={clickHandler} className="bttn">
        View Resume
      </button>
    </div>
  );
}

export default Head;
