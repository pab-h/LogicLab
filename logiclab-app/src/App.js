import React from "react";


import TopBar from "./ui/navBar.js"
import SideBar from "./ui/sideBar.js"

function App() {
  return (
    <div className="App max-h-screen flex-col bg-[#262626] h-screen w-screen">
      <TopBar/>
      <canvas className="w-full absolute z-0"/>
      <SideBar/>
    </div>
  );
}

export default App;
