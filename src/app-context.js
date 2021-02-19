import React from 'react';
const AppContext = React.createContext(
    {
        baseUrl: "http://localhost:3001",
        headers:{
            "Content-Type": "application/json",
        },
        user: null,
        login: false,
        error: false,
        snackbarProps:{
            open:false,
            duration: 5000, 
            severity: "error", 
            message: "", 
            vertical:"top", 
            horizontal:"center"
        }
    }
);

export default AppContext;