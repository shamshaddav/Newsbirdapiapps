import React from 'react'

function Hero() {
  return (
    <div 
    className="container-fluid bg-dark text-white d-flex justify-content-center align-items-center flex-column"
    style={{height: "50vh"}}
    >
   <h1 style={{fontSize: "50px", color: "orangered"}}>NEWS BIRD</h1>
   <h5>THE WEBSITE BUILD WITH THE NEWS API.</h5>
    </div>
  );
};

export default Hero