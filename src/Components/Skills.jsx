import React from "react";
import styled from "styled-components";
import {CircularProgressbarWithChildren} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../Styles/Skills.css'; 


const Container = styled.div`

`

const Title1 = styled.div`

    ` 

const Myskills = styled.div`

`



const Skills = () => {
    return(
        <Container>
            <Title1><h4><span>My skills</span></h4></Title1>
            <Myskills>
<div className='skills'>
        <div className='my-skills'>
            <div className='bar' id='skills1'>
            <CircularProgressbarWithChildren
                value={70} 
                styles={{ 
                root: {}, 
                path: {
                stroke: `rgb(21, 198, 203)`,
                },
            }}
                >

                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                <img className="logolang" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png" alt="doge" />
                <div className="percentage">
                <strong>70%</strong>
                </div>
            </CircularProgressbarWithChildren>
            </div>
            <div className='bar' id='skills2'>
            <CircularProgressbarWithChildren 
                value={80}
                styles={{ 
                root: {}, 
                path: {
                    stroke: `rgb(21, 198, 203)`,
                },
                }} >
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                <img className="logolang" src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png" alt="doge" />
                <div className="percentage">
                <strong>80%</strong>
                </div>
            </CircularProgressbarWithChildren>
            </div>
            <div className='bar' id='skills3'>
            <CircularProgressbarWithChildren 
                value={70}
                styles={{ 
                root: {}, 
                path: {
                    stroke: `rgb(21, 198, 203)`,
                },
                }}>
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                <img className="logolang" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Devicon-css3-plain.svg/2048px-Devicon-css3-plain.svg.png" alt="doge" />
                <div className="percentage">
                <strong>70%</strong>
                </div>
            </CircularProgressbarWithChildren>
            </div>
            <div className='bar' id='skills4'>
            <CircularProgressbarWithChildren 
                value={40}
                styles={{ 
                root: {}, 
                path: {
                    stroke: `rgb(21, 198, 203)`,
                },
                }}>
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                <img className="logolang" src="https://grafikart.fr/uploads/icons/react.svg" alt="doge" />
                <div className="percentage">
                <strong>40%</strong>
                </div>
            </CircularProgressbarWithChildren>
            </div>
            <div className='bar' id='skills5'>
            <CircularProgressbarWithChildren 
                value={90}
                styles={{ 
                    root: {}, 
                    path: {
                    stroke: `rgb(21, 198, 203)`,
                    },
                }}>
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                <img className="logolang" src="https://hdf-formation.com/wp-content/uploads/2021/12/adobe-photoshop-logo-freelogovectors.net_.png" alt="doge"/>
                <div className="percentage">
                <strong>90%</strong>
                </div>
            </CircularProgressbarWithChildren>
            </div>
        </div>
        <div className='bottom-skills'>
            <div className='language'>
            <p className='bigtitle'>Language</p>
                <p className="langue">Français</p>
                <p id="level">Natif</p>
                <div className='jaugeFR'></div>
                <p className="langue">Anglais</p>
                <p id="level">Intermediaire</p>
                <div className='jaugeEN'></div>
                <p className="langue">Espagnol</p>
                <p id="level">Scolaire</p>
                <div className='jaugeES'></div>
            </div>
            <div className='studies'>
            <p className='bigtitle'>Studies</p>
            <div className='study'>
                <div className='ball' id='afpa' ></div>
                <div className='text-stud' >
                    <p className='place'>Formation Web-Développeur</p>
                    <p className='year'>Avr. 2022 - Janv. 2023</p>
                </div>
            </div>
            <div className='study'>
                <div className='ball' id='isefac' ></div>
                <div className='text-stud' >
                    <p className='place'>Bachelor Sport Event</p>
                    <p className='year'>2019 - 2021</p>
                </div>
            </div>
            <div className='study'>
                <div className='ball' id='bac'></div>
                <div className='text-stud'>
                    <p className='place'>Baccalauréat STI2D</p>
                    <p className='year'>2017</p>
                </div>
            </div>
            </div>
        </div>
        </div>
            </Myskills>
        </Container>
    )
}

export default Skills; 