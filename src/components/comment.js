import React from "react"
import { Link } from "react-router-dom"

export default function Comment({name,body}){
    return(
        <div className="row my-0 w-100 d-flex bg-light py-1">
            <div className="col-3 px-4">
                    <div className="row">
                        
                            <div className=""><i className="fas fa-user me-3"></i><span className="fw-bold">{name}</span></div>
                            
                       
                    </div>
                    
                    <div className="mb-2 ms-4">
                                        <i className="fas fa-star" style={{color:"#FDCC0D"}}></i>
                                        <i className="fas fa-star" style={{color:"#FDCC0D"}}></i>
                                        <i className="fas fa-star" style={{color:"#FDCC0D"}}></i>
                                        <i className="fas fa-star" style={{color:"#FDCC0D"}}></i>
                                        <i className="fas fa-star" style={{color:"#FDCC0D"}}></i>
                                    </div>
                    </div>
                
            <div className="col-9">
                <p className="mt-0 bg-white rouded p-2">{body}</p>

            </div>
        </div>
    )
}