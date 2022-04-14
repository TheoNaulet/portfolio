import './App.css';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

<style>
@import url('https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap');
</style>;
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap');
</style>;


function App() {
  return (
    <div className="App">
      <div className="me">
        <div className='left-me'>
          <div className="name">
            Théo Naulet
          </div>
          <div className='presentation'>
            <p className='welcome'>WELCOME</p>
            <h1 className='theo'>I'm Theo Naulet</h1>
            <p className='profession'>Étudiant en web-developpement</p>
            <div className='dl-cv'>
              <p className='dl'>Download CV</p>
            </div>
          </div>
        </div>
          <div className='pic-me'><img src={require("./me.png")}></img></div>
          <div className='menu'>
              <ul>
                <li>Home</li>
                <li>Portfolio</li>
                <li>Contact</li>
              </ul>
          </div>
        </div>
        <div className='about'>
          <div className='bloc-image-about'>
            <img class='image-about' src={require("./me.png")}></img>
          </div>
          <div className='text-about'>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin ut augue netus fusce fringilla. Aliquam blandit enim odio cursus id. Pulvinar commodo pellentesque non massa, nunc massa nisi est id. Diam est molestie massa commodo pulvinar aliquam arcu gravida. Dictum pretium senectus dolor vulputate tempor ac vel. Placerat proin sed risus at fusce aliquam. Convallis varius auctor quam fusce diam. Vulputate enim est nibh diam pellentesque. Adipiscing dolor turpis egestas velit sit feugiat ultricies.
                Id ac placerat dolor sem neque elit. Ut nisl turpis nisi etiam ac nibh.</p>
          </div>
        </div>
        <div className='skills'>
          <div className='titre1'>
            <h1 className='title'>My Skills</h1>
          </div>
          <div className='my-skills'>
            <div className='bar' id='skills1'>
              <CircularProgressbarWithChildren
                value={50} 
                styles={{ 
                root: {}, 
                path: {
                  stroke: `rgb(61, 34, 254)`,
                },
              }}
                >

                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                <img style={{ width: 60, marginTop: -5, marginBottom: 10 }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png" alt="doge" />
                <div style={{ fontSize: 12, marginTop: -5 }}>
                  <strong>50%</strong>
                </div>
              </CircularProgressbarWithChildren>
            </div>
            <div className='bar' id='skills2'>
            <CircularProgressbarWithChildren 
                value={80}
                styles={{ 
                  root: {}, 
                  path: {
                    stroke: `rgb(61, 34, 254)`,
                  },
                }} >
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                <img style={{ width: 60, marginTop: -5, marginBottom: 10 }} src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png" alt="doge" />
                <div style={{ fontSize: 12, marginTop: -5 }}>
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
                    stroke: `rgb(61, 34, 254)`,
                  },
                }}>
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                <img style={{ width: 60, marginTop: -5, marginBottom: 10 }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Devicon-css3-plain.svg/2048px-Devicon-css3-plain.svg.png" alt="doge" />
                <div style={{ fontSize: 12, marginTop: -5 }}>
                  <strong>70%</strong>
                </div>
              </CircularProgressbarWithChildren>
            </div>
            <div className='bar' id='skills4'>
            <CircularProgressbarWithChildren 
                value={20}
                styles={{ 
                  root: {}, 
                  path: {
                    stroke: `rgb(61, 34, 254)`,
                  },
                }}>
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                <img style={{ width: 60, marginTop: -5, marginBottom: 10 }} src="https://grafikart.fr/uploads/icons/react.svg" alt="doge" />
                <div style={{ fontSize: 12, marginTop: -5 }}>
                  <strong>20%</strong>
                </div>
              </CircularProgressbarWithChildren>
            </div>
            <div className='bar' id='skills5'>
            <CircularProgressbarWithChildren 
                  value={90}
                  styles={{ 
                    root: {}, 
                    path: {
                      stroke: `rgb(61, 34, 254)`,
                    },
                  }}>
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                <img style={{ width: 60, marginTop: -5, marginBottom: 10 }} src="https://hdf-formation.com/wp-content/uploads/2021/12/adobe-photoshop-logo-freelogovectors.net_.png" alt="doge"/>
                <div style={{ fontSize: 12, marginTop: -5 }}>
                  <strong>90%</strong>
                </div>
              </CircularProgressbarWithChildren>
            </div>
          </div>
          <div className='bottom-skills'>
            <div className='language'>
              <p className='bigtitle'>Language</p>
                <p>English</p>
                <div className='jaugeEN'></div>
                <p>French</p>
                <div className='jaugeFR'></div>
            </div>
            <div className='studies'>
              <p className='bigtitle'>Studies</p>
              <div className='study'>
                  <div className='ball'></div>
                  <div className='text-stud'>
                    <p className='place'>Bachelor Sport Event</p>
                    <p className='year'>2019 - 2021</p>
                  </div>
              </div>
              <div className='study'>
                  <div className='ball'></div>
                  <div className='text-stud'>
                    <p className='place'>Baccalauréat STI2D</p>
                    <p className='year'>2017</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className='xp'>
          <div className='bandeauxp'>
          <p className='bigtitle' id='workxp'>My work experience</p>
          </div>
          <div className='wrapper'>
            <div className='work' id="work1">
              <p>Conseiller de vente multimédia</p>
            </div>
            <div className='work' id="work2"></div>
            <div className='work' id="work3"></div>
            <div className='work' id="work4" ></div>
          </div>
        </div>
        <div className='contact'>

        </div>
    </div>
  );
}

export default App;
