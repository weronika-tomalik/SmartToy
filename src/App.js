import React from "react";
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import {HashRouter} from "react-router-dom";
import Home from "./pages/Home";
import NewToy from "./pages/NewToy";
import NewToyList from "./pages/NewToyList";
import CategoryToys from "./pages/CategoryToys";
import UpdateToyInfo from "./components/UpdateToyInfo";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const App = () => {
    return (
        <HashRouter>
            <Navigation/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path="newlistoftoys" element={<NewToyList/>} />
                <Route path='newtoy' element={<NewToy/>} />
                <Route path='updatetoy/:id' element={<UpdateToyInfo/>} />
                <Route path='toymovement' element={<CategoryToys typeOfToy='movement'/>}  />
                <Route path='toyinteractive' element={<CategoryToys typeOfToy='interactive'/>} />
                <Route path='toystructural' element={<CategoryToys typeOfToy='structural'/>} />
            </Routes>
            <Footer/>
        </HashRouter>
    )}

export default App

