import { Routes, Route } from "react-router-dom";
import { FeaturePage, LandingPage } from "./pages";
import './App.css';


function App() {
  return (
    <div className="App">
       <Routes>
       <Route path="/feature-page-sales" exact element={<FeaturePage/>}/>
          <Route path="/" exact element={<LandingPage/>}/>
       </Routes>
    </div>
  );
}

export default App;
