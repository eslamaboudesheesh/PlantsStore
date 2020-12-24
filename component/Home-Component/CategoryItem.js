import React from 'react'
import { Card } from 'react-bootstrap'

export default function CategoryItem({ title }) {
  return (
    <>
      <Card className=" col-md-3 Category__Card ">
        <Card.Img variant="top" src="/images/Pots.jpg" alt="plant img " />
        <Card.ImgOverlay>
           <button className="btn Main__btn">
               {title}
           </button>
        </Card.ImgOverlay>
      </Card>
    </>
  )
}
