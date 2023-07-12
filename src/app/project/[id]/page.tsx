import { PROJECTS_DATA } from "@/lib/ProjectInfo/ProjectInfo";
import { ProjectContent } from "@/lib/ProjectInfo/ProjectInfo";
import OnConstruction from "../components";

interface PageProps {
  params: {
    id: string;
  };
}

const Page = ({ params }: PageProps) => {
  const { id } = params;
  const project: ProjectContent = PROJECTS_DATA[id];

  return (
    <>
      <h1>{project.title}</h1>
      <h4>{project.description}</h4>
      {project.onConstruction && <OnConstruction project={project} />}
    </>
  );
};

export default Page;
