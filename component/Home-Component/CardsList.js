import React from 'react'
import { CardGroup } from "react-bootstrap";
import CardsItem from './CardsItem';

export default function CardsList() {
    return (
        <>
        <CardGroup>
            <CardsItem/>
            <CardsItem/>
            <CardsItem/>
            <CardsItem/>
            <CardsItem/>

        </CardGroup>
        </>
    )
}
