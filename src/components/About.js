import React from 'react'
import Common from './Common'
import photo from "../assets/images/destination-moon-hover.svg"

function About() {
  return (
    <>
      <Common title={"FALCON HEAVY FIRST FLIGHT"} shortdesc={"SpaceX is leveraging its experience in building rockets and spacecraft to deploy the world’s most advanced broadband internet system. As the world’s leading provider of launch services – and the only provider with an orbital class reusable rocket – SpaceX has deep experience with both spacecraft and on-orbit operations."}  image={photo} visit="/contact" btn_name="contact" />
    </>
  )
}

export default About
