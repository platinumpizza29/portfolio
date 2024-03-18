import {useEffect, useState} from "react";

export default function ProjectCards() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/projects.json')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error("Failed to load project history:", error));
    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-primary-content place-items-center">
            {projects.map((item, index) => (
                <div className="card w-full md:w-96 bg-base-100 shadow-xl" key={index}>
                    <figure>
                        <img
                            src="https://s3-alpha.figma.com/hub/file/2610778840/5e9eddd9-5736-4945-9f55-20136583dc94-cover.png"
                            alt="Shoes"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{item.name}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">View Project</button>
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
    );
}