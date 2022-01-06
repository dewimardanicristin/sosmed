import React from "react";
import Detail from "./../../components/detail";
import Comment from "../../components/comment";
import Layouts from "../../layouts";
import { PostContextAPI } from "../../context/post-context";
import { UserContextAPI } from "../../context/user-context";
import { CommentContextAPI } from "../../context/comment-context";
import { useParams } from "react-router-dom";


export default function DetailPost() {
  const { posts } = PostContextAPI();
  const { users } = UserContextAPI();
  const { comments } = CommentContextAPI();

  let { idBaru } = useParams();
  console.log(idBaru);

  let detailPost = posts !== undefined ? posts.find((x) => x.id === Number(idBaru)) : null;
  let nama = users !== undefined ? users.find((x) => x.id === detailPost.userId) : null;
  return (
    <Layouts>
      <div className="my-5">
        <div className="container">
          <div className="row">
            <div className="">
              {
                <Detail
                  title={detailPost !== undefined ? detailPost.title : null}
                  // title={detailPost.title}
                  body={detailPost !== undefined ? detailPost.body : null}
                  // body={detailPost.body}
                  name={nama !== undefined ? nama.name : null}
                  idBaru={detailPost !== undefined ? detailPost.userId : null}
                />
              }
            </div>
          </div>
          <div className="bg-light p-3">
            <h3>Leave a Comment Here!</h3>
            <textarea
              className="form-control p-3"
              aria-label="With textarea"
              placeholder="write here..."
            ></textarea>
            <button className="p-2 my-3 px-4 rounded-3 bg-danger border-danger text-white fw-bold">
              Send
            </button>
            <h5 className="fw-bold mt-4">Comments : </h5>

            <div className="row">
              {comments !== undefined && posts !== undefined
                ? comments
                    .filter((x) => x.postId === Number(idBaru))
                    .map((v) => {
                      return (
                        <div className="">
                          <Comment key={v.id} name={v.name} body={v.body} />
                        </div>
                      );
                    })
                : null}
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
}
