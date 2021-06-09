// recreated Logo of the website.
// created some graphics in Play.css
// rotated pictures in Shop and Play sections in Play.css
// I will change font tomorrow


import React, {Component} from 'react';
import NavBar from './Navbar';
import Footer from './Footer';
import './play.css';

import chilidish from '../img/body-img/chilidish.jpg';
import chiliver from '../img/body-img/chiliver.jpg';
import chilidinner from '../img/body-img/chilidinner.jpg';
import icecreamcups from '../img/body-img/icecreamcups.jpg';
import icecreamtruck from '../img/body-img/icecreamtruck.jpg';
import greatericecream from '../img/body-img/greatericecream.jpg';

import Shopcincyshirts from '../img/body-img/Shopcincyshirts.jpg';
import ShopLaneKate from '../img/body-img/ShopLaneKate.jpg';
import Shopoutlet2 from '../img/body-img/Shopoutlet2.jpg';
import shopping from '../img/body-img/shopping.jpg';

import playFlyer2 from '../img/body-img/playFlyer2.jpg';
import playRedStadium from '../img/body-img/playRedStadium.jpg';
import playriverboat from '../img/body-img/playriverboat.jpg';
import playGhostTour from '../img/body-img/playGhostTour.jpg';

import queencity from '../img/body-img/queencity.jpg';
import weLove from '../img/body-img/weLove.jpg';



export default class Play extends Component{
  render(){
    return (
        <div className="body-container"> 
        <h1 className="queenCity">Explore the Queen city with <span>eat.shop.play</span></h1>
          <div className="eat-container">
          <h1>Eat</h1>
          <p>Enjoy a traditional lei greeting and experience a luau on Oahu. Hosted by Chief Sielu, Original World Fire Knife Dance Champion, this event provides the ideal opportunity to immerse yourself in island culture. Watch a Polynesian show, learn headband weaving, or take a hula lesson, before indulging in a Hawaiian feast, including pineapple glazed chicken and kalua pork. Upgrade to include priority access and convenient pickup, for a hassle-free experience.

          Read more about Chief's Luau Admission 2021 - Oahu - https://www.viator.com/tours/Oahu/Chiefs-Luau-Admission/d672-6981CHIEFLUAU?mcid=56757</p>

               <img className="body-img" id="A" alt='' src= { chilidish } />
               <img className="body-img" id="B" alt='' src= { chiliver } />
               <img className="body-img" id="C" alt='' src= { icecreamcups } />
               <img className="body-img" id="D" alt='' src= { icecreamtruck } />
               <img className="body-img" id="E" alt='' src= { greatericecream  } />

          </div>

          <div className="shop-container">
          <h1>Shop</h1>
          <p>Enjoy a traditional lei greeting and experience a luau on Oahu. Hosted by Chief Sielu, Original World Fire Knife Dance Champion, this event provides the ideal opportunity to immerse yourself in island culture. Watch a Polynesian show, learn headband weaving, or take a hula lesson, before indulging in a Hawaiian feast, including pineapple glazed chicken and kalua pork. Upgrade to include priority access and convenient pickup, for a hassle-free experience.

          Read more about Chief's Luau Admission 2021 - Oahu - https://www.viator.com/tours/Oahu/Chiefs-Luau-Admission/d672-6981CHIEFLUAU?mcid=56757</p>
               <img className="body-img" id="F" alt='' src= { Shopcincyshirts } />
               <img className="body-img" id="G" alt='' src= { ShopLaneKate } />
               <img className="body-img" id="H" alt='' src= { Shopoutlet2 } />
               <img className="body-img" id="I" alt='' src= { shopping } />
               <img className="body-img" id="queencity" alt='' src= { queencity } />
              

          </div>

          <div className="play-container">
          <h1>Play</h1>
          <p>Enjoy a traditional lei greeting and experience a luau on Oahu. Hosted by Chief Sielu, Original World Fire Knife Dance Champion, this event provides the ideal opportunity to immerse yourself in island culture. Watch a Polynesian show, learn headband weaving, or take a hula lesson, before indulging in a Hawaiian feast, including pineapple glazed chicken and kalua pork. Upgrade to include priority access and convenient pickup, for a hassle-free experience.

           Read more about Chief's Luau Admission 2021 - Oahu -</p>
               <img className="body-img" id="J" alt='' src= { playFlyer2 } />
               <img className="body-img" id="K" alt='' src= { playGhostTour } />
               <img className="body-img" id="L" alt='' src= { playriverboat } />
               <img className="body-img" id="M" alt='' src= { playRedStadium } />
               <img className="body-img" id="weLove" alt='' src= { weLove } />
               

          </div>

        
        
        </div>


    )}
};


