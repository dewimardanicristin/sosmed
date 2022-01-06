import React from "react";
import Counter from "../pages/counter";
import { Link } from "react-router-dom";

export default function Detail({name, title, body,idBaru }) {
  return (
    
    <div className="col-12 bg-light my-4 p-3">
      <div className="card-header">
        <Link  to={`/profile/${idBaru}`}>
        <i className="fas fa-user me-3"></i><span className="fw-bold">{name}</span><br/>
        </Link>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
      </div>
      <div className="justify-content-end">
        {/* <span className="mx-3 my-3">0</span><i class="far fa-heart"></i> */}
        <Counter/>
      </div>
    </div>
  );
}
