import '../Styles/portfolio.css'
import React, { useState} from "react";


const Portfolio = () => {
    return(
        <div className="portfolio">
            <h2><span>Portfolio</span></h2>
            <div id='wrap-portfolio'>
                <div className='project'id='crud'>
                    <div className='top'>
                        <div className="point" id='rouge'></div>
                        <div className="point" id='jaune'></div>
                        <div className="point" id='vert'></div>
                    </div>
                    <p id='desc'>Projets en cours</p>
                </div>
            </div>
        </div>
    )
}

export default Portfolio; 