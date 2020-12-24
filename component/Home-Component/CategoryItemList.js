import React from 'react'
import { CardDeck ,Col } from "react-bootstrap";
import CategoryItem from './categoryItem';

export default function CategoryItemList() {
  return (
    <>
      <div className=" py-2 my-2 px-2 mx-2 Sub-title">
         <h2 >Ours Products</h2>
        </div>
        
      <CardDeck className="px-3 my-4">
          
         <CategoryItem title="favouites" />
         <CategoryItem  title="Indoor Plants"/>
         <CategoryItem  title="Outdoor Plants"/>
         <CategoryItem  title="Pots"/>
         
      </CardDeck>
   
    </>
  )
}
