import React from "react";
import styled from "styled-components";
import logo from "../assests/logo.png";
import Button from "../components/Button";
import Footer from "../components/Footer";
const IsStyledDiv = styled.div`
  background-color:#f6a19d;
  height:100vh;
  width:100vw;
  .IsStyled__container{
    padding:4rem 10rem;
    display:flex;
  }
  .IsStyled__wrapper{
    flex:1;
    algin-self:flex-start;
  }

  .IsStyled__sub-content{
    font-weight:200;
    letter-spacing:0.2rem;
    font-size:1rem;
    margin-top:2rem;
    margin-bottom:2rem;
    color:#6e6e6e;
  }
  .IsStyled__heading{
    font-size:4rem;
    color:#444;
  }
  .IsStyled__heading-2{
    font-size:3rem;
    font-weight:200;
    color:#4d4d4d;
  }
  .img--is{
    border-radius:50%;
  }


`;
const Is = () => {
  return (
    <>
      <IsStyledDiv>
        <div className="IsStyled__container">
          <div className="IsStyled__wrapper">
            <h3 className="IsStyled__sub-content">
            Namesty, my name is
            </h3>
            <h1 className="IsStyled__heading">
              Lakshmi Shree
            </h1>
            <h2 className="IsStyled__heading-2">
              I am a Full Stack Web Developer(MERN)
            </h2>
            <h3 className="IsStyled__sub-content">
            I am a 5th semester B.tech (mechanical engineering) student Nit Silchar  I am interested in web devlopment competative coding and machine learning , I know about HTML,CSS SASS, BOOTSTRAP,JAVASCRIPT, REACT JS, NODE JS , EXPRESS JS , MONGODB.<br /> I also have knowledge about C,C++,PYTHON, and also having knowledge about Data Structure And Algorithms
            </h3>
            <Button className="button" btnText="Explore My Portfolio" btnLink="/about"/>
          </div>
          <div className="IsStyled__img">
            <img src={ logo} alt="img" className="img--is"/>
          </div>
        </div>
      </IsStyledDiv>
      <Footer/>

      </>
  );
};

export default Is;
