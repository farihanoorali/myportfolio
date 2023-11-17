import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import cardimage from '../assets/images/cardimage.jpg'
const Cards = () => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={cardimage} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant='dark'>Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Cards
