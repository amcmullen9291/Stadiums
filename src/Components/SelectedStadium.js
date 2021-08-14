
import React from 'react'
import { useSelector } from 'react-redux';
import Picture from './StadiumPicture';
import Mascot from './Mascot';

export default function SelectedStadium() {
const stadium = useSelector((state) => state.stadium);

    if (Object.keys(stadium).length > 0) {
        // const { name, city, team, capacity, mascot, mascot_bio, stadium_pic, mascot_pic, year_built, background} = entry.data.data.attributes;
        var stadiumDetails = (
          <>
          <div>
              <Picture/><Mascot/>
              {/* fromData */}
            <form></form> 
            {/* end FormData */}
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