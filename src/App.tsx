import React from "react";
import { render } from "react-dom";
import Footer from "./components/footer";
import OutputContainer from "./components/outputContainer";

const App = () => {
  return (
    <React.StrictMode>
      <OutputContainer />
      <Footer />
    </React.StrictMode>
  );
};

render(React.createElement(App), document.getElementById("root"));
