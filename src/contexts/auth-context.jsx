import React from "react";

const authContext = React.createContext({isUsedLoggedIn: null, handleAuth: () => {}});

export default authContext;