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
      <h5 className="data">
        I am an Aspiring Full-Stack Software Engineer with a keen interest in
        building robust and user-focused applications with a strong emphasis on
        design, usability, and efficiency. Having worked with different
        technologies across the spectrum, I have found my passion in web
        development, and ever since then I have been highly focused towards
        specializing in this domain. Apart from coding, in my leisure time, I
        enjoy traveling and watching sci-fi movies!
        <img src={img} alt="Dp" className="dp"></img>
      </h5>

      <button onClick={clickHandler} className="bttn">
        View Resume
      </button>
    </div>
  );
}

export default Head;
