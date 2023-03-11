import React from "react";
import "../Styles/me.css"

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap');
</style>;




const Me = () => {
    return(
        <div className="me">
            <div className='left-me'>
                <div className='presentation'>
                    <p className='welcome'>BIENVENUE</p>
                    <h1 className='theo'>Je suis Théo Naulet</h1>
                    <p className='profession'>Développeur web</p>
                    <a id='dl-cv' href='https://drive.google.com/file/d/1i5k-sFE1sLXJ3hK0HGskxplveKrm_zRJ/view?usp=share_link' target='blank'>
                        <button className='dl'>Télécharger mon CV</button>
                    </a>
                </div>
            </div>
                <div className='pic-me'>
                    <img src={require("../images/me.png")}></img>
                </div>
        </div>
    )
}

export default Me;  