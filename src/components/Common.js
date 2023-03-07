import React from 'react'
import { NavLink } from 'react-router-dom'

function Common(props) {
  return (
    <section id="home" className='d-flex align-items-center min-vh-100'>
    <div className="container-fluid nav_bg">
        <div className="row">

            <div className="col-10 mx-auto">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h1>{props.title}</h1>
                        <h3 className='my-3'>{props.shortdesc}</h3>
                        <div className='mt-3 home-sec-1-link'>
                            <NavLink className="btn btn-outline-light" to={props.visit}>{props.btn_name}</NavLink>
                        </div>
                    </div>

                    <div class="col-lg-6 col-sm-12 order-1 order-lg-2 header-img p-lg-5">
                        <img src={props.image} className="img-fluid animated" alt="home img" />
                    </div>
                </div>
            </div>
        </div>
    </div>


</section>
  )
}

export default Common
