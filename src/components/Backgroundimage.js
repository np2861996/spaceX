import React from 'react'
import { NavLink } from 'react-router-dom'


function Backgroundimage(props) {
  return (
   <>
        
<div
  className="bg-image p-5 text-left shadow-1-strong mb-5 text-white mh-100 d-flex align-items-center bgimage"
  style={{backgroundImage: `url(${props.bgimage})`}}
>
  <div class="card-body text-white bg-transparent my-auto">
    <h2 class="card-text mt-3 w-50  bg-transparent">
     {props.bgtitle}
    </h2>
    <div className='mt-3 home-sec-1-link bg-transparent'>
        <NavLink className="btn btn-outline-light" to={props.bglink}>{props.bgbtntext}</NavLink>
    </div>
  </div>
</div>

   </>
  )
}

export default Backgroundimage
