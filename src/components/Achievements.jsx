import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Achievements = () => {
  const achievements = [
    ["/images/achievements/ccdsa.jpg", "CCDSA by Code Chef"],
    [
      "/images/achievements/problem-solving-intermediate.png",
      "PROBLEM SOLVING INTERMEDIATE by HackerRank",
    ],
    ["/images/achievements/dbms.jpg", "DATABASE MANAGEMENT SYSTEM by NPTEL"],
    [
      "/images/achievements/top3.jpg",
      "TOP 3 in Coding Contest Conducted in Our College",
    ],
    ["/images/achievements/react.png", "REACT by HackerRank"],
    ["/images/achievements/farewell.jpg", "GOOGLE Farewell ROUND A"],
    ["/images/achievements/rest-api.png", "REST API by HackerRank"],
    [
      "/images/achievements/cn.jpg",
      "TOP 1 in Our Institute CODE KAZE by Coding Ninjas",
    ],
    [
      "/images/achievements/problem-solving-basic.png",
      "PROBLEM SOLVING BASIC by HackerRank",
    ],
    ["/images/achievements/sql.png", "SQL by HackerRank"],
    ["/images/achievements/java.png", "JAVA by HackerRank"],
    ["/images/achievements/python.png", "PYTHON by HackerRank"],
  ];

  return (
    <div>
      <div className="h-fit bg-gradient-to-r from-green-500/[0.15] to-sky-500/[0.2]">
        <div className="">
          <div className="">
            <Header />
          </div>
        </div>
        <div className="">
          <div className="text-center text-white text-3xl mt-[3%]">
            Personal <b style={{ color: "lightgreen" }}>MILESTONES</b> Achieved!
            🏆
          </div>
        </div>
        <div className="flex flex-wrap mt-[2%]  ml-[10%] mr-[10%]">
          <div className="flex flex-wrap justify-center">
            {achievements.map((achievement, index) => (
              <div key={index} className="handle m-4">
                <img
                  className="achievement cursor-pointer w-96 h-96 object-center rounded-lg"
                  src={achievement[0]}
                  alt=""
                />
                <div className="text text-xl text-white font-extrabold text-center justify-center align-middle absolute w-80 pt-36 pl-10">
                  {achievement[1]}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <div className="pt-10">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
