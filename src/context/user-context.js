// import { createContext, useEffect, useState } from "react";

// const initialValue = null;

// export const UserContext = createContext(initialValue);

// export function UsersProvider(props) {
//     const [user, setUser] = useState(initialValue);
//     const [userLoading, setUserLoading] = useState(true)

//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/posts")
//             .then((response) => response.json())
//             .then((agent) => {
//                 setUser(agent)
//             })
//             .finally(() => setUserLoading(false));
//     }, []);

//     const value = {
//         user: user,
//         userLoading: userLoading
//     };

//     return (
//         <UserContext.Provider value= { value } >
//             { props.children }
//         </UserContext.Provider>
//   );
// }

import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const UserContext = createContext();

export function UsersProvider({ children }) {
  const [users, setUser] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      console.log(data);
      setUser(data);
    }
    fetchData();
  }, []);
  return (
    <UserContext.Provider
      value={{
        users
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function UserContextAPI() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
