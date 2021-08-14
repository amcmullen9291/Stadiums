
import React from 'react'
import { useSelector } from 'react-redux';
import {Link } from 'react-router-dom';
import Picture from './StadiumPicture';
import Mascot from './Mascot';

export default function SelectedStadium() {
const entry = useSelector((state) => state.stadium);

    if (Object.keys(entry).length > 0) {
        // const { name, city, team, capacity, mascot, mascot_bio, stadium_pic, mascot_pic, year_built, background} = entry.data.data.attributes;
        var stadiumDetails = (
          <>
          <div>
              <Mascot/>
            <form></form> //formData
            </div>
          </>
        );
    }
return(
      <>
      <Mascot/>
  </>
  )
}