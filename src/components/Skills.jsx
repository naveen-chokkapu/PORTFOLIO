import React from "react";
import { TbBrandCpp, TbBrandVscode } from "react-icons/tb";
import { DiGit, DiJavascript1, DiMongodb } from "react-icons/di";
import { SiMysql, SiExpress, SiTailwindcss, SiVscodium } from "react-icons/si";
import {
  FaHtml5,
  FaCss3,
  FaJava,
  FaPython,
  FaReact,
  FaNode,
  FaBootstrap,
} from "react-icons/fa";
const Skills = () => {
  return (
    <div>
      <div className="">
        <div className="text-3xl text-center">
          Professional <b style={{ color: "orange" }}>SKILL SET</b>
        </div>
        <div className="skill-set flex flex-wrap ml-[20%] mr-[20%] justify-center">
          <div className="">
            <TbBrandCpp className="text-7xl" />
          </div>
          <div className="text-yellow-400">
            <FaPython className="text-7xl" />
          </div>
          <div className="text-yellow-500">
            <DiJavascript1 className="text-7xl" />
          </div>
          <div className="text-orange-500">
            <FaHtml5 className="text-7xl" />
          </div>
          <div className="text-blue-500">
            <FaCss3 className="text-7xl" />
          </div>
          <div className="text-blue-800">
            <FaReact className="text-7xl" />
          </div>
          <div className="text-green-500">
            <FaNode className="text-7xl" />
          </div>
          <div className="">
            <SiExpress className="text-7xl" />
          </div>
          <div className="text-green-800">
            <DiMongodb className="text-7xl" />
          </div>
          <div className="">
            <SiMysql className="text-7xl" />
          </div>
          <div className="text-blue-500">
            <SiTailwindcss className="text-7xl" />
          </div>
          <div className="text-violet-500">
            <FaBootstrap className="text-7xl" />
          </div>
          <div className="text-orange-500">
            <DiGit className="text-7xl" />
          </div>
          <div className="text-violet-500">
            <TbBrandVscode className="text-7xl" />
          </div>
          <div className="text-blue-800">
            <FaJava className="text-7xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
