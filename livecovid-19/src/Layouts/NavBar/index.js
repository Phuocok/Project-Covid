import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

class index extends Component {
  render() {
    return (
      <div>
        
        <nav className="navbar navbar-dark bg-dark">
        
          <div className="container-fluid">
          <Link to="/"><a className="navbar-brand" href="">
            
            <img
              src="351fc5a1-5a8e-497b-8ac7-c24b9e8c27a0.png"
              alt
              width={40}
              height={34}
              className="d-inline-block align-text-top"
            />
            RealTime Covid-19
          </a></Link>
            
         
            <div className="link">
              <div className="link-item">
                <Link to="/moreinfo">More Info</Link>
              </div>
              <div className="link-item">
                {/* <Link to="/aboutme"><a href="https://www.facebook.com/comatthon69/">About Me</a></Link> */}
                <a href="https://www.facebook.com/comatthon69/">About Me</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default index;
