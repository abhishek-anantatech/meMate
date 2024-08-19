import { Routes, Route } from "react-router-dom";
import './App.css';
import { LandingPage } from "./pages";


function App() {
  return (
    <div className="App">
       <Routes>
          <Route path="/" exact element={<LandingPage/>}/>
       </Routes>
    </div>
  );
}

export default App;
