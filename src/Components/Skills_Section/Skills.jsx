import React from 'react';
import "../Skills_Section/Skills.css";
import { SiTailwindcss } from "react-icons/si"

const Skills = () => {
return (
    <div id='Skills' className='Skills' >
        <section>
            <h2>Skills</h2>
            <p>My Technical Stack</p>
        </section>
        <section>
            <figure>
                <i class="fa-brands fa-html5"></i>
                <figcaption>
                    <h3>HTML</h3>
                </figcaption> 
            </figure>
            <figure>
                <i class="fa-brands fa-css3-alt"></i>
                <figcaption>
                    <h3>CSS</h3>
                </figcaption> 
            </figure>
            <figure>
                <i class="fa-brands fa-sass"></i>
                <figcaption>
                    <h3>SASS</h3>
                </figcaption>
            </figure>
            <figure>
                <SiTailwindcss size="3.5rem" className='Reacticon' />
                <figcaption>
                    <h3>Tailwind CSS</h3>
                </figcaption>
            </figure>
            <figure>
                <i class="fa-brands fa-square-js"></i>
                <figcaption>
                    <h3>JavaScript</h3>
                </figcaption>
            </figure>
            <figure>
            <i class="fa-brands fa-react"></i>
                <figcaption>
                    <h3>React JS</h3>
                </figcaption>
            </figure>
            <figure>
                <i class="fa-brands fa-github"></i>
                <figcaption>
                    <h3>Github</h3>
                </figcaption>
            </figure>
        </section>
    </div>
)
}

export default Skills