import React from 'react';
import styled from 'styled-components';

import PText from './PText';

const ContactBannerStyles = styled.div`
  padding: 2rem 0;
  margin-top:-5rem;
  color:#444;
  .contactBanner__wrapper {
    background-color: #f7abab;
    padding: 2rem 0rem;
    text-align: center;
  }
  .contactBanner__heading {
    font-size: 2rem;
    margin-bottom: 2rem;
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
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 1.4rem;
    }
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <PText>did you liked the above</PText>
          <h3 className="contactBanner__heading">Wanna See More </h3>
          <a
                href="https://fusion-30days-by-billi.netlify.app/"
                style={{textDecoration:"none"}}
                target="_blank" 
                rel="noopener noreferrer"
                 >
                <button className="button">View More</button>
              </a>
        </div>
      </div>
      </ContactBannerStyles>
      
  );
}