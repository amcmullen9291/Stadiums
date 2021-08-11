//notes for later on
import React from 'react'

export default function StadiumPicture(props) {
    const stadium_pic = useParams();

  return (
    <div>
          <img alt="Stadiums"  className="stadium_img" src={`${process.env.PUBLIC_URL}/${stadium_pic}`}/>
    </div>
  )
}
