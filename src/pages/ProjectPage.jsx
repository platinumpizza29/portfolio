import { useParams } from "react-router-dom";

export default function ProjectPage() {
  const { project } = useParams();
  console.log(project);

  if (!project) {
    return <div>Project details not found!</div>;
  }

  // Use the 'project' object here to display details
  return (
    <div>
      <h2>{project.name}</h2>
      {/* ... other project details */}
    </div>
  );
}
