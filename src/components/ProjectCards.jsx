import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ProjectCards() {
  const [projects, setProjects] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) =>
        console.error("Failed to load project history:", error)
      );
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-primary-content place-items-center">
      {projects.map((item, index) => (
        <div
          className="card w-full md:w-96 h-96 bg-base-100 shadow-xl"
          key={index}
        >
          <figure>
            <img src={item.imageUrl} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <p>{item.description}</p>
            <div className="card-actions justify-end">
              <Link
                to={{ pathname: "/project", replace: true }} // Replace with 'replace' prop
                className="btn btn-primary"
                onClick={() =>
                  navigate("/project", { project: JSON.stringify(item) })
                } // Pass data using navigate
              >
                View Project
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
