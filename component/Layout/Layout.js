import React from 'react'
import Footer from './Footer';
import MainNavbar from './MainNavbar'

const Layout = props => (
    <div className="Layout" >
        <MainNavbar/>
      <div className="Content" >
        {props.children}
      </div>
      <hr/>
      <Footer/>
    </div>
  );
  
  export default Layout;