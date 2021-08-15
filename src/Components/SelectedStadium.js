
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { selectedStadium } from '../Actions/StadiumActions';
// import Picture from './StadiumPicture';
// import Mascot from './Mascot';

export default function SelectedStadium() {

    const stadium = useSelector((state) => state.StadiumList);
    const ReturnedID = useParams();
    const StadiumID = ReturnedID.id - "1";
    console.log("StadiumName:", ReturnedID.nameOf);
  console.log("=======================================")
  const StadiumData = stadium.StadiumList[StadiumID];
    console.log("Selected Stadium", StadiumData);

    const top = document.getElementById("topColor");
    const color1 = StadiumData.background1
    console.log(top);
  //   top.style.backgroundColor = `{StadiumData.background1}`;
  // }
  // top.style.setProperty("backbroundColor", StadiumData.background1);
if(Object.keys(StadiumData).length >0){
  const { nameOf, city, team, capacity, mascot, mascot_bio, mascot_pic,  background1, background2, division } = StadiumData;
  var StadiumDetails = (
    <>
    <div id="topColor" style={{backgroundColor: StadiumData.background1}}>

    <p>Guess I need to have something i nthe div to see the color, huh</p>
    </div>
    <div id="bottomColor" style={{backgroundColor: StadiumData.background2}}>
      still just making words to see the background
    </div>
    </>
  )   
}


    return(
      <>
      <div id="selectedPageHomeLink">
        <center>
          <Link to={"/"} id="ReturnHome">H O M E</Link>  
        </center>
      </div>
      <div id="intro">The {StadiumData.team}'s own</div>
      <center><h1>{StadiumData.nameOf}</h1></center>
      <div>
        {StadiumDetails}
      </div>
      </>
  )
}