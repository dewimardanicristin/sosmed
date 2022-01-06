import React from "react";
import Layouts from "../../layouts";
// import { PostContext } from "../../context/post-context";
// import { UserContext } from "../../context/user-context";
import Card from "../../components/card";
// import { useContext } from "react";
import { PostContextAPI } from "../../context/post-context";
import { UserContextAPI } from "../../context/user-context";

export default function ListPost(){
    // const { posts,postLoading } = useContext(PostContext);
    // const { users,userLoading} = useContext(UserContext);
    const {posts} = PostContextAPI()
    const {users} = UserContextAPI()

    return(
        <Layouts>
            <div className="container">
            {/* <div className="tab-pane fade show" id="pills-ruko" role="tabpanel" aria-labelledby="pills-ruko-tab"> */}
                <div className="row mt-1 gx-0 gy-4 gx-md-4 mx-2">
                { posts!==undefined&&users!==undefined?
                    posts.map((v) => {
                       const user = users.find((x)=>x.id===v.userId)
                       console.log(user);
                        return (
                        <div className="">
                            <Card
                                name={user.name}
                                company={user.company.name}
                                title={v.title}
                                body={v.body}
                                idBaru={v.id}
                            />
                        </div>
                        ); 
                     }):null
                     }
                </div> 
            {/* </div> */}
              
            </div>
           
        </Layouts>
    )
}