import React from 'react'
import styled from 'styled-components';
import {AiFillGithub,AiFillInstagram,} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


const FooterStyleDiv = styled.div`
background-color:black;
margin-top:-2rem;
color:white;
.FooterStyle__Container{
  height:24rem;
}
.FooterStyle__wrapper{
  display:flex;
 
}
.FooterStyle__left{
  flex:1;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
}
.FooterStyle__left-heading{
  flex:1;
  color:#f59794;
  font-size:6rem;
  margin-top:3rem;
  
  
}
.FooterStyle__left-subheading{
  flex:1;
  font-weight:500;
  margin-top:1rem;
  letter-spacing:0.8rem;
}
.FooterStyle__right{
  flex:1;
  margin-top:3rem;
  display:flex;
  flex-direction:column;
  algin-items:center;
  justify-content:center;
}
.FooterStyle__right-para{
  font-size:1.2rem;
  font-weight:300;
  color:#c7c7c7;
  padding-bottom:1rem;
  align-self: center;
  letter-spacing:0.2rem;
}
.FooterStyle__right-subheading{
  margin-top:1.4rem;
  margin-bottom:1.4rem;
  font-size:1rem;
  align-self: center;
  font-weight:500;
  letter-spacing:0.4rem;
}
.FooterStyle__right-icons{
  margin-top:1.4rem;
}
.FooterStyle__icons-list{
  list-style:none;
  display:flex;
  justify-content:center;
  
}
`;
export default function Footer() {
  return (
    <FooterStyleDiv>
      <div className="FooterStyle__Container">
        <div className="FooterStyle__wrapper">
           <div className="FooterStyle__left">
            <h1 className="FooterStyle__left-heading">LAKSHMI</h1>
            <h5 className="FooterStyle__left-subheading">Lakshmi Shree</h5>
          </div>
          <div className="FooterStyle__right">
            <p1 className="FooterStyle__right-para">Looking for some good intership , i am good in frontend skill and also have knowledge about MERN stack. </p1>
            <h5 className="FooterStyle__right-subheading">Designed and created with ❤ by lakshmi shree</h5>
            <hr />
            <div className="FooterStyle__right-icons">
              <ul className="FooterStyle__icons-list">
                <li className="FooterStyle__icons-item">
                <a
                href="https://github.com/lakshmi1809shree"
                style={{ color: "white",fontSize:"4rem",padding:"2rem 2rem" }}
                target="_blank" 
                rel="noopener noreferrer"
                 >
                <AiFillGithub />
              </a>
                </li>
                <li className="FooterStyle__icons-item">
                <a
                href="https://www.linkedin.com/in/lakshmi-shree-4989461a9/"
                style={{ color: "white",fontSize:"4rem",padding:"2rem 2rem" }}
                target="_blank" 
                rel="noopener noreferrer"
                 >
                 <FaLinkedinIn />
              </a>
                </li>
                <li className="FooterStyle__icons-item">
                <a
                href="https://www.instagram.com/_lakshmi_shree_/"
                style={{ color: "white",fontSize:"4rem",padding:"2rem 2rem" }}
                target="_blank" 
                rel="noopener noreferrer"
                 >
                 <AiFillInstagram />
              </a>
                 </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </FooterStyleDiv>
  )
}
