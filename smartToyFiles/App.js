import React from "react";
import { createRoot } from "react-dom/client";

import ToysList from "./components/ToyList";

const App = () => (
    <div>
        <ToysList/>
    </div>);


const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);

