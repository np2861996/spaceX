import React from 'react'
import Card from './Card'
import ServiceData from './SservicesData'

function Services() {
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Welcome To Service</h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row gy-3">
         

         {
            ServiceData.map((val, ind) => {
              return <Card 
                  key={ind}
                  imgsrc={val.photoimg}
                  title={val.title}
              />
            })
         }


          </div>
        </div>
     
    </>
  )
}

export default Services
