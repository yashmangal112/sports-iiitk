import "./App.css";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Event from "./pages/Event.js";
import Team from "./pages/Team.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/event" element={<Event />} />
                    <Route exact path="/team" element={<Team />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
