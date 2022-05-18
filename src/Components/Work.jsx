import '../Styles/Work.css'
import React from 'react'


const Work = () => {
    return(
    <div className='xp'>
        <div className='bandeauxp'>
            <h2><span>My work experience</span></h2>
        </div>
        <div className='wrapper'>
            <div className="box">
            <div className='imgBox'>
            <img id='imgwork' src="http://www.spoka.net/wp-content/uploads/2017/08/logo-boulanger-3.png" alt='Logo Boulanger'></img>
            </div>
            <div className="content">
            <h2>Conseiller de vente</h2>
            <span>Nov. - Déc. 2021</span>
            </div>
            </div>
            <div className="box">
            <div className='imgBox'>
            <img id='imgwork' src="data:image/jpeg;base64,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" alt='Logo FC Sète'></img>
            </div> 
            <div className="content">
            <h2>Assistant Commercial</h2>
            <span>Mai - Juil. 2020</span>
            </div>
            </div>
            <div className="box">
            <div className='imgBox'>
            <img id='imgwork' src="https://www.toulousefc.com/sites/default/files/2020-10/Logo_Vignette_2.jpg" alt='Logo TFC'></img>
            </div>
            <div className="content">
            <h2>Assistant Commercial</h2>
            <span>Juin 2019</span>
            </div>
            </div>
            <div className="box">
            <div className='imgBox'>
            <img id='imgwork' src="http://www.loccitanieauquotidien.com/wp-content/uploads/2020/03/sete0000.png" alt='Logo Mairie Sète'></img>
            </div>
            <div className="content">
            <h2>Animateur centre aéré</h2>
            <span>Été 2017-2021</span>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Work; 