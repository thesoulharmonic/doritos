import React, { Component } from "react";

// converted into a function component

const About = () =>{

    return (

// about section wrapped in bootstrap

<div className="container">

  <div className="row ">
    <div className="col-12">
    <div className="imageHeader"><img src="../img/about.webp" alt="crisps" /></div>
      <div className="about">
        <h2>About</h2>
        <p>
          DORITOS® isn’t just a chip. It’s fuel for disruption — our flavors
          ignite adventure and inspire action. With every crunch, we aim to
          redefine culture and support those who are boldly themselves.
        </p>
        <p>Are you ready? If so, crunch on.</p>
      </div>
      </div>
  </div>
</div>
    );
  }

  export default About