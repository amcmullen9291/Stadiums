
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

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

    if(Object.keys(StadiumData).length >0){
  const { nameOf, city, team, capacity, mascot, mascot_bio, stadium_pic, mascot_pic,  background1, background2, division, year_built } = StadiumData;
  var StadiumDetails = (
    <>
    <img alt={nameOf}  className="" src={`${process.env.PUBLIC_URL}/Stadiums/${stadium_pic}`}/><br/>
    {/* <img alt={nameOf}  className="" src={`${process.env.PUBLIC_URL}/Stadiums/${stadium_pic}`}/> */}

    <div id="topColor" style={{backgroundColor: StadiumData.background1}}>
    <div id="year_built">Year Built: {year_built}.</div>
    <p id="mascot">Mascot: {mascot}</p>
    <img alt={mascot}  className="mascot_img" src={`${process.env.PUBLIC_URL}/Mascots/${mascot_pic}`}/>
    </div>
    <div id="bottomColor" style={{backgroundColor: StadiumData.background2}}>
      {/* <img alt={mascot}  className="stadium_img" src={`${process.env.PUBLIC_URL}/Mascots/${mascot_pic}`}/> */}
      <span id="division">{division}</span>
      <center><div id="bioLine">{mascot_bio}</div></center>
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