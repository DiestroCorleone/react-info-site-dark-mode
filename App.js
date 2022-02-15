import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    const[isDark, setIsDark] = React.useState(false);
    
    function toggleDarkMode() {
        setIsDark(!isDark);
        console.log(`Dark Mode ${isDark}`)
    }
        
    return (
        <div className="container">
            <Navbar darkMode={isDark} toggleDarkMode={toggleDarkMode} />
            <Main darkMode={isDark} />
        </div>
    )
}