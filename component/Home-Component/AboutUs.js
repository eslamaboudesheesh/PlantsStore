import React from "react";

export default function AboutUs() {
  return (
    <>
      <section className="AboutUs__section">
      

      <div className="color-overlay"></div>
       <div className ="AboutUs__wrapper">
     
        <div className="row AboutUs__Content py-5 px-5">
          <div className="col-md-4 col-sm-2 offset-md-1  AboutUs--Content_title py-2">
              <h2> Starting With The Right Idea</h2></div>
          <div className="col-md-5 col-sm-2 offset-md-1    AboutUs--Content_storty py-2 px-4">
            <h3 className="py-3">
              Dreaming about an individual LandSacping Greenery ? Take The First
              Step Towards Your Main Needs and desires
            </h3>
            <p className="py-1">
              A beautiful garden takes time, effort, money and maintenance.
              Starting with a good garden plan can help cut down on all of those
              things. we Can help you for all this !
            </p>
            <p className="py-1">
           we also advise not to miss the planning for your plants . you will find all the necessary recommendation for it
            </p>
            <div className=' my-3'>
            <button className="btn Main__btn text-center">Shop Now</button>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
