import React from 'react'
import Common from './Common'
import photo from "../assets/images/destination-mars-hover.svg"
import photo2 from "../assets/images/Homepage1.webp"
import photo3 from "../assets/images/destination-iss-hover.svg"
import Backgroundimage from './Backgroundimage'


function Home() {
    return (
        <>
            <Common  title={"THE ROAD TO MAKING HUMANITY MULTIPLANETARY"} shortdesc={"You want to wake up in the morning and think the future is going to be great - and that's what being a spacefaring civilization is all about. It's about believing in the future and thinking that the future will be better than the past."} image={photo} visit="/about" btn_name="About" />
            <Backgroundimage bgimage={photo2} bgtitle={"STARSHIP SELECTED BY NASA TO SUPPORT SUSTAINED LUNAR EXPLORATION"} bglink={"/about"}  bgbtntext={"Read More"} />
        
            <div
  className="bg-image p-5 text-left shadow-1-strong mb-5 text-white mh-100 space_station"
  style={{backgroundImage: `url(${photo3})`}}
>
  
</div>
        </>
    )   
}

export default Home
