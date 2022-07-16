import React from 'react'
import {FaTwitter} from 'react-icons/fa'
import {FaExternalLinkAlt} from 'react-icons/fa'
import './Footer.scss'

const Footer = () => {
  return (
    <div className="app__footer" id="footer">
      <div className="container">
        <div className="app__footer-content">
          <div className="app__footer-content-left">
            © {new Date().getFullYear()} GENESIS
          </div>
          <div className="app__footer-content-right">
            <a target="_blank" rel="noreferrer" href="https://twitter.com/Genesis_smash"><FaTwitter /></a>
            <a target="_blank" rel="noreferrer" href="https://www.genesisgaming.gg"><FaExternalLinkAlt /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer