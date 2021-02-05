import React from 'react';
const AppContext = React.createContext({
    baseUrl: "http://localhost:3001",
    headers:{
        "Content-Type": "application/json",
    },
    user: null,
    login: false
});

export default AppContext;