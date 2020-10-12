import React from 'react';

function App() {
  return (
    <div>
    <div className="container main-container">
      <div className="main-container-background" />
      <div className="row vh-10">
        <div className="col-md-2 offset-md-1 taskia-logo-text">
          Taskia
        </div>
        <div className="col-md-2 offset-7 try-free-button-column">
          <button className="try-free-button">
            <div className="try-free-button-inside">Try free</div>
          </button>
        </div>
      </div>
      <div className="row vh-90">
        <div className="col offset-md-1 second-row-col-one">
          <h1 className="bold-h1-special">Task management and lists Tool</h1>
          <p className="p-special">We believe that designing products and services in close partnership with our clients is the only way to have a real impact on their business.</p>
          <div className="row">
            <div className="col">
              <input className="special-input" placeholder="Name@company.com" />
            </div>
            <div className="col">
              <button className="try-it-free-button">
                <p>Try it free button</p>
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <img className="gift-giving-img" src="img/gift-giving.webp" />
        </div>
      </div>
      <div className="container">
        <div className="row vh-120">
          <div className="row row-three-row-one">
            Featured Service that We Provide
          </div>
          <div className="row">
            <div className="col-3">
              <div className="card card-1">
                <div className="row">
                  <div className="col-sm-6 mx-auto">
                    <div className="card-image-placeholder" />
                  </div>
                </div>
                <div className="row">
                  <div className="card-text">Keep tasks in one place</div>
                </div>
                <div className="row">
                  <div className="card-text-2">Save time, avoid losing work and information, delegate, and track tasks to stay on schedule</div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card-2 card">
                <div className="row">
                  <div className="col-sm-6 mx-auto">
                    <div className="card-image-placeholder" />
                  </div>
                </div>
                <div className="row">
                  <div style={{color: 'black'}} className="card-text">Keep tasks in one place</div>
                </div>
                <div className="row">
                  <div style={{color: 'black'}} className="card-text-2">Save time, avoid losing work and information, delegate, and track tasks to stay on schedule</div>
                </div>
              </div>
            </div>
            <div style={{marginBottom: "25%"}} className="col-3">
              <div className="card-3 card">
                <div className="row">
                  <div className="col-sm-6 mx-auto">
                    <div className="card-image-placeholder" />
                  </div>
                </div>
                <div className="row">
                  <div style={{color: 'black'}} className="card-text">Keep tasks in one place</div>
                </div>
                <div className="row">
                  <div style={{color: 'black'}} className="card-text-2">Save time, avoid losing work and information, delegate, and track tasks to stay on schedule</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container vh-75">
        <div className="row">
          <div className="col">
            <img className="taskly-dashboard-img" src="img/taskly-dashboard.webp" />
          </div>
          <div className="col">
            <div style={{marginLeft: '15%'}}>
              <h1 className="taskly-h1">Why do you need task management software?</h1>
              <p className="taskly-p">Do you waste time organizing sticky notes, searching your email and apps for to-dos, and figuring out what to work on first? Then you need one solution to prioritize your tasks, manage your time, and meet your deadlines.</p>
              <button className="taskly-button"><p>Learn more</p></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container vh-50" style={{ height: "90vh",maxWidth: '100%'}}>
      <div className="row">
        <div className="col-5 offset-2">
          <h1 className="bold-h1-special">Seamless Team Workflow &amp; Efficient</h1>
          <p className="p-special">Do you waste time organizing sticky notes, searching your email and apps for to-dos, and figuring out what to work on first? Then you need one solution to prioritize your tasks, manage your time, and meet your deadlines.</p>
        </div>
        <div className="col-4">
          <img  src="img/stats.webp" height="75%" />
        </div>
      </div>
    </div>
    <div className="container vh-70 max-width">
      <h1 className="bold-h1-special text-center">Trust us and feel free to try our service</h1>
      <h1 className="taskia-logo-text big-number-text">100 000</h1>
      <img className="profile-circle profile-circle-1-pos" src="img/profile-1.webp" />
      <img className="profile-circle profile-circle-2-pos" src="img/profile-1.webp" />
      <img className="profile-circle profile-circle-3-pos" src="img/profile-1.webp" />
      <img className="profile-circle profile-circle-4-pos" src="img/profile-1.webp" />
      <img className="profile-circle profile-circle-5-pos" src="img/profile-1.webp" />
      <img className="profile-circle profile-circle-6-pos" src="img/profile-1.webp" />
    </div>
    <div className="container vh-30">
      <h1 className="bold-h1-special text-center">Get better work done</h1>
      <h3 className="h3-special text-center">See why millions of people across 195 countries use Dash.</h3>
      <div className="row" style={{marginTop: '7%'}}>
        <div className="col offset-3" style={{marginLeft: '19%'}}>
          <input className="special-input" placeholder="Name@company.com" />
        </div>
        <div className="col">
          <button className="try-it-free-button">
            <p>Try it free button</p>
          </button>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
);
}

export default App;
