import React from "react";
import { render } from "react-dom";

const App = () => {

    return (
        <React.StrictMode>
            <div>
                <h1>TypeScript</h1>
            </div>
        </React.StrictMode>
    );
};

render(React.createElement(App), document.getElementById("root"));
