import "./App.css";
import Navbar from "./component/Navbar";
import BotNav from "./component/botNav";
import Home from "./pages/Home";
import Notification from "./pages/Notification";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/notification" element={<Notification />} />
        </Routes>
        <BotNav />
      </Router>
    </div>
  );
}

export default App;
