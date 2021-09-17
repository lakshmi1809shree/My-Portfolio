import React from "react";
import Button from '../components/Button';
import styled from 'styled-components';
import giphy from '../assests/img-webdev/giphy.jpeg';
import foodrecipe from '../assests/img-webdev/foodrecipe.jpeg';
import natour from '../assests/img-webdev/Project.jpeg';
import breakingbad from '../assests/img-webdev/breakingbad.jpeg';
import bankist from '../assests/img-webdev/bankist.jpeg';
import sphere from '../assests/img-webdev/sphere.jpeg';
import realstate from '../assests/img-webdev/realstate.jpeg';
import  AboutBanner from "../components/AboutBanner";
import Footer from "../components/Footer";

const WebdevStyleDiv = styled.div`
 width:60vw;
 
 color:#c7c7c7;
 align:center;
 margin-left:20rem;
 margin-top:2rem;
 border-radius:0.5rem;
 left:800vw;
 margin-bottom:2rem;
 .WebdevStyleContainer{
   height:24rem;
   z-index:1000;  
 }
 .WebdevStyle__wrapper{
   display:flex;
   padding:1rem 0rem;
   height:20rem;
 background-color:#fdeae8;
 box-shadow: 5px 10px 18px #facbcb;
 }
 .WebdevStyle__img{
   flex:1;
   object-fit:cover;
   height:2rem;
 }
 .img{
  object-fit:cover;
  height:18rem;
  width:22rem;
  margin:0 1rem;
  border-radius:0.5rem;
 }
 .WebdevStyle__content{
   flex:2;
   margin-left:2rem
   padding:2rem 0rem;
   display:flex;
   flex-direction:column;
   justify-content:center;
 }
 .WebdevStyle__content-heading{
   font-size:1.8rem;
   margin-bottom:0.7rem;
   color:#f59794;
   text-decoration:none;
   letter-spacing:0.1rem;
   font-weight:800;
  
 }
 .WebdevStyle__content-para{
   letter-spacing:0.1rem;
   font-weight:200;
    color:#444;
    font-style:italic;
 }
 .WebdevStyle__content-list{
   display:flex;
   flex-direction:column;
 }
 .WebdevStyle__content-list-heading{
   font-size:1.2rem;
   margin-top:1rem;
   letter-spacing:0.1rem;
   font-weight:200;
    color:#444;
    text-decoration:none;
    
 }
 .WebdevStyle__content-list--items{
   list-style:numeric;
   letter-spacing:0.1rem;
   font-weight:200;
    color:#444;
    margin-left:2rem;
    margin-top:0.5rem;
   margin-bottom:0.5rem;
   font-style:italic;

 }
 .button {
  text-decoration:none;   
background-color: #facbcb;
color: #444;
font-size: 1rem;
display: inline-block;
outline: none;
border: none;
padding: 1rem 4rem;
border-radius: 8px;
cursor: pointer;
&:hover {
    background-color:#fff;
    transition: all 0.2s ease-in-out;
    border: 4px solid  #f59794;
    color: #f59794;
  }
}
`;
const Webdev = () => {
  return (
    <>
      <WebdevStyleDiv>
        <div className="WebdevStyleContainer">
          <div className="WebdevStyle__wrapper">
           <div className="WebdevStyle__img">
             <img src={sphere} alt="image" className="img"/> 
            </div>
            <div className="WebdevStyle__content">
              <h3 className="WebdevStyle__content-heading">
               Pure CSS Sphere 
              </h3>
              <p className="WebdevStyle__content-para">
               This is inspired from a pen on codepen.io , i created this using just html and css. properties like transform transition translate are mainly used and for motion pulsate is used, i added colors manully in it . which gives it a good color variation.
              </p>
              <div className="WebdevStyle__content-list">
                <h5 className="WebdevStyle__content-list-heading">skill Used :</h5>
                <ul className="WebdevStyle__content-list--items">
                  <li className="WebdevStyle__content-list--item">
                    HTML
                  </li>
                  <li className="WebdevStyle__content-list--item">
                     CSS
                  </li>
                </ul>
                <a
                href="https://css-sphere-billi.netlify.app/"
                style={{textDecoration:"none"}}
                target="_blank" 
                rel="noopener noreferrer"
                 >
                <button className="button">View</button>
              </a>
              </div>
            </div>
          </div>
        </div>
        <div className="WebdevStyleContainer">
          <div className="WebdevStyle__wrapper">
           <div className="WebdevStyle__img">
             <img src={bankist} alt="image" className="img"/> 
            </div>
            <div className="WebdevStyle__content">
              <h3 className="WebdevStyle__content-heading">
               Bankist
              </h3>
              <p className="WebdevStyle__content-para">
               i learnt to desgin this website in my course (from udemy) . this website uses the effects like lazy loading slow scrolling and slider , carousel etc . this uses all the properties and methds of javascript . 
              </p>
              <div className="WebdevStyle__content-list">
                <h5 className="WebdevStyle__content-list-heading">Skills Used :</h5>
                <ul className="WebdevStyle__content-list--items">
                  <li className="WebdevStyle__content-list--item">
                    HTML
                  </li>
                  <li className="WebdevStyle__content-list--item">
                     CSS
                  </li>
                  <li className="WebdevStyle__content-list--item">
                     JAVASCRIPT
                  </li>
                </ul>
                <a
                href="https://bankwala-billi.netlify.app/"
                style={{textDecoration:"none"}}
                target="_blank" 
                rel="noopener noreferrer"
                 >
                <button className="button">View</button>
              </a>
              </div>
            </div>
          </div>
        </div>
        <div className="WebdevStyleContainer">
          <div className="WebdevStyle__wrapper">
           <div className="WebdevStyle__img">
             <img src={giphy} alt="image" className="img"/> 
            </div>
            <div className="WebdevStyle__content">
              <h3 className="WebdevStyle__content-heading">
               GIPHY
              </h3>
              <p className="WebdevStyle__content-para">
               this a api based project which fetech the data from giphy api and shw the result on screen , this will also work when we give some keywords to it . this project mainly uses react and api feteching.
              </p>
              <div className="WebdevStyle__content-list">
                <h5 className="WebdevStyle__content-list-heading">Skills Used :</h5>
                <ul className="WebdevStyle__content-list--items">
                  <li className="WebdevStyle__content-list--item">
                    REACT is mainly used
                  </li>
                </ul>
                <a
                href="https://giphy-api-react-app.herokuapp.com/"
                style={{textDecoration:"none"}}
                target="_blank" 
                rel="noopener noreferrer"
                 >
                <button className="button">View</button>
              </a>
              </div>
            </div>
          </div>
        </div>
        <div className="WebdevStyleContainer">
          <div className="WebdevStyle__wrapper">
           <div className="WebdevStyle__img">
             <img src={breakingbad} alt="image" className="img"/> 
            </div>
            <div className="WebdevStyle__content">
              <h3 className="WebdevStyle__content-heading">
               Breaking Bad
              </h3>
              <p className="WebdevStyle__content-para">
              this a api based project which fetech the data from breaking bad cast api and shw the result on screen , this will also work when we give some keywords to it . this project mainly uses react and api feteching.
              </p>
              <div className="WebdevStyle__content-list">
              <h5 className="WebdevStyle__content-list-heading">Skills Used :</h5>
                <ul className="WebdevStyle__content-list--items">
                  <li className="WebdevStyle__content-list--item">
                    REACT is mainly used
                  </li>
                </ul>
                <a
                href="https://breaking-bad-api-react-app.herokuapp.com/"
                style={{textDecoration:"none"}}
                target="_blank" 
                rel="noopener noreferrer"
                 >
                <button className="button">View</button>
              </a>
              </div>
            </div>
          </div>
        </div>
        <div className="WebdevStyleContainer">
          <div className="WebdevStyle__wrapper">
           <div className="WebdevStyle__img">
             <img src={foodrecipe} alt="image" className="img"/> 
            </div>
            <div className="WebdevStyle__content">
              <h3 className="WebdevStyle__content-heading">
               Food Recipe App
              </h3>
              <p className="WebdevStyle__content-para">
              this a api based project which fetech the data from food recipe api and shw the result on screen , this will also work when we give some keywords to it . this project mainly uses react and api feteching.it also shows the complete recipe after clicking on photos
              </p>
              <div className="WebdevStyle__content-list">
              <h5 className="WebdevStyle__content-list-heading">Skills Used :</h5>
                <ul className="WebdevStyle__content-list--items">
                  <li className="WebdevStyle__content-list--item">
                    REACT is mainly used
                  </li>
                </ul>
                <a
                href="https://foodrecipe-react-app.herokuapp.com/"
                style={{textDecoration:"none"}}
                target="_blank" 
                rel="noopener noreferrer"
                 >
                <button className="button">View</button>
              </a>
              </div>
            </div>
          </div>
        </div>
        <div className="WebdevStyleContainer">
          <div className="WebdevStyle__wrapper">
           <div className="WebdevStyle__img">
             <img src={realstate} alt="image" className="img"/> 
            </div>
            <div className="WebdevStyle__content">
              <h3 className="WebdevStyle__content-heading">
               Realstate 
              </h3>
              <p className="WebdevStyle__content-para">
                this is a realstate company landing page this website uses the modern css grid and sass, this is completely responsive and also contains a beautiful gallery component
              </p>
              <div className="WebdevStyle__content-list">
                <h5 className="WebdevStyle__content-list-heading">Skills Used :</h5>
                <ul className="WebdevStyle__content-list--items">
                  <li className="WebdevStyle__content-list--item">
                    HTML
                  </li>
                  <li className="WebdevStyle__content-list--item">
                     CSS
                  </li>
                  <li className="WebdevStyle__content-list--item">
                     SASS
                  </li>
                </ul>
                <a
                href="https://realstate-landing-page-billi.netlify.app/"
                style={{textDecoration:"none"}}
                target="_blank" 
                rel="noopener noreferrer"
                 >
                <button className="button">View</button>
              </a>
              </div>
            </div>
          </div>
        </div>
        <div className="WebdevStyleContainer">
          <div className="WebdevStyle__wrapper">
           <div className="WebdevStyle__img">
             <img src={natour} alt="image" className="img"/> 
            </div>
            <div className="WebdevStyle__content">
              <h3 className="WebdevStyle__content-heading">
               Natour
              </h3>
              <p className="WebdevStyle__content-para">
               this a travel and tour agency landing page uses all the modern css animation properties , clip path properties. this uses sass mainly. 
              </p>
              <div className="WebdevStyle__content-list">
                <h5 className="WebdevStyle__content-list-heading">Skills Used :</h5>
                <ul className="WebdevStyle__content-list--items">
                  <li className="WebdevStyle__content-list--item">
                    HTML
                  </li>
                  <li className="WebdevStyle__content-list--item">
                     CSS
                  </li>
                  <li className="WebdevStyle__content-list--item">
                     SASS
                  </li>
                </ul>
                <a
                href="https://natour-tour-web.netlify.app/"
                style={{textDecoration:"none"}}
                target="_blank" 
                rel="noopener noreferrer"
                 >
                <button className="button">View</button>
              </a>
              </div>
            </div>
          </div>
        </div>
      </WebdevStyleDiv>
      <AboutBanner />
      <Footer/>
      </>
  );
};

export default Webdev;
