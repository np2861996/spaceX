import React, { useState } from 'react'

function Contact() {

  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    msg: ''
  })

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`${data.firstname} ,${data.lastname},${data.email},${data.phone},${data.msg}   `)


  }

  return (
    <>
      <div className='min-vh-100'>
        <div className="my-5 ">
          <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container-fluid mb-5 ">
          <div className="row gy-3 d-flex justify-content-center">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 flex-column">
              <form onSubmit={formSubmit}>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">First Name</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="First Name" name="firstname" value={data.firstname} onChange={InputEvent} required />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Last Name</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Last Name" name="lastname" value={data.lastname} onChange={InputEvent} required />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" value={data.email} onChange={InputEvent} required />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Phone</label>
                  <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Phone" name="phone" value={data.phone} onChange={InputEvent} required />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent} required></textarea>
                </div>
                <div class="col-12">
                  <button class="btn btn-primary" type="submit">Submit form</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
