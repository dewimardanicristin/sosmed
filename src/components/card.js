import React from "react";
import { Link } from "react-router-dom";
// import { Route } from "react-router-dom";
import Counter from "./../pages/counter"

export default function Card({name,company, title, body,idBaru }) {
  return (
    
    <div className="col-12 bg-light my-4 p-3">
      <div className="card-header">
        <i className="fas fa-user me-3"></i><span className="fw-bold">{name}</span><br/>
        <p className=""> {company}</p>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
      </div>
      <div className="justify-content-end">
        {/* <span className="mx-3 my-3">0</span><i class="far fa-heart"></i> */}
        <Counter/>
      </div>
      <Link className='btn w-100 mt-2 mb-1' style={{ backgroundColor: "#267A88", color: "white" }} to={`/post/${idBaru}`}>
                    readmore
        </Link>
    </div>
  );
}
