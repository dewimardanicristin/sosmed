import React from "react";
import { PhotoContextAPI } from "../context/photo.context";

export default function Albums({id, title}) {
  const {photos} = PhotoContextAPI();
  console.log(id)
  return (
    <>
    <div className="card bg-danger text-white m-3 opacity-75">
      <div className="card-body">
          <h6>{title}</h6>
      </div>
    </div>
    <div className="row container">
    {/* <div className="col-lg-3 col-sm-2 d-flex"> */}
        {
            photos !== undefined? photos.filter((x)=>x.albumId===Number(id)).map((v)=>{
                return(
                    <div className="col-lg-1 g-2 col-sm-2 d-flex">
                      <img src={v.thumbnailUrl} className="w-100" alt="..."/>
                    </div>
                )
            })
            :null
        }
    {/* </div> */}
    </div>
    </>
  );
}
