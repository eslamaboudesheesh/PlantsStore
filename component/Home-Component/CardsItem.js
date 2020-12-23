import React from "react";
import { Card ,Button} from "react-bootstrap";

export default function CardsItem() {
  return (
    <>
      <Card className="my-2" >
        <Card.Img variant="top" src="/images/PlantItem.jpg"  alt="plant img "/>
      </Card>
    </>
  );
}
