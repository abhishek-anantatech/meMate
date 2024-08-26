import { Routes, Route } from "react-router-dom";
import {
  BlogPage,
  FeaturePage,
  LandingPage,
  SinglePage,
  SoftwareUpdatePage,
} from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/feature-page-sales" exact element={<FeaturePage />} />
        <Route path="/blog" exact element={<BlogPage />} />
        <Route path="/software-update" exact element={<SoftwareUpdatePage />} />
        <Route path="/SinglePage" exact element={<SinglePage />} />
      </Routes>
    </div>
  );
}

export default App;
