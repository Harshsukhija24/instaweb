import React, { useState } from "react";
import ComponentsPanel from "./components/ComponentsPanel";
import Canvas from "./components/Canvas";
import PropertiesPanel from "./components/PropertiesPanel";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [device, setDevice] = useState("desktop"); // desktop, tablet, or mobile

  const handleAddElement = (element) => {
    const newElement = {
      id: Date.now().toString(),
      ...element,
      x: 100,
      y: 100,
    };
    setElements([...elements, newElement]);
  };

  const handleSelectElement = (elementId) => {
    const element = elements.find((el) => el.id === elementId);
    setSelectedElement(element);
  };

  const handleUpdateElement = (updatedElement) => {
    const updatedElements = elements.map((element) =>
      element.id === updatedElement.id ? updatedElement : element
    );
    setElements(updatedElements);
    setSelectedElement(updatedElement);
  };

  const handleElementPosition = (id, x, y) => {
    const updatedElements = elements.map((element) => {
      if (element.id === id) {
        return { ...element, x, y };
      }
      return element;
    });
    setElements(updatedElements);
  };

  const handleDrop = (e, section) => {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData("application/json"));

    // Calculate drop position relative to the canvas
    const canvasRect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - canvasRect.left;
    const y = e.clientY - canvasRect.top;

    const newElement = {
      id: Date.now().toString(),
      ...data,
      x,
      y,
      section,
    };

    setElements([...elements, newElement]);
  };

  const handleSelectTemplate = (template) => {
    const newElements = template.sections.flatMap((section, index) =>
      section.elements.map((element) => ({
        ...element,
        id: Date.now() + index + Math.random(),
      }))
    );
    setElements(newElements);
    setSelectedElement(null);
  };

  const handleDeviceChange = (newDevice) => {
    setDevice(newDevice);
  };

  return (
    <div className="app">
      <Header device={device} onDeviceChange={handleDeviceChange} />
      <div className="left-panel">
        <ComponentsPanel
          onAddElement={handleAddElement}
          onSelectTemplate={handleSelectTemplate}
        />
      </div>
      <div className="main-canvas">
        <Canvas
          elements={elements}
          selectedElement={selectedElement}
          onSelectElement={handleSelectElement}
          onUpdatePosition={handleElementPosition}
          onDrop={handleDrop}
          device={device}
        />
      </div>
      <div className="right-panel">
        <PropertiesPanel
          selectedElement={selectedElement}
          onUpdateElement={handleUpdateElement}
        />
      </div>
    </div>
  );
}

export default App;
