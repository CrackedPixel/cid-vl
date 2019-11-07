import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <section className="header__title">Moscow</section>
      <section className="header__urls hideon-s">
        <BrowserRouter>
          <Link className="header__link" to="/">Link 1</Link>
          <Link className="header__link" to="/">Link 2</Link>
          <Link className="header__link" to="/">Link 3</Link>
        </BrowserRouter>
        
      </section>
      <section className="header__social hideon-s">3</section>
    </header>
  )
}
