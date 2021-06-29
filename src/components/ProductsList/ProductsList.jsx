import React, {useEffect, useMemo, useState} from "react";
import {Col, Container, Pagination, Row} from "react-bootstrap";
import ProductItem from "./ProductItem/ProductItem";
import Preloader from "../Preloader/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../../redux/actions/products";
import {addProductToCart} from "../../redux/actions/cart";


const PAGE_LIMIT = 6

const ProductsList = () => {
    const [activePage, setActivePage] = useState(0)
    const items = useSelector(({products}) => products.items)
    const cartItems = useSelector(({cart}) => cart.items)
    const dispatch = useDispatch();
    
    console.log(items)
    
    const handleAddProductToCart = (obj) => {
        dispatch(addProductToCart(obj))
    }

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])


    const {pagItems, pagStart, pagEnd} = useMemo(() => {
        const pageLimit = Math.ceil(items.length / PAGE_LIMIT)
        const pagItems = []
        for (let i = 0; i < pageLimit; i++) {
            pagItems.push(
                <Pagination.Item key={i}
                                 active={i === activePage}
                                 onClick={() => setActivePage(i)}
                >
                    {i + 1}
                </Pagination.Item>
            )
        }
        const pagStart = activePage * PAGE_LIMIT
        const pagEnd = pagStart + PAGE_LIMIT
        return {
            pagItems,
            pagStart,
            pagEnd
        }
    }, [activePage, items.length])

    return (
        <Container>
            <Row>
                {items.length ? items.slice(pagStart, pagEnd).map(item => {
                    return (
                        <Col lg={4} md={6} xs={12} key={item.id}>
                            <ProductItem 
                                onClickAddProduct={handleAddProductToCart}
                                addedCount={cartItems[item.id] && cartItems[item.id].items.length}
                                {...item}/>
                        </Col>
                    )
                }) : <Preloader/>

                }
            </Row>
            <Pagination  className='justify-content-center' >
                {pagItems}
            </Pagination>
        </Container>
    )
}

export default ProductsList

