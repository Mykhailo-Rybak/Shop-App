import React from 'react'

const CartItem = ({id, title, image, totalPrice, totalCount, onRemove, onPlus, onMinus}) => {
    const handleRemoveClick = () => {
        onRemove(id)
    }
    const handlePlusItem = () => {
        onPlus(id)
    }

    const handleMinusItem = () => {
        onMinus(id)
    }


  return (
      <div key={id} className="card-body" >
          <div className="row align-items-center">
              <div className="col-12 col-sm-12 col-md-2 text-center">
                  <img className="img-responsive" src={image} alt="products" width="60"
                  />
              </div>
              <div className="col-12 col-sm-12 text-center col-md-4">
                  <p className="product-name">{title}</p>

              </div>
              <div className="col-12 col-sm-12 text-sm-center col-md-6 text-md-right row align-items-center">
                  <div className="col-3 col-sm-3 col-md-5 text-md-right pt-2">
                      <h6><strong>${totalPrice}</strong></h6>
                  </div>
                  <div className="col-4 col-sm-4 col-md-6">
                      <div className="quantity">
                          <button onClick={handlePlusItem} type="button" value="+" className="plus">+</button>
                          <p className="qty"
                                >{totalCount}</p>
                          <button onClick={handleMinusItem} type="button" value="-" className="minus">-</button>
                      </div>
                      <div className="col-2 col-sm-2 col-md-2 text-right ml-1">
                          <button onClick={handleRemoveClick} type="button" className="btn btn-outline-danger">
                              X
                          </button>
                      </div>
                  </div>

              </div>
          </div>
      </div>
  )
}

export default CartItem
