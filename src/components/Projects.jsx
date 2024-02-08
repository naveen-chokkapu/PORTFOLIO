import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <div className="h-fit bg-gradient-to-r from-yellow-500/[0.1] to-violet-500/[0.2]">
        <div className="">
          <div className="">
            <Header />
          </div>

          <div className="">
            <div className="text-center text-3xl mt-[3%] text-white">
              My <b style={{ color: "pink" }}>RECENT</b> Works! 💪
            </div>
          </div>

          <div className="justify-center flex flex-wrap mt-10 ml-[10%] mr-[10%] pb-10">
            <div className="">
              <ProjectsCard
                img="images/projects/portfolio.jpeg"
                title="PORTFOLIO"
                content="Developed a sleek and interactive portfolio showcasing my projects and skills using ReactJS, HTML, and CSS, demonstrating creativity and proficiency in web development."
                link="//github.com/naveen-chokkapu"
                demo=""
              />
            </div>
            <div className="">
              <ProjectsCard
                img="images/projects/blog.jpg"
                title="BLOG APP"
                content="Engineered a feature-rich blog website with a user-friendly interface, enabling seamless content management and interaction, powered by the MERN stack and Material UI."
                link="//github.com/naveen-chokkapu"
                demo=""
              />
            </div>
            <div className="">
              <ProjectsCard
                img="images/projects/ecommerce.avif"
                title="E-COMMERCE"
                content="Designed and implemented an e-commerce website with robust functionality and an intuitive user experience, facilitating online transactions and product management using MERN Stack."
                link="//github.com/naveen-chokkapu"
              />
            </div>
            <div className="">
              <ProjectsCard
                img="images/projects/farmbank.avif"
                title="FARM BANK"
                content="Created a MERN stack-based web application serving as a platform connecting farmers with investors, streamlining the loan application process and promoting financial inclusion."
                link="//github.com/naveen-chokkapu"
                demo=""
              />
            </div>
            <div className="">
              <ProjectsCard
                img="images/projects/url.avif"
                title="URL SHORTENER"
                content="Developed a URL shortener service simplifying long URL sharing with compact codes, integrating MongoDB for efficient storage and retrieval, and enabling seamless link management."
                link="//github.com/naveen-chokkapu"
              />
            </div>
            <div className="">
              <ProjectsCard
                img="images/projects/online editor.avif"
                title="ONLINE EDITOR"
                content="Created an online code editor supporting multiple programming languages like C++, Python, etc. providing a collaborative environment for coding and compiling code snippets effortlessly."
                link="//github.com/naveen-chokkapu"
              />
            </div>
            <div className="">
              <ProjectsCard
                img="images/projects/qr.avif"
                title="QR GENERATOR"
                content="Built a QR code generator using Node.js for quick link sharing and access, enhancing user convenience and enabling efficient code generation from input URLs."
                link="//github.com/naveen-chokkapu"
                demo=""
              />
            </div>
          </div>
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Projects;
