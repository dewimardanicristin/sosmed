import React from "react"
import "./styles.css"
import { AlbumContextAPI } from "../../context/albums-context"
import { UserContextAPI } from "../../context/user-context";
import Albums from "../../components/albums";
import Layouts from "../../layouts";
import { useParams } from "react-router-dom";

export default function UserProfile(){
    const { albums } = AlbumContextAPI();
    const { users } = UserContextAPI();
    // const {photos} = PhotoContextAPI();
    let { idBaru } = useParams();

    let theUser = users.find((x) => x.id === Number(idBaru))
    return(
        <>
        <Layouts>
          <div className="container">
            <div id="profileUser" className="p-3">
              <div className="justify-content-between d-flex">
                <h3>{theUser !== undefined ? theUser.name : null}</h3><span><p>{theUser !== undefined ? theUser.email : null}</p></span>
              </div>
              <h6>{theUser !== undefined ? theUser.company.name+", "+theUser.company.catchPhrase+", "+theUser.company.bs : null}</h6>
              <p>{theUser !== undefined ? theUser.address.street+", "+theUser.address.suite+", "+theUser.address.city+", "+theUser.address.zipcode : null}</p>        
            </div>
            <div className="row">
              {/* <div className="col-lg-4 com-md-3 col-sm-6 d-flex"> */}
                {users !== undefined && albums !== undefined
                    ? albums
                        .filter((x) => x.userId === Number(idBaru))
                        .map((v) => {
                          return (
                            <div className="col-12">
                              <Albums id={v.id} title={v.title}/>
                            </div>
                          );
                        })
                    : null}
                {/* </div> */}
            </div>
            </div>
          </Layouts>
        </>
    )
}