import React, { Component } from "react";
import {Link as Scroll} from 'react-scroll'; 
import '../Styles/navbar.css'

<style>
@import url('https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap');
</style>;


const Navbar = () => {
    return(
            <div className="wrap">
                <div className="prenom">Théo Naulet</div>
                <div className="nav"><Scroll to='me' smooth duration={1000}>Home</Scroll></div>
                <div className="nav"><Scroll to='portfolio' smooth duration={1000}>Portfolio</Scroll></div>
                <div className="nav" id="contact"><Scroll to='bottom' smooth duration={1000}>Contact</Scroll></div>
            </div>
    )
}

export default Navbar;