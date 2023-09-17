import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import { Menu } from "./Menu";
import { Contact } from "./Contact";
import { useState } from "react";

function Routere() {
    
    const [username, setUsername] = useState("")

    return ( 
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<h1> PAGE NOT FOUND </h1>} />
            </Routes>
      </Router>
     );
}

const NavBar = () => {
    return (
        <div>
            <Link to="/"> Home </Link>
            <Link to="/menu"> Menu </Link>
            <Link to="/contact"> Contact </Link>
        </div>
    )
}

export default Routere;

