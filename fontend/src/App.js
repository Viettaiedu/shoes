import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { publicRoutes } from "./routes";
import BackDrop from "./components/BackDrop";
import SideBar from "./components/SideBar";
function App() {

  const [showSideBar , setShowSideBar] = useState(false);

  const handelHideSidebar = (e) => {
    const backDrop = document.querySelector('.backdrop');
    if((backDrop === e.target)) {
      setShowSideBar(false);
    } 
  }
  return (
    <Router>
      <BackDrop show={showSideBar} onClickHideSideSidebar={handelHideSidebar }>
        <SideBar show={showSideBar} />
      </BackDrop>
        <Header onClickShowSidebar={() => setShowSideBar(true)}/>
        <Routes>
            {publicRoutes.map((route,index) => {
              const Comp = route.component;
              return (
                <Route key={index} path={route.path} element={<Comp/>}/>
              )
             } )}
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
