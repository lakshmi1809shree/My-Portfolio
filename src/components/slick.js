import React, { Component } from "react";
import Slider from "react-slick";
import {DiHtml5,DiSass,DiJavascript1,DiMongodb,DiPython,DiCss3,DiNodejs} from 'react-icons/di';
import { GrReactjs } from 'react-icons/gr';
import { FaBootstrap } from "react-icons/fa";
import './slick.css';

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div className="AboutSlick-slider">
        <h2 className="AboutSlick__header">Skills</h2>
        <Slider className="AboutSlick__slider--comp" {...settings}>
          <div className="slider-item1 item">
            <DiHtml5/>
          </div>
          <div className="slider-item2 item">
            <DiCss3/>
          </div>
          <div className="slider-item3 item">
            <FaBootstrap/>
          </div>
          <div className="slider-item4 item">
           <DiSass/>
          </div>
          <div className="slider-item5 item">
           <DiJavascript1/>
          </div>
          <div className="slider-item6 item">
            <DiPython/>
          </div>
          <div className="slider-item7 item">
            <GrReactjs/>
          </div>
          <div className="slider-item8 item">
            <DiNodejs/>
          </div>
          <div className="slider-item9 item">
            <DiMongodb/>
          </div>
        </Slider>
      </div>
    );
  }
}