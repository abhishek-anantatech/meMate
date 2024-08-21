import { Routes, Route } from "react-router-dom";
import { FeaturePage, LandingPage } from "./pages";
import './App.css';


function App() {
  return (
    <div className="App">
       <Routes>
          <Route path="/" exact element={<LandingPage/>}/>
          <Route path="/feature-page-sales" exact element={<FeaturePage/>}/>
       </Routes>
    </div>
  );
}

export default App;
