import React from "react";
import Button from '../components/Button';
import styled from 'styled-components';
import purifier from '../assests/img-fusion/purifier.png'
import chess from '../assests/img-fusion/chess v2 5.png'
import amongUs from '../assests/img-fusion/among_us.jpg'
import FusionBanner from '../components/FusionBanner'
import Footer from "../components/Footer";

const FusionStyleDiv = styled.div`
 width:60vw;
 
 color:#c7c7c7;
 align:center;
 margin-left:20rem;
 margin-top:2rem;
 border-radius:0.5rem;
 left:800vw;
 margin-bottom:2rem;
 .FunsionStyleContainer{
   height:24rem;
   z-index:1000;  
 }
 .FusionStyle__wrapper{
   display:flex;
   padding:1rem 0rem;
   height:20rem;
 background-color:#fdeae8;
 box-shadow: 5px 10px 18px #facbcb;
 }
 .FusionStyle__img{
   flex:1;
   object-fit:cover;
   height:2rem;
 }
 .img{
  object-fit:cover;
  height:18rem;
  margin:0 1rem;
  border-radius:0.5rem;
 }
 .FusionStyle__content{
   flex:2;
   margin-left:2rem
   padding:2rem 0rem;
   display:flex;
   flex-direction:column;
   justify-content:center;
 }
 .FusionStyle__content-heading{
   font-size:1.8rem;
   margin-bottom:0.7rem;
   color:#f59794;
   text-decoration:underline;
   letter-spacing:0.1rem;
   font-weight:200;
 }
 .FusionStyle__content-para{
   letter-spacing:0.1rem;
   font-weight:200;
    color:#444;
 }
 .FusionStyle__content-list{
   display:flex;
   flex-direction:column;
 }
 .FusionStyle__content-list-heading{
   font-size:1.2rem;
   margin-top:1rem;
   letter-spacing:0.1rem;
   font-weight:200;
    color:#444;
    text-decoration:underline;
 }
 .FusionStyle__content-list--items{
   list-style:numeric;
   letter-spacing:0.1rem;
   font-weight:200;
    color:#444;
    margin-left:2rem;
    margin-top:0.5rem;
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
`;

const Fusion360 = () => {
  return (
    <>
    
      <FusionStyleDiv>
        <div className="FunsionStyleContainer">
          <div className="FusionStyle__wrapper">
           <div className="FusionStyle__img">
             <img src={purifier} alt="purifier-image" className="img"/> 
            </div>
            <div className="FusionStyle__content">
              <h3 className="FusionStyle__content-heading">
               Water Purifier 
              </h3>
              <p className="FusionStyle__content-para">
                I desgined this water purifier in fusion 360 , in the form enviroment , I reached upto this after my third attempt.this model is not that perfect it contains some mistake, hope i will rectify this mistake in my upcoming desgins.
              </p>
              <div className="FusionStyle__content-list">
                <h5 className="FusionStyle__content-list-heading">Tool Used :</h5>
                <ul className="FusionStyle__content-list--items">
                  <li className="FusionStyle__content-list--item">
                    desgin enviroment
                  </li>
                  <li className="FusionStyle__content-list--item">
                     form enviroment
                  </li>
                  <li className="FusionStyle__content-list--item">
                     render enviroment
                  </li>
                </ul>
                <a
                href="https://www.linkedin.com/posts/lakshmi-shree-4989461a9_100daysoflearning-udemy-udemycourses-activity-6821778300550164480-sUUF"
                style={{textDecoration:"none"}}
                target="_blank" 
                rel="noopener noreferrer"
                 >
                <button className="button">Watch Video</button>
              </a>
              </div>
            </div>
          </div>
        </div>
        <div className="FunsionStyleContainer">
          <div className="FusionStyle__wrapper">
           <div className="FusionStyle__img">
             <img src={chess} alt="purifier-image" className="img"/> 
            </div>
            <div className="FusionStyle__content">
              <h3 className="FusionStyle__content-heading">
               Chess
              </h3>
              <p className="FusionStyle__content-para">
                I desgined this chess in fusion 360 , in the desgin enviroment, this is created using canvas , and uts very easy to create , software is really awesome ,i leant this from a free udemy course .
              </p>
              <div className="FusionStyle__content-list">
                <h5 className="FusionStyle__content-list-heading">Tool Used :</h5>
                <ul className="FusionStyle__content-list--items">
                  <li className="FusionStyle__content-list--item">
                    desgin enviroment
                  </li>
                  <li className="FusionStyle__content-list--item">
                     form enviroment
                  </li>
                  <li className="FusionStyle__content-list--item">
                     render enviroment
                  </li>
                </ul>
                <a
                href="https://www.linkedin.com/posts/lakshmi-shree-4989461a9_100daysoflearning-fusion360-3dmodeling-activity-6818748261969608704-iuHk"
                style={{textDecoration:"none"}}
                target="_blank" 
                rel="noopener noreferrer"
                 >
                <button className="button">Watch Video</button>
              </a>
              </div>
            </div>
          </div>
        </div>
        <div className="FunsionStyleContainer">
          <div className="FusionStyle__wrapper">
           <div className="FusionStyle__img">
             <img src={amongUs} alt="purifier-image" className="img"/> 
            </div>
            <div className="FusionStyle__content">
              <h3 className="FusionStyle__content-heading">
               Among Us
              </h3>
              <p className="FusionStyle__content-para">
                I desgined this Among us in fusion 360 , in the form enviroment. we use to play among us in lockdown with our friends so i thought to create imposter caught scene in fusion360.
              </p>
              <div className="FusionStyle__content-list">
                <h5 className="FusionStyle__content-list-heading">Tool Used :</h5>
                <ul className="FusionStyle__content-list--items">
                  <li className="FusionStyle__content-list--item">
                    desgin enviroment
                  </li>
                  <li className="FusionStyle__content-list--item">
                     form enviroment
                  </li>
                  <li className="FusionStyle__content-list--item">
                     render enviroment
                  </li>
                </ul>
                <a
                href="https://www.linkedin.com/posts/lakshmi-shree-4989461a9_100daysoflearning-fusion360-autodesk-activity-6815892519767818240-ZLR_"
                style={{textDecoration:"none"}}
                target="_blank" 
                rel="noopener noreferrer"
                 >
                <button className="button">Watch Video</button>
              </a>
              </div>
            </div>
          </div>
        </div>
      </FusionStyleDiv>
      <FusionBanner />
      <Footer/>
      </>
  );
};

export default Fusion360 ;
