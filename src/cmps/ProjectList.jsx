import { projectService } from "../services/project-service";
import { ProjectPreview } from "./ProjectPreview.jsx"

export function ProjectList({ projects }) {
    return (
        <>
            <h3>
                My project list
            </h3>
            <ul>
                {
                    projects.map((project) => {
                        console.log(project)
                    return <ProjectPreview key={project.id} project={project} />})
                }
            </ul>
        </>
    )
}