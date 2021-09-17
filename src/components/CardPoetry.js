import React,{useState} from 'react'
import TinderCard from 'react-tinder-card';
import  './PoetryCard.css';
import  UrlOne   from'../assests/img-poetry/poetry-img-1.png';
import UrlTwo from'../assests/img-poetry/poetry-img-2.png';
import UrlThree from'../assests/img-poetry/poetry-img-3.png';
import UrlFour from '../assests/img-poetry/poetry-img-4.png';
import UrlFive from'../assests/img-poetry/poetry-img-5.png';
import UrlSix from '../assests/img-poetry/poetry-img-6.png';
import UrlSeven from'../assests/img-poetry/poetry-img-7.png';
import UrlEight from'../assests/img-poetry/poetry-img-8.png';
import UrlNine from'../assests/img-poetry/poetry-img-9.png';

function PoetryCard() {
    const [people, setPeople] = useState([
        {
            name:"9",
            url:UrlNine,
        },
        {
            name:"8",
            url:UrlEight,
        },
        {
            name:"7",
            url:UrlSeven,
        },
        {
            name:"6",
            url:UrlSix,
        },
        {
            name:"5",
            url:UrlFive,
        },
        {
            name:"4",
            url:UrlFour,
        },
        {
            name:"3",
            url:UrlThree,
        },
        {
            name:"2",
            url:UrlTwo,
        },
        {
            name:"1",
            url:UrlOne,
        },
    ]);
    return (
        <div>
            <div className="PoetryCard__cardContainer" >
               {people.map(person => (
                    <TinderCard key={person.name} preventSwipe={['up', 'down']}    className="swipe">
                        <div
                        style={{backgroundImage:`url(${person.url})`}}        className="card-poetry"></div>
                    </TinderCard>
                ))}
            </div>
           
        </div>
    )
}

export default PoetryCard;

