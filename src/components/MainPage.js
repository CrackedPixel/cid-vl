 import React from 'react'
 import Pic1 from '../img/pic1.jpg';
 import Pic2 from '../img/pic2.jpg';
 import Pic3 from '../img/pic3.jpg';
 import Pic4 from '../img/pic4.jpg';

 import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

 
 export const MainPage = () => {
   return (
     <section className="mainPage">
       <article className="mp__nameNumber">
        <h3>geometrum</h3>
        <h3>+7 (945) 65-83-663</h3>
       </article>
       <article className="mp__photoGrid">
        <div className="leftSide">
          <div className="textSection">
            <p>Small text above heading</p>
            <h1>geometrum</h1>
            <span>sub-text under heading</span>
          </div>
          <div className="photoSection">
            <img src={Pic2} alt="#" />
            <img src={Pic3} alt="#" />
            <img src={Pic4} alt="#" />
          </div>
        </div>
        <div className="rightSide">
          <img src={Pic1} alt="#" />
        </div>
       </article>
       <article className="mp__buttons">
        <button className="leftBtn">Some button text</button>
        <div className="rightBtn__container">
          <ArrowRightAltIcon className="arrowIcon-flipped flip-x" />
          <span>Some text here</span>
          <ArrowRightAltIcon className="arrowIcon" />
        </div>
       </article>
     </section>
   )
 }
 