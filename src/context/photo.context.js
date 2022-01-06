import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const PhotoContext = createContext();

export function PhotoProvider({ children }) {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/photos`
      );
      console.log(data);
      setPhotos(data);
    }
    fetchData();
  }, []);
  return (
    <PhotoContext.Provider
      value={{
        photos
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
}

export function PhotoContextAPI() {
  const context = useContext(PhotoContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
