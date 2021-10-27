import React from 'react';
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
      {/* <div className="Home"> */}
        <div className="Top">
          <div className="grid-event-time">
            <p>Starts on NOV 03, 2021 AT: 10:00 AM PDT</p>
            <p>Create standout virtual events, minus the cost and stress.</p>
            <p>Learn how to create immersive visually stunning virtual experiences where your video content is the centerpiece.</p>
            <p>Days</p>
            <p>Hours</p>
            <p>Minutes</p>
            <p>Seconds</p>
          </div>
          <div className="grid-wow">
            <img src={Wow} className="Wow-Logo"/>
          </div>
        </div>
        <div className="Speakers">
          <div className="Speakers-Title">
            <p>Our Speakers</p>
            <p>Meet Your Event Experts</p>
            <p>Brandlive's line-up of creative leaders are here to help make you biggest event dreams become a reality.</p>
          </div>
          <div className="Speaker-Profile">
              {expertsArray.map((person) => {
                return(
                  <div>
                    <img src={person.image} className="Speaker-Image"/>
                    <br></br>
                    <span>{person.name}</span>
                    <br></br>
                    <span>{person.title}</span>
                    <br></br>
                    <span>{person.description}</span>
                    <br></br>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="Video-Section">
          <p>Our Product</p>
          <p>FPO Title</p>
          <p>Good descriptive writing creates an impression in the reader's mind of an event, a place, a person, or a thing that will set a mood.</p>
          <p> PLACE HOLDER FOR VIDEO </p>
        </div>
        <div className="Customers-Section">
          <p>Our Happy Customers</p>
          <p>Words That Make Us Blush</p>
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
        <div className="Footer">
          <img src={BrandliveLogo} className="Brandlive-Logo"/>
          <p>TERMS AND CONDITIONS</p>
          <p>PRIVACY POLICY</p>
          <img src={BrandliveStream} className="BrandliveStream-Logo"/>
        </div>
      {/* </div> */}
    </div>
  );
}

export default App;
