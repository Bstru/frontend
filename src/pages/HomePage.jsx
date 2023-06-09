// import './App.css';
import { useState, useEffect } from 'react'
import { projectService } from '../services/project-service'
import { ProjectList } from '../cmps/ProjectList'

export function HomePage() {
    const title = 'mainTitle'
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        setProjects(projectService.getProjects())
    })
    // const projects = projectService.getProjects()

    const onSubmitMail = (ev) => {
        ev.preventDefault()
        console.log(ev)
    }
    const onSubmitNumber = (ev) => {
        ev.preventDefault()
        console.log(ev)
    }
    console.log(projects)
    return (
        <div className="home-page">
            <h1 className={{ title }}>Ben Struminski - CS & Entrepreneurship student</h1>
            <h2 className="sec-title">Welcome to my page!</h2>
            
            {projects && <ProjectList projects={projects}/>}
            <form onSubmit={onSubmitMail}>
                <input type="text" />
                <button>Submit</button>
            </form>
            <form onSubmit={onSubmitNumber}>
                <input type="number" />
                <button>Submit</button>
            </form>
        </div>
    );
}


