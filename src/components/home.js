import React from "react";
import pillodu from '../assets/pillodu.png';
import Polygon from '../assets/Polygon.svg';

export default function home() {
  return (
    <div class="grid-container1">
      <div class="grid-item1">
        <p className="content-style-home">
            Unlock <button className="dashed-button">your</button><br/>
            online growth<br/>
            potential <button className="dashed-button-padding"><span className="text">Yes</span></button>
            <br/>
            <br/>
        <span className="ourproduct">Our Product</span> <span className="playbuttonwrapper"><img className="playbutton" src={Polygon}></img></span>
        </p>
      </div>
      <div class="grid-item20"><img src={pillodu}></img></div>
    </div>
  );
}
