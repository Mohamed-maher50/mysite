import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
let hrefs = [
  {
    id: 1,
    url: "https://mohamed-maher50.github.io/Arrow/",
    imgUrl: "arrow.png",
  },
  {
    id: 2,
    url: "https://mohamed-maher50.github.io/ClubIn-for-music/",
    imgUrl: "palymusic.png",
  },
  {
    id: 3,
    url: "https://mohamed-maher50.github.io/maher_course/",
    imgUrl: "landpage.png",
  },
  {
    id: 4,
    url: "https://mohamed-maher50.github.io/Summary/",
    imgUrl: "samary.jpg",
  },
];
function projects(props) {
  return (
    <div className="container">
      <div className="set_title">Featured Projects</div>
      <div className="myProjects ">
        {props.hrefs.map((project) => {
          return (
            <>
              <Link to={`/project/${project.id}`}  className="col project" key={project.id}>
                <img src={`../imgs/${project.imgUrl}`} />
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default projects;
