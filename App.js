import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Title = () => <h1>This is the title!</h1>;

const titleAsElement = <h2>this title element</h2>;

// React Functional Component
const HeadingComponent = () => (
  <div>
    <Title />
    {titleAsElement}
    <h1 id="heading">Hello, React From component!</h1>
  </div>
);

root.render(<HeadingComponent />);
