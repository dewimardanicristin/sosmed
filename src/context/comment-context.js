import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const CommentContext = createContext();

export function CommentProvider({ children }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/comments`
      );
      console.log(data);
      setComments(data);
    }
    fetchData();
  }, []);
  return (
    <CommentContext.Provider
      value={{
        comments
      }}
    >
      {children}
    </CommentContext.Provider>
  );
}

export function CommentContextAPI() {
  const context = useContext(CommentContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
