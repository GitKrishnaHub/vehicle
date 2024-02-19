import { BrowserRouter as Router  } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
 

function App() {
  return (
    <Router>
      <Login/>
    </Router>
  );
}

export default App;
