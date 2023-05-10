import "./App.css";
import Event from "./pages/Event.js";
import Team from "./pages/Team.js";
import Gallery from "./pages/Gallery_mainpg";
import Home from "./pages/Home.js";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/event" element={<Event/>}/>
                    <Route path="/team" element={<Team/>}/>
                    <Route path="/gallery" element={<Gallery/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
