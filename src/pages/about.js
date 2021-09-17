import React from "react";
import Me from "../assests/1.png";
import styled from "styled-components";
import Button from '../components/Button';
import Footer from "../components/Footer";
import AboutBanner from "../components/AboutBanner";
import AutoPlay from "../components/slick";
import TimelineItems from "../components/TimelineItems";

const AboutStyledDiv = styled.div`
   background-color:#f8b6b3;
    display: flex;
   justify-content: center;
   padding:4rem 1rem 2rem 2rem;
   align-items: center;
   .AboutStyle__container{
     width:80vw;
     height:60vh;
   }
   .AboutStyled__wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
   }
   .AboutStyled__content{
     flex:3;
     letter-spacing:0.1rem;
      color:#444;
      display:flex;
      flex-direction:column; 
   }
   .AboutStyled__big{
     font-size:2rem;
   }
   .AboutStyled__content--para{
     width:600px;
     font-weight:400;
     margin-top:-2rem;
     margin-bottom:2rem;
   }
   .AboutStyled__content--para2{
      font-style:italic;
    font-size:1.2rem;
   }
   .AboutStyle__image{
     flex:1;
     align-self:center;
     width:70rem;
   }
   .img-about{
     width:400px;
     object-fit:cover;
     border-radius:9px;
   }
`;

const About = () => {
  return (
    <><AboutStyledDiv>
      <div className="AboutStyle__container">
        <div className="AboutStyled__wrapper">
          <div className="AboutStyled__content">
            <h3 className="AboutStyled__content--para"> <span className="AboutStyled__big">Hii</span> I am Lakshmi Shree, 5th semester B.tech (mechanical engineering) student Nit Silchar  I am interested in web devlopment competative coding and machine learning , I know about HTML,CSS SASS, BOOTSTRAP,JAVASCRIPT, REACT JS, NODE JS , EXPRESS JS , MONGODB.<br /> I also have knowledge about C,C++,PYTHON, and also having knowledge about Data Structure And Algorithms.Being a mechanical engineering student i also have knowledge about fusion360, solidworks and autocad. I am looking forward tolearn about Machine learning and AI.</h3>
            <h4 className="AboutStyled__content--para2">I am also looking for some internship<br /> oppurtunity and industry level projects</h4>
            <Button btnText="Contact Now" btnLink="/contact" />
          </div>
          <div className="AboutStyle__image">
            <img className="img-about" src={Me} alt="lakshmi image" />
          </div>
        </div>
      </div>
    </AboutStyledDiv>
      <TimelineItems/>
      <AutoPlay/>
      <AboutBanner />
      <Footer /></>
  );
};

export default About;
