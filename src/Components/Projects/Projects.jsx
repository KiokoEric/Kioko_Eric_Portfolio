import React from 'react';
import "../Projects/Projects.css"
import Cook from "../../Images/Cook.io_Portfolio_Image.jpg";
import BetterHealthImage from "../../Images/BetterHealth_Portfolio_Image.jpg"
import Portfolio_Three from "../../Images/portfolio-3.jpg"

const Projects = () => {

    const CookioGithub = () => {
        window.open(`https://github.com/KiokoEric/The_Cook.io`)
    }

    const Cookio = () => {
        window.open(`https://KiokoEric.github.io/The_Cook.io`)
    }

    const BetterHealthGithub = () => {
        window.open(`https://github.com/KiokoEric/My_Better_Health`)
    }

    const BetterHealth = () => {
        window.open(`https://KiokoEric.github.io/My_Better_Health`)
    }

    const iBudgetGithub = () => {
        window.open(`https://github.com/KiokoEric/iBudget`)
    }

    const iBudget = () => {
        window.open(`https://KiokoEric.github.io/iBudget`)
    }


return (
    <div id='Projects' className='Projects' >
        <h2>Projects</h2>
        <article>
            <section>
                <figure>  
                    <img src={Cook} alt="" width="500px" />
                </figure>
                <div>
                    <button onClick={CookioGithub} >
                        <i class="fa-brands fa-github"></i>
                        Github
                    </button>
                    <button onClick={Cookio} >
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        Live Demo
                    </button>
                </div>
            </section>
            <section>
                <h3>Cook.io <span><i class="fa-brands fa-react"></i></span> <span>API</span> </h3>
                <p>
                    Cook.io is your one-stop recipe website that caters to food enthusiasts of all levels. From seasoned chefs to beginners in the kitchen, the platform offers a diverse range of delectable recipes that span cuisines, dietary preferences, and different continents.
                </p>
                <h4>Key Features</h4>
                <ul>
                    <li>
                        Search : The website features a robust search engine, allowing users to easily find recipes based on their search interests. Whether you're seeking a quick weeknight dinner or an elaborate feast, the perfect recipe is just a few clicks away.
                    </li>
                    <li>
                        Recipe Variety : Immerse yourself in a treasure trove of recipes that cover breakfast, desserts, sides and starters.
                    </li>
                    <li>
                        Cuisine Exploration : Embark on a global gastronomic adventure with our curated collection of recipes from around the world. Experience the authentic flavors of Italian pasta, spicy Thai curries, comforting American classics, and much more. 
                    </li>
                    <li>
                        Step-by-Step Guidance : The detailed recipe instructions make cooking a breeze. Each recipe is presented with clear step-by-step directions, accompanied by high-quality videos to guide you through the cooking process.
                    </li>
                    <li>
                        Bookmark Feature: Users can typically add a bookmark to a specific recipe allowing them to quickly access their bookmarked content without needing to remember.
                    </li>
                </ul>
            </section>
        </article>
        <article>
            <section>
                <figure>
                    <img src={BetterHealthImage} alt="" width="500px" />
                </figure>
                <div>
                    <button onClick={BetterHealthGithub} >
                        <i class="fa-brands fa-github"></i>
                        Github
                    </button>
                    <button onClick={BetterHealth} >
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        Live Demo
                    </button>
                </div>
            </section>
            <section>
            <h3>Better Health <span><i class="fa-brands fa-react"></i></span> <span>API</span> </h3>
                <p>
                    Better Health is your ultimate online destination for holistic health and fitness guidance. Our website is designed to empower individuals on their journey to optimal well-being by providing comprehensive resources.
                </p>
                <h4>Key Features</h4>
                <ul>
                    <li>
                        Fitness Resources : Access a variety of body exercises designed to cater to different fitness preferences and goals.
                    </li>
                    <li>
                        Nutrition Guidance : The website offers its users with detailed nutritional breakdown of each recipe. 
                    </li>
                    <li>
                        Bookmark Feature: Users can typically add a bookmark to a specific exercise allowing them to quickly access their bookmarked content without needing to remember.
                    </li>
                    <li>
                        Fitness Calculator : The website offers a body mass index Calculator and allows users to track the calories they have been able to burn as per the exercises they have engaged in and time they have spent carrying out the exercise.
                    </li>
                </ul>
            </section>
        </article>
        <article>
            <section>
                <figure>
                    <img src={Portfolio_Three} alt="" width="500px" />
                </figure>
                <div>
                    <button onClick={iBudgetGithub} >
                        <i class="fa-brands fa-github"></i>
                        Github
                    </button>
                    <button onClick={iBudget} >
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        Live Demo
                    </button>
                </div>
            </section>
            <section>
            <h3>iBudget <span><i class="fa-brands fa-react"></i></span></h3>
                <p>
                    iBudget is a user-friendly and efficient financial application designed to help individuals manage their finances with ease and precision. This comprehensive application offers a streamlined interface and a range of features that simplify revenue and expense tracking, loan calculation and uptodate stock market prices.
                </p>
                <h4>Key Features</h4>
                <ul>
                    <li>
                        Revenue Logging : Users can effortlessly input their revenue sources and add relevant details such as date, time, and memo.
                    </li>
                    <li>
                        Expense Logging : Users can effortlessly input their daily expenses, categorize them and add relevant details such as date, time, and memo.
                    </li>
                    <li>    
                        Loan Calculator : Users can effortlessly determine various aspects of a loan, including monthly payments, interest costs, and total repayment amounts. It allows users to input specific loan details such as the loan amount, interest rate and loan term.
                    </li>
                    <li>
                        Stock Market Prices : Users can easily access the latest stock market prices for their favourite stocks, allowing them to grow their investment portfolio.
                    </li>
                </ul>
            </section>
        </article>
    </div>
)
}

export default Projects