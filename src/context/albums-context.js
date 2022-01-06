import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const AlbumContext = createContext();

export function AlbumProvider({ children }) {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/albums`
      );
      console.log(data);
      setAlbums(data);
    }
    fetchData();
  }, []);
  return (
    <AlbumContext.Provider
      value={{
        albums
      }}
    >
      {children}
    </AlbumContext.Provider>
  );
}

export function AlbumContextAPI() {
  const context = useContext(AlbumContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
