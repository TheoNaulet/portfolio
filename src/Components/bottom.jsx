import React from "react";
import github from '../images/logo-github.png';
import '../Styles/bottom.css'

const Bottom = () => {
    return(
        <div id='bottom' className='bottom'>
            <div className='contact'>
                <h3>Based in Montpellier</h3>
                <a className="email" href='mailto:theo.naulet@gmail.com'>theo.naulet@gmail.com</a>
                <p className='number'>+33 7 81 36 41 76</p>     
                </div>
                <div className='linkedin'>
                <a className='linkedinlogo' target="_blank" href='https://www.linkedin.com/in/theo-naulet/'>
                    <img src='https://pnggrid.com/wp-content/uploads/2021/05/linkedin-logo-white-1024x1024.png'></img>
                </a>
                <a href='https://github.com/TheoNaulet' target="_blank">
                    <img src={github} ></img>
                </a>
            </div>   
        </div> 
    )
}

export default Bottom; 