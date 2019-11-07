import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';


import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

export const Header = () => {
  return (
    <header>
      <section className="header__title">Moscow</section>
      <section className="header__urls">
        <BrowserRouter>
          <Link className="header__link" to="/">Link 1</Link>
          <Link className="header__link" to="/">Link 2</Link>
          <Link className="header__link" to="/">Link 3</Link>
        </BrowserRouter>
        
      </section>
      <section className="header__social">
        <TwitterIcon className="social-icon" />
        <FacebookIcon className="social-icon" />
        <InstagramIcon className="social-icon" />
      </section>
    </header>
  )
}
