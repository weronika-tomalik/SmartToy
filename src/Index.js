import React from "react";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/scss/main.scss";
import App from "./App"
import '@fortawesome/fontawesome-free/css/all.min.css';
import {ThemeProvider} from './store/ThemeContext'


const Index = () => (
    <ThemeProvider>
        <App/>
    </ThemeProvider>
    )

const container = document.getElementById("index");
const root = createRoot(container);
root.render(<Index />);