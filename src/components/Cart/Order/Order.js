import React from 'react'

const Order = () => {
  return (
      <div className="card shopping-cart ml-4" style={{height: '300px'}}>
          <div className="card-header bg-dark text-light">
              Order
          </div>
          <div className="card-body">
              <div className='d-flex flex-column'>
                  <input className="m-1"/>
                  <input className="m-1"/>
                  <input className="m-1"/>
                  <input className="m-1"/>
              </div>
          </div>
          <div className="card-footer">
              <div className="justify-content-center">
                  <button type="button" className="btn btn-dark btn-block">ORDER</button>
              </div>
          </div>
      </div>
  )
}

export default Order
