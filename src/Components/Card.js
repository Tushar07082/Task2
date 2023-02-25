import React from "react";
import "./Card.css";
import { useState } from "react";

const Card = ({ key, user }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="container">
      <div className="extendedCard">
        <div className="card">
          <p className="name">{user.company.name}</p>
          <div className="contact">
            <h3>Contact</h3>
            <p>{user.name}</p>
          </div>
          <div className="city">
            <h3>City</h3>
            <p>{user.address.city}</p>
          </div>
          {!show && (
            <div className="details" onClick={(show)=>{setShow(true)}}>
                <button>View Details</button>
            </div>
          )}
          {show && (
                <div className="details" onClick={(show)=>{setShow(false)}}>
                        <button>Hide Details</button>
                </div>
          )}
          
        </div>
          {show && (
                <div className="moredetails">
                        <div className="description">
                                <h3>Description</h3>
                                <p className="catchPhrase">{user.company.catchPhrase}</p>
                        </div>
                        <div class="grid-container">
                                <div class="grid-item">
                                        <h3>Contact Person</h3>
                                        <p className="grid-contact">{user.name}</p>
                                </div>
                                <div class="grid-item">
                                        <h3>Address</h3>
                                        <p className="grid-address">{user.address.suite},{user.address.street},{user.address.city},{user.address.zipcode}</p>
                                </div>
                                <div class="grid-item">
                                        <h3>Phone Number</h3>
                                        <p className="grid-phonenumber">{user.phone}</p>
                                </div>
                                <div class="grid-item">
                                        <h3>Email</h3>
                                        <p className="grid-email">{user.email}</p>
                                </div>
                                <div class="grid-item">
                                        <h3>UserName</h3>
                                        <p className="grid-email">{user.username}</p>
                                </div>
                                <div class="grid-item">
                                        <h3>Website</h3>
                                        <p className="grid-email">{user.website}</p>
                                </div>
                        </div>
                </div>
                
          )}
      </div>
    </div>
  );
};

export default Card;
