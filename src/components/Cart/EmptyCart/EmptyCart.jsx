import React from 'react'
import {Link} from "react-router-dom";
import emptyCart from '../../../assets/img/emptycart.png'

const EmptyCart = () => {
  return (
      <div className="container-fluid  mt-100">
          <div className="row justify-content-center">
              <div className="col-md-6">
                  <div className="card">
                      <div className="card-header bg-dark">
                          <h5 className='text-light'>Cart</h5>
                      </div>
                      <div className="card-body cart">
                          <div className="col-sm-12 empty-cart-cls text-center">
                              <div>
                                  <img src={emptyCart} alt='emptyCart'/>
                              </div>
                              <h3><strong>Your Cart is Empty</strong></h3>

                              <h4>Add something </h4>


                              <Link to='/'>
                              <button className="btn btn-dark m-3" >Go Back</button>
                              </Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default EmptyCart
