import React from 'react';
import './brand.css'
import {google,shopify,slack,atlassian,dropbox} from './import'

function Brand() {
  return (
   <>
    <div className="gpt3__brand section__padding">
        <img src={google} alt="google" />
        <img src={shopify} alt="shopify" />
        <img src={slack} alt="slack" />
        <img src={atlassian} alt="atlassian" />
        <img src={dropbox} alt="dropbox" />
    </div>
   </>

  )
}

export default Brand