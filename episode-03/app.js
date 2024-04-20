import React from 'react';
import ReactDOM from 'react-dom/client';

//Create the element using without JSX
/* 
const heading1 = React.createElement("h1", { class: "heading1" }, "This is heading 1");
const heading2 = React.createElement("h2", { class: "heading2" }, "This is heading 2");
const heading3 = React.createElement("h3", { class: "heading3" }, "This is heading 3");
const title = React.createElement("div", {class: "title"}, [heading1,heading2,heading3]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(title);
*/

//Accessing the js expression to the JSX by using {}
const name = "shubham";

//Create the element using JSX
const heading = (
    <div className="title">
        <h1>This is heading1</h1>
        <h2>This is heading2</h2>
        <h3>This is heading3</h3>
    </div>
);

//Create a create component ExampleFirst
const ExampleFirst = () => {
    return (
        <div>
            <h1>{name}</h1>
            <h1>This is component example first</h1>
            {heading}
        </div>
    );
};

//Create the component ExampleSecond
//using the component ExampleFirst inside ExampleSecond(Component Composition)
const  ExampleSecond = () => {
    return (
        <>
          <h1>This is component example second</h1>
          <ExampleFirst/>  
        </>
    );
};

//Create a header component for our react application
const Header = () => {
    return (
        <nav>
            <ul>
                <li><img src="https://i.pinimg.com/736x/24/37/73/2437730f7e3a5705e205e67fa2cd1020.jpg" className="logo"/></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>                
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);