import '../Styles/portfolio.css'
import React, { useState} from "react";
import viatransit from '../images/viatransit.png'
import osm from '../images/osm.png'


const Portfolio = () => {
    return(
        <div className="portfolio">
            <h2><span>Portfolio</span></h2>
            <div id='wrap-portfolio'>
                <a target='_blank' href='https://viatransit.fr'>
                    <div className='project' id='crud'>
                        <div className='top'>
                            <div className="point" id='rouge'></div>
                            <div className="point" id='jaune'></div>
                            <div className="point" id='vert'></div>
                            <p className='label_site'>Site vitrine</p>
                        </div>
                        <img className='viatransitImage' src={viatransit}/>
                    </div>
                </a>
                <div className='project' id='crud'>
                    <div className='top'>
                        <div className="point" id='rouge'></div>
                        <div className="point" id='jaune'></div>
                        <div className="point" id='vert'></div>
                        <p className='label_site'>Automatisation données Open Street Map</p>
                    </div>
                    <img className='viatransitImage' src={osm}/>
                </div>
            </div>
            
        </div>
    )
}

export default Portfolio; 