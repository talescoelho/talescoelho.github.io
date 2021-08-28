import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <a
        href="https://www.linkedin.com/in/tales-coelho/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={ faLinkedin } />
      </a>
      <a
        href="https://github.com/talescoelho"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={ faGithub } />
      </a>
    </footer>
  )
}

export default Footer
