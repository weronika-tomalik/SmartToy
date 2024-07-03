import React from "react";
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import {HashRouter} from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewToyPage from "./pages/NewToyPage";
import NewListOfToys from  "./pages/NewListOfToys";
import SelectedToysPage from "./pages/SelectedToysPage";



const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path="newlistoftoys" element={<NewListOfToys/>} />
                <Route path='newtoy' element={<NewToyPage/>} />
                <Route path='toymovement' element={<SelectedToysPage typeOfToy='movement'/>}  />
                <Route path='toyinteractive' element={<SelectedToysPage typeOfToy='interactive'/>} />
                <Route path='toystructural' element={<SelectedToysPage typeOfToy='structural'/>} />
            </Routes>
        </HashRouter>
    )}

export default App

