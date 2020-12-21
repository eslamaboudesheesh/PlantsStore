import React from "react";
import CardsHeader from "./CardsHeader";

export default function HeaderCover() {
  return (
    <>
      <section className="Header__cover">
    <img src="/images/header.jpg" alt="Plants Header" className="img-fluid"/>
        <div className="Header__Content__wrapper">
            <div className="Header__Content col-md-9 col-sm-12">
            <h3>SELLING FAST</h3>
            <h2>Spread Holiday Cheer</h2>
            <p>Act now: Schedule farm-fresh Bouqs, plants & gifts for everyone on your list!</p>
             <button className="Header__btn btn ">Shop Now </button>
            </div>
        </div>
      </section>
    </>
  );
}
