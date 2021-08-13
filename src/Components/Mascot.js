import React from 'react'

function Mascot() {
  return (
    <div>
      <img alt="Mascot" className="stadium" src={`${process.env.PUBLIC_URL}/Masccots/${mascot_pic}`}/>
    </div>
  )
}



export default Mascot;