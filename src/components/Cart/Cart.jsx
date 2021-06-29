import React from 'react'
import './Cart.css'
import CartItem from "./CartItem/CartItem";
import Order from "./Order/Order";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {clearCart, removeCartItem, plusCartItem, minusCartItem} from "../../redux/actions/cart";
import EmptyCart from "./EmptyCart/EmptyCart";

const Cart = () => {
    const dispatch = useDispatch()
    const {totalPrice, items} = useSelector(({cart}) => cart)

    const addedProducts = Object.keys(items).map(key => {
        return items[key].items[0]
    })

    const onClearCart = () => {
             dispatch(clearCart())
    }

    const onRemoveItem = (id) => {
        dispatch(removeCartItem(id))
    }
    const onPlusItem = (id) => {
        dispatch(plusCartItem(id))
    }
    const onMinusItem = (id) => {
        dispatch(minusCartItem(id))
    }

    return (
        <div className="row justify-content-center ">
            {
                totalPrice
                ? <div className='d-flex'>
                        <div className="card shopping-cart">
                            <div className='card-header bg-dark  d-flex justify-content-between'>
                                <div className="text-light align-items-center">
                                    Cart
                                </div>
                                <div>
                                    <button onClick={onClearCart} type="button" className="btn btn-outline-secondary btn-xs">
                                        Empty Cart
                                    </button>
                                </div>
                            </div>
                            {addedProducts.map(obj => <CartItem title={obj.title}
                                                                key={obj.id}
                                                                id={obj.id}
                                                                category={obj.category}
                                                                price={obj.price}
                                                                image={obj.image}
                                                                totalPrice={items[obj.id].totalPrice}
                                                                totalCount={items[obj.id].items.length}
                                                                onRemove={onRemoveItem}
                                                                onPlus={onPlusItem}
                                                                onMinus={onMinusItem}
                            />)}
                            <div className="card-footer ">
                                <div className='d-flex justify-content-between'>
                                    <Link to='/'>
                                        <button type="button" className="btn btn-outline-secondary btn-xs text-md-right">
                                            Back
                                        </button>
                                    </Link>

                                    <div className=" m-1">
                                        Total price: <b>{totalPrice}$</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            {/*<Order/>*/}
                        </div>

                    </div>
                    : <EmptyCart/>
            }
        </div>
    )
}

export default Cart
