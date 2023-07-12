import "./App.css";
import Event from "./pages/Event.js";
import Team from "./pages/Team.js";
import Gallery from "./pages/Gallery_mainpg";
import Home from "./pages/Home.js";
import Event_Info from "./pages/Event_Info";
import Event_Info2 from "./pages/Event_Info2";
import Event_Info3 from "./pages/Event_Info3";
import Event_Info4 from "./pages/Event_Info4";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Gall_Page1 from "./pages/gal_pages/Gall_Page1";
import Gall_Page2 from "./pages/gal_pages/Gall_Page2";
import Gall_Page3 from "./pages/gal_pages/Gall_Page3";
import Gall_Page4 from "./pages/gal_pages/Gall_Page4";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/event" element={<Event />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/Event_Info" element={<Event_Info />} />
                    <Route path="/Event_Info2" element={<Event_Info2 />} />
                    <Route path="/Event_Info3" element={<Event_Info3 />} />
                    <Route path="/Event_Info4" element={<Event_Info4 />} />
                    <Route path="/Gall_Page1" element={<Gall_Page1 />} />
                    <Route path="/Gall_Page2" element={<Gall_Page2 />} />
                    <Route path="/Gall_Page3" element={<Gall_Page3 />} />
                    <Route path="/Gall_Page4" element={<Gall_Page4 />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
