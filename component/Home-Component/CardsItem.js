import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function CardsItem() {
  return (
    <>
      <Card className="my-2">
        <Card.Img variant="top" src="/images/PlantItem.jpg" alt="plant img " />
        <Card.Footer className="text-center" >

          <small>Tillandsia cyanea Pink</small>

        </Card.Footer>
        <div className="card-overlay">
          <a className="btn btn-defualt" href="#"><i className="fa fa-heart"></i> </a> 
          <a className="btn btn-defualt" href="#"> <i className="fa fa-eye"></i> </a>
        </div>
      </Card>
    </>
  )
}
