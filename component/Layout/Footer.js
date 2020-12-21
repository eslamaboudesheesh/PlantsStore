import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="container-fluid py-2 footer__wrapper">
        <section className="row footer__SectionOne ">
          <div className="col-md-3 footer__logo">
            <img src="/logo.svg" alt="Plants Logo" className="px-2" />
            <span>Plants Store</span>
          </div>
          <div className="col-md-3">
            <ul>
              <li className="applelink">
                <a
                  href="https://apps.apple.com/us/app/valu/id1199345579"
                  target="_blank"
                >
                  Home
                </a>
              </li>
              <li className="applelink">
                <a
                  href="https://apps.apple.com/us/app/valu/id1199345579"
                  target="_blank"
                >
                  Careers
                </a>
              </li>
              <li className="applelink">
                <a
                  href="https://apps.apple.com/us/app/valu/id1199345579"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
              <li className="applelink">
                <a
                  href="https://apps.apple.com/us/app/valu/id1199345579"
                  target="_blank"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <li className="applelink">
                <a
                  href="https://apps.apple.com/us/app/valu/id1199345579"
                  target="_blank"
                >
                  Terms of use
                </a>
              </li>
              <li className="applelink">
                <a
                  href="https://apps.apple.com/us/app/valu/id1199345579"
                  target="_blank"
                >
                  Shipping & Returns
                </a>
              </li>
              <li className="applelink">
                <a
                  href="https://apps.apple.com/us/app/valu/id1199345579"
                  target="_blank"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <li className="applelink">
                <a
                  href="https://apps.apple.com/us/app/valu/id1199345579"
                  target="_blank"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </section>

        <hr />
        <section className="row footer__SectionTwo">
            <p>@ 2020 PlantStore , All Rights Reseved </p>
          
        </section>
      </footer>
    </>
  )
}
