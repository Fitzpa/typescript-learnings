import React from "react";
import { render } from "react-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./styles/reset.scss";
import "./styles/styles.scss";

const App = () => {
  return (
    <React.StrictMode>
      <Navbar />
      <Footer />
    </React.StrictMode>
  );
};

render(React.createElement(App), document.getElementById("root"));
