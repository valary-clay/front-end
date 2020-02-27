import React from 'react';
import { Link } from 'react-router-dom';


import 'bulma/css/bulma.css';
import './styles.scss';


const LandingPage = () => {

  return (
    
        <div className="hero is-fullheight" id="hero">
        
          <nav className="hero-head">
            <div className="columns is-mobile is-marginless heading has-text-weight-bold">
              <div className="column left">
                <div className="landing-logo">One Acre</div>
              </div>
              <div className="column right auth-btn">
                <Link to="/login" className="navbar-item desktop has-text-black desktop">LOGIN</Link>
                <Link to="/signup" className="navbar-item desktop has-text-black desktop">SIGN UP</Link>
              </div>
            </div>
          </nav>
          
          <header className="hero-body">
            <div className="is-overlay has-text-centered single-spaced" style={{top: "92px"}}>
              <h1 className="title is-1" style={{color: '#fff'}}>Fund</h1>
              <h2 className="title is-2" style={{color: '#fff'}}>A Farmer</h2>
            </div>
          </header>
          
          <main className="hero-foot center" style={{padding: "2rem", marginTop: '2rem'}}>
            <div  style={{width: "30rem"}}>
              <div className="center-column">
                <p className="has-text-centered" style={{color: '#fff'}}>
                  A crowdfunding platform for helping farmers get easy access to funds to support their activities
                </p>
              </div>
              <div  className="center-column" style={{margin: '2rem auto', width: '20rem'}}>
                <Link to="/signup" className="button is-success is-inverted is-rounded is-outlined has-text-weight-bold"
                  style={{width: "100%", border: "0.15em solid white"}}>
                  Start Now
                </Link>
              </div>
            </div>
          </main>
          
        </div>
  )
}

export default LandingPage;
