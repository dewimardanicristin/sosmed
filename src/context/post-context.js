// import { createContext, useEffect, useState } from "react";


// export const PostContext = createContext();

// export function PostProvider(props) {
//     const [post, setPost] = useState([]);
//     const [postLoading, setPostLoading] = useState(false)

//     useEffect(() => {
//         setPostLoading(true);
//         fetch("https://jsonplaceholder.typicode.com/posts")
//             .then((response) => response.json())
//             .then((agent) => {
//                 setPost(agent)
//             })
//             .finally(() => setPostLoading(false));
//     }, []);

//     const value = {
//         post: post,
//         postLoading: postLoading
//     };

//     return (
//         <PostContext.Provider value= { value } >
//             { props.children }
//         </PostContext.Provider>
//   );
// }

import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const PostContext = createContext();

export function PostProvider({ children }) {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      console.log(data);
      setPost(data);
    }
    fetchData();
  }, []);
  return (
    <PostContext.Provider
      value={{
        posts
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export function PostContextAPI() {
  const context = useContext(PostContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
