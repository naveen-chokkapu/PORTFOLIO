import React from "react";
import Header from "./Header";
import Skills from "./Skills";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <div className="h-fit pb-20 bg-gradient-to-r from-red-500/[0] to-violet-500/[0.2]">
        <div className="">
          <Header />
        </div>
        <div className="text-white">
          <div className="pb-4">
            <div className=" text-3xl mt-[3%] text-center">
              Know More About <b style={{ color: "pink" }}>ME! 🤟</b>
            </div>
            <div className="">
              <div className="text-xl font-serif mt-[2%] ml-[15%] mr-[15%] text-center">
                Hello! I'm Naveen Chokkapu, a software engineer based in Andhra
                Pradesh, India. With a strong foundation in computer science, I
                bring a blend of technical skills and creative problem-solving
                to the table.
              </div>
              <div className="text-bold text-center text-xl mt-10 mb-10">
                <li>
                  Studied key subjects including{" "}
                  <b style={{ color: "pink" }}>Operating Systems</b>,{" "}
                  <b style={{ color: "pink" }}>DBMS</b>, and{" "}
                  <b style={{ color: "pink" }}>Object-Oriented Programming</b>,
                  enhancing foundational knowledge in computer science.
                </li>
                <li>
                  Undergraduate with a B.Tech. in Computer Science and
                  Engineering from{" "}
                  <a
                    className="no-underline text-white"
                    href="//vignaniit.edu.in/"
                  >
                    Vignan's IIT
                  </a>
                  , Visakhapatnam, maintaining an impressive{" "}
                  <b style={{ color: "violet" }}>CGPA of 8.5</b>
                </li>
                <li>
                  Completed a{" "}
                  <b style={{ color: "skyblue" }}>
                    Software Development Internship at DesiQna
                  </b>
                  , where I contributed to building a responsive webpage and
                  tackled challenges related to user verification and
                  authentication.
                </li>
              </div>
            </div>
          </div>
          <div className="">
            <Skills />
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default About;
