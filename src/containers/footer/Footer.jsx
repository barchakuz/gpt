import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/H1.png';
import git from '../../assets/Git.png';

function Footer() {
  return (
   <>
    <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Behroze Aslam, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
      <img className='git' src={git} alt="git_logo" />

      <a className='button' href="https://github.com/barchakuz/gpt" target="_blank">Source Code</a>

      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Dha Phase Islamabad</p>
        <p>031-75037080</p>
        <p>behroze.barcha@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2024 GPT-3. All rights reserved.</p>
    </div>
  </div>
   </>
  )
}

export default Footer