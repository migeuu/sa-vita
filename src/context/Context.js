import React, { createContext, useState } from "react";

export const ContextApp = createContext();

const Context = ({ children }) => {
  const [user, setUser] = useState({
    id: null,
    username: null,
    fullName: null,
    description: null,
    email: null,
    password: null,
  });

  return (
    <ContextApp.Provider value={{ user, setUser }}>
      {children}
    </ContextApp.Provider>
  );
};

export default Context;
