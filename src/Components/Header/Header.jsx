import React, { useEffect, useState} from 'react';
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import "../Header/Header.css";
import "../../App.css"

const Header = () => {

    const StorageTheme = () => {
        let Value = localStorage.getItem("Dark-Theme");

        if (Value) {
            return JSON.parse(localStorage.getItem("Values"))
        } else {
            return [];
        }
    }

    const [Theme, setTheme] = useState(StorageTheme());
    const [ExtendNavbar,setExtendNavbar ] = useState(false)
    const [Color, setColor] = useState(false)

    const ToggleTheme = () => {
        if (Theme === "Dark-Theme") {
            setTheme("Light-Theme")
        }
        else {
            setTheme("Dark-Theme")
        }
    }; 

    useEffect(() => {
        document.documentElement.className = Theme;
        localStorage.setItem("Values", JSON.stringify(Theme))
    },[Theme])

    const OnScroll = () => {
        if (window.scrollY > 0) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener("scroll", OnScroll)

return (
        <header className={Color ? "Header HeaderScroll" : "Header"} >
            <article>
                <section>
                    <h3>Eric Kioko.</h3>
                </section>
                <section>
                    <nav id='Navigation' className={ExtendNavbar ? "CloseNavigation" : "OpenNavigation" } onClick={() => setExtendNavbar(false)}  >
                        <a href='#Home'>Home</a>
                        <a href='#About'>About</a>
                        <a href='#Skills'>Skills</a>
                        <a href='#Projects'>Projects</a>
                    </nav>
                </section>
                <section>
                    <figure onClick={ToggleTheme} >
                        {Theme === "Dark-Theme" ? <BsFillSunFill size="1.3rem" id="Bright" /> : <BsFillMoonFill size="1.3rem" id="Bright" />}
                    </figure>
                    <figure onClick={()=> {setExtendNavbar((curr) => !curr)}} >
                        {ExtendNavbar ? <i id='Bars' class="fa-solid fa-xmark"></i> : <i  id="Bars" class="fa-solid fa-bars"></i>}
                    </figure>
                    <button>
                        <a href='#Contact'>Contact Now</a>
                    </button>
                </section>
            </article>
        </header>    
)
}

export default Header