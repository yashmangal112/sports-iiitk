import "./App.css";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Gallery from "./pages/Gallery_mainpg";
import Event from "./pages/Event.js";
import Team from "./pages/Team.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
<<<<<<< HEAD
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Event />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </div>
  );
=======
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
>>>>>>> c5e91db9af0af1f98f0128cf74f5a81456b1a619
}

export default App;
