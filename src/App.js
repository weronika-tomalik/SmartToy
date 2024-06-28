import React from "react";
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import {HashRouter} from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewToy from "./components/NewToy";
import ToyMovement from "./components/ToyMovement";
import ToyInteractive from "./components/ToyInteractive";
import ToyList from "./components/ToyList";
import ToyStructural from "./components/ToyStructural";

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path="/toylist" element={<ToyList />} />
                <Route path='newtoy' element={<NewToy/>} />
                <Route path='toymovement' element={<ToyMovement/>} />
                <Route path='toyinteractive' element={<ToyInteractive/>} />
                <Route path='toystructural' element={<ToyStructural/>} />
                <Route path='toyspicker' element={<ToyList/>} />
            </Routes>
        </HashRouter>
    )}




export default App

