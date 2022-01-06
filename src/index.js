import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Routes from "./routers";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { PostProvider } from "./context/post-context";
import { UsersProvider } from "./context/user-context";
import { CommentProvider } from "./context/comment-context";
import { CountProvider } from "./context/count-context";
import { AlbumProvider } from "./context/albums-context";
import { BrowserRouter } from "react-router-dom";
import {PhotoProvider} from "./context/photo.context";

ReactDOM.render(
  <UsersProvider>
    <PostProvider>
    <AlbumProvider>
      <PhotoProvider>
      <CommentProvider>
        <CountProvider>
          <React.StrictMode>
            <BrowserRouter>
              <Routes />
            </BrowserRouter>
          </React.StrictMode>
        </CountProvider>
      </CommentProvider>
      </PhotoProvider>
      </AlbumProvider>
    </PostProvider>
  </UsersProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
