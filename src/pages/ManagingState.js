import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import { Profile } from "./Profile";
import { Contact } from "./Contact";
import { useState, createContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const AppContext = createContext();

function Routere() {

    const client = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false
            }
        }
    });
    
    const [username, setUsername] = useState("Ay_Tech")

    return ( 
        <QueryClientProvider client={client} >
            <AppContext.Provider value={{username, setUsername}} >
                <Router>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<h1> PAGE NOT FOUND </h1>} />
                    </Routes>
                </Router>
            </AppContext.Provider>
        </QueryClientProvider>
     );
}

const NavBar = () => {
    return (
        <div>
            <Link to="/"> Home </Link>
            <Link to="/profile"> Profile </Link>
            <Link to="/contact"> Contact </Link>
        </div>
    )
}

export default Routere;

