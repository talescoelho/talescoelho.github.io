import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

function Header({ setClassMode, classMode }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <header>
      <Modal
        isOpen={ modalIsOpen }
        className="header-modal"
      >
        <button onClick={ closeModal } className="button-close">
          <FontAwesomeIcon icon={ faTimesCircle } />
        </button>
        <ul className="list-links">
          <div>
            <Link to="/" onClick={ closeModal }>
              <li className="li-1">Home</li>
            </Link>
            <Link to="/about" onClick={ closeModal }>
              <li className="li-2">About</li>
            </Link>
            <Link to="/projects" onClick={ closeModal }>
              <li className="li-3">Projects</li>
            </Link>
            <Link to="/contact" onClick={ closeModal }>
              <li className="li-4">Contact</li>
            </Link>
          </div>
          <div onClick={ closeModal }>
            <li className="li-5">
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
              <a
                href="mailto:tales-coelho@live.com"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={ faEnvelope } />
              </a>
            </li>
          </div>
        </ul>
      </Modal>
      <section className="header-left">
        <button
          className="gradient"
          onClick={openModal}
        >
          <FontAwesomeIcon icon={ faBars || faCode } />
        </button>
      </section>
      <section className="header-right">
        <button
          className="gradient"
          onClick={ () => setClassMode(!classMode) }
        >
          <FontAwesomeIcon icon={ classMode ? faSun : faMoon } />
        </button>
      </section>
    </header>
  )
}

export default Header
