import React, {memo} from 'react'
import {Badge, Button, Card} from "react-bootstrap";
import isEqual from 'lodash/isEqual'


const ProductItem = ({id, title, price, category, image, onClickAddProduct, addedCount}) => {

    const onAddProduct = () => {
        const obj = {
            id,
            title,
            image,
            price
        }
        onClickAddProduct(obj)
    }

  return (
      <Card key={id} className='m-3 img-responsive shadow' style={{width: '320px', height: '510px'}} >
          <Card.Img  width={280}
                     height={260}
                     src={image}
                    alt='product photo'/>

          <Card.Body className='d-flex flex-column'>
              <Card.Title>{title}</Card.Title>
              <Card.Text><b>Category:</b> {category}</Card.Text>
              <Card.Text><b>Price:</b> ${price}</Card.Text>
                  <Button className='mt-auto'
                          onClick={onAddProduct}
                          variant="dark"
                          size="lg" block>Add to Cart
                      {addedCount && <Badge className='ml-2' variant="dark">{addedCount}</Badge>}
                  </Button>
          </Card.Body>
      </Card>
  )
}

const propsAreEqual = (prevProps, nextProps) => {
    return isEqual(prevProps, nextProps)
}

export default memo(ProductItem, propsAreEqual)
