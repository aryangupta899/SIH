import User from './Components/User';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import University from './Components/University';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/university" element={<University />} />
      </Routes>
    </Router>
  );
}

export default App;
