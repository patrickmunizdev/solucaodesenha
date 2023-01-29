import {
   BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import { Login } from "./pages/login";

function App() {
  return (
     <Router>
        <Routes>
           {/* <Route path="/" element={<Dashboard />} /> */}
           <Route path="/login" element={<Login />} />
           {/* <Route path="/cadastro" element={<Cadastro />} /> */}
        </Routes>
     </Router>
  );
}

export default App;