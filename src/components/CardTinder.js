import React,{useState} from 'react'
import TinderCard from 'react-tinder-card';
import  './CardTinder.css';
import  UrlOne   from'../assests/img/art-img-1.png';
import UrlTwo from'../assests/img/art-img-2.png';
import UrlThree from'../assests/img/art-img-3.png';
import UrlFour from '../assests/img/art-img-4.png';
import UrlFive from'../assests/img/art-img-5.png';
import UrlSix from '../assests/img/art-img-6.png';
import UrlSeven from'../assests/img/art-img-7.png';
import UrlEight from'../assests/img/art-img-8.png';
import UrlNine from'../assests/img/art-img-9.png';
import UrlTen from'../assests/img/art-img-10.png';
import UrlEleven from'../assests/img/art-img-11.png';

function CardTinder() {
    const [people, setPeople] = useState([
        {
            name: "11",
            url:UrlEleven,
        },
        {
            name:"10",
            url:UrlTen,
        },
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
            <div className="CardTinder__cardContainer" >
               {people.map(person => (
                    <TinderCard key={person.name} preventSwipe={['up', 'down']}    className="swipe">
                        <div
                        style={{backgroundImage:`url(${person.url})`}}        className="card"></div>
                    </TinderCard>
                ))}
            </div>
           
        </div>
    )
}

export default CardTinder;

