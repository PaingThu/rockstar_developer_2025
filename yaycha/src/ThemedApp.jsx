import { createContext, useState } from "react";
import App from "./App";

export const AppContext = createContext();

export default function TheamedApp() {
    const [mode, setMode] = useState("dark")
    return (
        
        <AppContext.Provider value={{ mode, setMode }}>
            <App />
        </AppContext.Provider>
    )
}   