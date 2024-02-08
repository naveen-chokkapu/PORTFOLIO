import React from "react";

const ProjectsCard = (props) => {
  return (
    <div>
      <div className="card flex flex-wrap justify-center bg-transparent m-4 p-4">
        <div className="rounded-lg w-96 h-fit">
          <div className="flex justify-center">
            <img
              className="card-img rounded-lg h-96 object-center"
              src={props.img}
              alt=""
            />
          </div>
          <div className="text-orange-500 text-center mt-4">
            <div className="font-bold text-2xl">{props.title}</div>
            <div className="text-white font-serif mt-2 pb-2">
              {props.content}
            </div>
            <div className="mt-4">
              <a
                href={props.link}
                target="_blank"
                rel="noreferrer"
                className="text-white no-underline bg-gradient-to-r from-violet-500/[0.7] to-violet-500/[0.5] px-4 py-2 rounded-md"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
