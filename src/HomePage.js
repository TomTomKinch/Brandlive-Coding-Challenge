import React, { useState, useEffect } from 'react';
import './HomePage.css';
import './Grid.css';
import Wow from './Images/Create-Virtual-Events--Walkthrough--Gabi-.png';
import Sam from './Images/1634838255518_w1801_h1801.jpg'
import Thomas from './Images/1634838272411_w1285_h1285.jpg';
import Gabi from './Images/1634838332068_w1285_h1285.jpg';
import Adidas from './Images/1634849040142_w628_h314.png';
import HerbaLife from './Images/1634849095496_w628_h314.png';
import Levis from './Images/1634849119185_w628_h314.png';
import Kohler from './Images/1634849130871_w628_h314.png';
import GoPro from './Images/1634849109015_w628_h314.png';
import Meredith from './Images/1634849147967_w628_h314.png';
import BrandliveLogo from './Images/Create-Virtual-Events--Walkthrough--Gabi-(1).png';
import BrandliveStream from './Images/Screen Shot 2021-10-26 at 12.29.07 PM.png';

function App() {

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(()=> { 

    const eventDate = new Date("11/03/2021 10:00:00");
    
    const interval = setInterval(() => {
      const today = new Date();
      const currentTime = eventDate.getTime() - today.getTime();

      const d = Math.floor(currentTime / (1000 * 60 * 60 * 24));
      const h = Math.floor((currentTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((currentTime % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((currentTime % (1000 * 60)) / 1000);
      setDays(d);
      setHours(h);
      setMinutes(m);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }

    }, 1000)

    return () => clearInterval(interval);

  }, [])

  const expertsArray = [
    { "name":"Sam Kolbert-Hyle", 
      "title":"President & CEO of Brandlive", 
      "description":"Under Sam's leadership, Brandlive was recognized by Fast Company as the #1 most...",
      "image": Sam
    },
    { "name":"Thomas Iwasaki", 
      "title":"Chief Product Officer", 
      "description":"Thomas expertly leads all marketing and communication efforts, as well as the product...",
      "image": Thomas
    },
    { "name":"Gabi Hague", 
      "title":"Product Marketing Manager", 
      "description":"FPO",
      "image": Gabi
    }
  ];

  const customersArray = [
    {"image": Adidas}, 
    {"image": HerbaLife}, 
    {"image": Levis}, 
    {"image": Kohler}, 
    {"image": GoPro}, 
    {"image": Meredith}
  ]


  return (
    <div className="grid-container">
        <div className="grid-event-time">
          <span className="Small-Title">STARTS ON NOV 03, 2021 AT: 10:00 AM PDT</span>
          <br></br>
          <span className="Main-Title">Create standout virtual events, minus the cost and stress.</span>
          <br></br>
          <span className="Text">Learn how to create immersive, visually stunning virtual experiences where your video content is the centerpiece.</span>
          <br></br>
          <span className="Clock">{days}</span>
          <span className="Clock-Colon">:</span>
          <span className="Clock">{hours}</span>
          <span className="Clock-Colon">:</span>
          <span className="Clock">{minutes}</span>
          <span className="Clock-Colon">:</span>
          <span className="Clock">{seconds}</span>
          <br></br>
          <span className="Clock-Text">Days</span>
          <span className="Clock-Text">Hours</span>
          <span className="Clock-Text">Minutes</span>
          <span className="Clock-Text">Seconds</span>
          
        </div>
        <div className="grid-wow">
          <img src={Wow} className="Wow-Logo"/>
        </div>
      <div className="grid-speakers">
        <div className="Speakers-Title">
          <span className="Small-Title-Center">Our Speakers</span>
          <br></br>
          <span className="Main-Title-Center">Meet Your Event Experts</span>
          <br></br>
          <span className="Text-Speaker-Center">Brandlive's line-up of creative leaders are here to help make your biggest event dreams become a reality.</span>
          <br></br>
        </div>
        <div className="Speaker-Profile">
            {expertsArray.map((person) => {
              return(
                <div>
                  <img src={person.image} className="Speaker-Image"/>
                  <br></br>
                  <span className="Speaker-Name">{person.name}</span>
                  <br></br>
                  <span className="Speaker-Title">{person.title}</span>
                  <br></br>
                  <span className="Speaker-Description">{person.description}</span>
                  <br></br>
                </div>
              );
            })}
        </div>
      </div>
      <div className="grid-video">
        <div className="Video-Title">
          <span className="Small-Title-Center">Our Product</span>
          <br></br>
          <span className="Main-Title-Center">FPO Title</span>
          <br></br>
          <span className="Text-Speaker-Center">Good descriptive writing creates an impression in the reader's mind of an event, a place, a person, or a thing that will set a mood.</span>
          <br></br>
          <p> PLACE HOLDER FOR VIDEO </p>
        </div>
      </div>
      <div className="grid-customers">
        <div className="Customers-Title">
          <span className="Small-Title-Center">Our Happy Customers</span>
          <br></br>
          <span className="Main-Title-Center">Words That Make Us Blush</span>
        </div>
        <div className="Customers">
          {customersArray.map((brand) => {
              return(
                <div>
                  <img src={brand.image} className="Customer-Logos"/>
                </div>
              );
            })}
          </div>
      </div>
      <div className="grid-footer">
        <img src={BrandliveLogo} className="Brandlive-Logo"/>
        <span className="Small-Bottom-Link">TERMS AND CONDITIONS</span>
        <span className="Small-Bottom-Link">PRIVACY POLICY</span>
        <img src={BrandliveStream} className="BrandliveStream-Logo"/>
      </div>
    </div>
  );
}

export default App;
