import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
  text-align: center;
  p {
      margin-top:-8rem;
      padding:top:-8rem;
    font-family: 'RobotoMono Regular';
    font-size: 1.7rem;
    color:#444;
  }
  h2 {
    font-family: 'Montserrat Bold';
    font-size: 3rem;
    margin-top:1rem;
    margin-bottom:-4rem;
    color:#444;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 0.5rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export default function SectionTitle({
  subheading = 'Need Subheading',
  heading = 'need heading',
}) {
  return (
    <SectionTitleStyle className="section-title">
      <p>{subheading}</p>
      <h2>{heading}</h2>
    </SectionTitleStyle>
  );
}