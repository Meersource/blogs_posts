import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import SingleBlog from "./pages/SingleBlog";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" index element={<Home />} />
          <Route exact path="single-blog/:id" index element={<SingleBlog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
