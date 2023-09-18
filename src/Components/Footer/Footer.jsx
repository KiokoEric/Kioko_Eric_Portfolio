import React from 'react';
import "../Footer/Footer.css"
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub} from "react-icons/bs"

const githubProfile = () => {
    window.open(`https://github.com/KiokoEric`)
}

const LinkedinProfile = () => {
    window.open(`https://www.linkedin.com/in/eric-kioko-007186210`)
}

const Footer = () => {
return (
    <div className='Footer' >
        <button onClick={LinkedinProfile} >
            <AiFillLinkedin size="2.5rem" className='Icon'  />
        </button>
        <button onClick={githubProfile} >
            <BsGithub size="2.5rem" className='Icon'  />
        </button>
    </div>
)
}

export default Footer