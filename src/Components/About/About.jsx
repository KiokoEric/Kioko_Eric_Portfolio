import React from 'react';
import "../About/About.css";
import HomeImage from "../../Images/Eric_Kioko_Image.jpg";

const About = () => {
return (
    <div id='About' className='About' >
        <h2>About Me</h2>
        <article>
            <section>
                <h3>I am a passionate and driven junior developer on a mission to create innovative and user-friendly software solutions.</h3>
                <p>
                    Hello there! my name is Eric Kioko, I am a passionate and driven junior developer on a mission to create innovative and user-friendly software solutions. My journey into the world of coding started with a fascination for how lines of code can shape and transform our digital experiences.  
                </p>
                <p>
                    I thrive on new challenges and have an insatiable curiosity that drives me to continuously learn and grow. My goal is to craft elegant and efficient solutions that contribute positively to the user's journey. I'm excited to bring my creativity, dedication, and fresh perspective to a dynamic team where I can contribute to exciting projects and continue my journey of becoming a well-rounded developer. If you're interested in collaborating or just want to connect, feel free to reach out!
                </p>
                <button>
                    <a href='#Contact'>Contact Now</a>
                </button>
            </section>
            <section>
                <figure>
                    <img src={HomeImage} alt="" className='Image' />
                </figure>
            </section>
        </article>
    </div>
)
}

export default About 