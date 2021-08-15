
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
    // console.log("StadiumData:", stadium);
    console.log("StadiumName:", ReturnedID.nameOf);
    console.log("Selected Stadium's Index", StadiumID)
    console.log("Stadium List", stadium)

  console.log("=======================================")
  const StadiumData = stadium.StadiumList[StadiumID];
    console.log("Selected Stadium", StadiumData)

    return(
      <>
      <div id="selectedPageHomeLink">
        <center>
          <Link to={"/"} id="ReturnHome">H O M E</Link>  
        </center>
      </div>
      <div id="intro">The {StadiumData.team}'s own</div>
      <center><h1>{StadiumData.nameOf}</h1></center>
      <div id="topColor"></div>
      <div id="bottomColor"></div>
      </>
  )
}