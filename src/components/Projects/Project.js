import React from "react";
import "./Project.css";

function Project() {
  return (
    <>
      <h2 className="Project">Projects</h2>
      <div className="Projects-container">
        <div className="ProjectCard">
          <div className="Project1">
            <div>
              <h4 className="name1">Google Search</h4>
              <div className="description">
                <p>
                  An attempt to clone UI, auto-suggest &amp; google search
                  results functionalities using React &amp; Styled Components.
                  Currently, auto-suggest works only for keywords "elon musk"
                  and "coffee".
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Projects-container">
        <div className="ProjectCard">
          <div className="Project1">
            <div>
              <h4>Google Search</h4>
              <div className="description">
                <p>
                  Yatra.com is a travel website that allows users to book
                  flights, hotels, and car rentals. I was responsible for the
                  back-end development of the website. Using React, I also built
                  the Flight Search Component.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Projects-container">
        <div className="ProjectCard">
          <div className="Project1">
            <div>
              <h4>Data Structure Templete Library</h4>
              <div className="description">
                <p>
                  The data structure librabry is project in c++ language where I
                  have combined all tyoes of data structures with their full
                  functionality. The application is simple to use you just need
                  to import the application in your project file and you can use
                  custom built Data Structure Library
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Projects-container">
        <div className="ProjectCard">
          <div className="Project1">
            <div>
              <h4>Customized Virtual File Management System</h4>
              <div className="description">
                <p>
                  The data structure librabry is project in c++ language where I
                  have combined all tyoes of data structures with their full
                  functionality. The application is simple to use you just need
                  to import the application in your project file and you can use
                  custom built Data Structure Library
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
