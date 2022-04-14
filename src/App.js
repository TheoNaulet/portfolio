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
            <div className='skills1'>
              <CircularProgressbarWithChildren value={66}>
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                <img style={{ width: 60, marginTop: -5, marginBottom: 10 }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png" alt="doge" />
                <div style={{ fontSize: 12, marginTop: -5 }}>
                  <strong>66%</strong> dammmn
                </div>
              </CircularProgressbarWithChildren>;
              <p className='note'>4.5</p>
              <p>JavaScript</p>
            </div>
            <div className='skills2'>
              <p className='note'>4.5</p>
              <p>JavaScript</p>
            </div>
            <div className='skills3'>
              <p className='note'>4.5</p>
              <p>JavaScript</p>
            </div>
            <div className='skills1'>
              <p className='note'>4.6</p>
              <p>JavaScript</p>
            </div>
            <div className='skills1'>
              <p className='note'>4.6</p>
              <p>JavaScript</p>
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
                    <p className='place'>Isefac Bachelor</p>
                    <p className='year'>2019 - 2021</p>
                  </div>
              </div>
              <div className='study'>
                  <div className='ball'></div>
                  <div className='text-stud'>
                    <p className='place'>Lycée Jean Mermoz</p>
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
            <div className='work' id="work1"></div>
            <div className='work' id="work2"></div>
            <div className='work' id="work3"></div>
            <div className='work' id="work4" ></div>
          </div>
        </div>
    </div>
  );
}

export default App;
