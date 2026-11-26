import React from "react";
import PerformanceLab from "./pages/PerformanceLab";
import PhotoGallery from "./component/PhotoGallery";
import ProfilerLab from "./pages/ProfilerLab";



function App() {
  return (
    <div className="App">
      <h1>PerformanceLab result</h1>
      <ProfilerLab/>
      <PerformanceLab />
      <PhotoGallery/>
      
    </div>
  );
}

export default App;