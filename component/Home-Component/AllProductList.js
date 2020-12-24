import React from 'react'
import {CardDeck} from 'react-bootstrap'
import CardsItem from './CardsItem'

export default function AllProductList() {
    return (
        <>
        <div className="px-2 ProductList__card">

        <div className=" py-2 my-2 px-2 mx-2 Sub-title">
         <h2 >All Products</h2>
        </div>
            <CardDeck className="py-4"> 
              
            
             <div className="col-md-3 col-sm-6">
             <CardsItem />
             </div>

             <div className="col-md-3 col-sm-6">
             <CardsItem />
             </div>

             <div className="col-md-3 col-sm-6">
             <CardsItem />
             </div>

             <div className="col-md-3 col-sm-6">
             <CardsItem />
             </div>

            </CardDeck>
            <CardDeck className="py-4">
              
            
              <div className="col-md-3 col-sm-6">
              <CardsItem />
              </div>
 
              <div className="col-md-3 col-sm-6">
              <CardsItem />
              </div>
 
              <div className="col-md-3 col-sm-6">
              <CardsItem />
              </div>
 
              <div className="col-md-3 col-sm-6">
              <CardsItem />
              </div>
 
             </CardDeck>
     
             <div className=' my-3 text-center'>
            <button className="btn Main__btn text-center">Show More</button>
            </div>
            </div>
        </>
    )
}
