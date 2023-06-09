export function ProjectPreview({project}){
    return(
       <div className="proj-card">
        <li>{project.id}</li>
        <li>{project.name}</li>
        <li>{project.dataSet}</li>
        </div>

    )
}