// import { useUser } from "@auth0/nextjs-auth0/client";

// import React, { createContext, useState, useEffect } from "react";
// // import data from "../utils/data";
// export const UserProfileContext = createContext();

// const UserProfileProvider = ({ children }) => {
//   const { user, error, isLoading } = useUser();

//   const [userProfile, setUserProfile] = useState({
//     name: user.name,
//     email: user.email,
//     blogPosts: "lol",
//   });
//   console.log(userProfile);
//   return (
//     <UserProfileContext.Provider value={{ userProfile, setUserProfile }}>
//       {children}
//     </UserProfileContext.Provider>
//   );
// };

// export default UserProfileProvider;
