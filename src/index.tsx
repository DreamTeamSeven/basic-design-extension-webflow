import React from "react";
import ReactDOM from "react-dom/client";

const App: React.FC = () => {
  const addText = async () => {
    // Get the current selected Element
    const el = await webflow.getSelectedElement();

    // If text content can be set, update it!
    if (el && el.textContent) {
      await el.setTextContent("hello world!");
    } else {
      alert("Please select a text element");
    }
  };

  // const addElement = async () => {
  //   // Get the current selected Element
  //   const selectedElement = await webflow.getSelectedElement()
  //   if (selectedElement) {
  //     // Insert DIV after selected Element
  //     const newDiv = await selectedElement.after(webflow.elementPresets.DivBlock)

  //     // await newDiv?.append(webflow.elementPresets.DOM)
  //     // if (newDiv&& newDiv.textContent) {
  //     //   await newDiv.setCustomAttribute("newDiv", "New div added to the screen")
  //     // }

  //     console.log(`${JSON.stringify(newDiv)}`)
  //   } else {
  //     alert("Please select an element");
  //   }
  // };
  
  // const addComponent = async () => {
  //   const rootElement = await webflow.getSelectedElement();
  //   if (rootElement) {
  //     // Create a component from the Root Element
  //     const component = await webflow.registerComponent('MyCustomComponent', rootElement);
  //     console.log(`Component registered with ID: ${component.id}`);
  //   } else {
  //     console.log("No element is currently selected. Please select a root element first.");
  //   }
  // };
  return (
    <div>
      <h1>Welcome to My React App</h1>
      <p>This is a basic React application</p>
      <button onClick={addText}> Add text </button>
      {/* <button onClick={addElement}> Add element </button> */}
      {/* <button onClick={addComponent}> Add component </button> */}
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
