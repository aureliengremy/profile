import me from './assets/images/me-demo-day.png'
import github from './assets/icones/w-icons8-github-60.png'
import linkedin from './assets/icones/w-icons8-linkedin-60.png'
import twitter from './assets/icones/w-icons8-twitter-60.png'
import codepen from './assets/icones/w-icons8-codepen-50.png'
import dev from './assets/icones/w-icons8-dev-64.png'

function App() {
  return (
    <div className="container-fluid">
      <div className="row screen-row">
        <div className="left col-md-4 col-12">
          <div className="container h-100">
            <div className="row left-inner h-100">
              <div className="profile col-md-12 col-sm-6 col-12 my-3">
                <div className="profile-img mb-3">
                  <img src={me} className="" alt="profile" width="150px" height="150px"/>
                </div>
                <div className="profile-title">
                  <h1>Je suis <strong>Aurelien Gremy</strong>,</h1>
                  <h2> développeur full-stack</h2>
                </div>
              </div>
              <div className="social col-md-12 col-sm-6 col-12 mb-3">
                <div className="social-icon">
                  <img src={github} alt="github-icone"/>
                  <img src={linkedin} alt="linkedin-icone"/>
                  <img src={twitter} alt="twitter-icone"/>
                  <img src={codepen} alt="codepen-icone"/>
                  <img src={dev} alt="dev-icone"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right col-md-8 col-12">
          <div className="container scroll-container">
            <div className="scroll-section row section-description mt-2 pt-4">
              <h3>Qui suis-je ?</h3>
              <p>Titulaire d’une maîtrise en e-Business et e-Marketing, complétée par ma passion pour Internet et l’informatique.</p>
              <p>Ma détermination est le carburant de ma motivation, de nature sportive, j’ai su développer la rigueur et discipline nécessaires pour atteindre mes objectifs et apprendre toujours plus.</p>
            </div>
            <div className="scroll-section row section-competence my-3 pt-4">
              <h3>Compétence</h3>
            </div>
            <div className="scroll-section row section-project my-3 pt-4">
              <h3>Project</h3>
              <div className="cards">
                <div className="card">
                  card 1
                </div>
                <div className="card">
                  card 2
                </div>
                <div className="card">
                  card 3
                </div>
                <div className="card">
                  card 4
                </div>
                <div className="card">
                  card 5
                </div>
              </div>
            </div>
            <div className="scroll-section row section-form my-3 pt-4">
              <h3>Form</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
);
}

export default App;
