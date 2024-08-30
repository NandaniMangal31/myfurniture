import React from "react";

function Ma({one}){
    return(
        <>
         <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
              <img src={one["image"]} className="img-fluid mb-5" />
              <h3 clas="">
                <a href="#">
                  <span className="">{one["name"]}</span> 
                </a>
              </h3>
              <span className={one["position"]}>CEO, Founder, Atty.</span>
              <p>
                {one["description"]}
              </p>
              <p className="mb-0">
                <a href="#" className="more dark">
                  Learn More <span className="icon-arrow_forward" />
                </a>
              </p>
            </div>
        </>
    )
}
export default Ma;