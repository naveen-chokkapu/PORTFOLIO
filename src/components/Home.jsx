import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Profiles from "./Profiles";

const Home = () => {
  const [i, setI] = useState(0);
  const names = [
    "SOFTWARE DEVELOPER",
    "FRONTEND DEVELOPER",
    "FREELANCER",
    "COMPETITIVE PROGRAMMER",
    "BACKEND DEVELOPER",
    "FULL STACK DEVELOPER",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setI((i) => (i + 1) % 6);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="Home h-fit pb-[6%] bg-gradient-to-r from-sky-500/[0.3] to-pink-500/[0.3] ">
        {/* Header */}
        <div className="HomeItem">
          <Header />
        </div>
        {/* Basic Intro */}
        <div className="text-xl font-bold text-white">
          <div className="flex justify-center">
            <div className="ml-80 text-center text-4xl mt-[6%] w-50">
              <div className="">
                <div className="greet">Hi There! 👋</div>
                <div className="title mt-2">
                  {" "}
                  I'M{" "}
                  <b style={{ color: "pink", initialLetter: "0 0 10px pink" }}>
                    NAVEEN CHOKKAPU
                  </b>
                </div>
                <br />
                <div className="sub-title tracking-widest text-blue-400">
                  {names[i]}
                </div>
              </div>
            </div>
            <div className=" flex flex-wrap mt-[5%] w-50 ml-20">
              <div className="flex profile-image align-center">
                <img
                  className="skew-2 h-80 rounded align-end justify-end text-right"
                  src="/images/profile.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Let's Introduce */}
      <div className="h-fit pt-2 pb-[5%] bg-gradient-to-r from-violet-500/[0.2] to-red-500/[0.1]">
        <div className="text-center pt-5">
          <div className="">
            <div className="">
              <div className="intro-title text-white text-4xl">
                LET ME <b style={{ color: "orange" }}>INTRODUCE</b> MYSELF
              </div>
            </div>
            <div className="">
              <div className="text-white">
                <div className="intro-content mt-5 text-2xl ml-[15%] mr-[15%]">
                  <div className="mb-2">
                    🚀 As a passionate software engineer, I thrive on crafting
                    immersive <b style={{ color: "pink" }}>WEB DEVELOPMENT</b>{" "}
                    experiences and excel at{" "}
                    <b style={{ color: "pink" }}>PROBLEM-SOLVING</b>. 💻✨
                  </div>
                  <div className="mt-10 ml-[22%] mr-[22%] text-xl font-serif">
                    🎓 I'm a final year student pursuing my B.Tech in Computer
                    Science, Actively seeking opportunities that provide a
                    comfortable workspace and environment to apply my skills and
                    value.
                  </div>
                  <div className="mt-4 ml-[22%] mr-[22%] text-xl">
                    I have good hands-on practice in Programming languages like{" "}
                    <b className="font-bold text-blue-500">C++, PYTHON</b> and
                    in Javascript frameworks like{" "}
                    <b className="font-bold text-red-500"> REACT, EXPRESS</b>{" "}
                    and Databases like{" "}
                    <b className="font-bold text-pink-500">MONGODB, MYSQL</b>.
                  </div>
                  <div className="mt-5 ml-[10%] mr-[10%] text-xl bg-gradient from-blue-500 to-red-800 rounded font-extralight text-red-300">
                    Beyond web development, as a MERN developer, I'm fueled by a
                    passion for competitive programming. 🌟 Achievements include
                    earning the Knight badge in LeetCode, achieving a 3⭐ rating
                    in CodeChef, and obtaining certifications in HackerRank,
                    with a 5⭐ rating in problem-solving. 💻🏆
                  </div>
                </div>

                {/* Profiles */}
                <div className="">
                  <Profiles />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="HomeItem ">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
