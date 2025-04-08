import React, { useState } from "react";
import TemplatesPanel from "./TemplatesPanel";

const ComponentsPanel = ({ onAddElement, onSelectTemplate }) => {
  const [activeTab, setActiveTab] = useState("elements");

  const layoutElements = [
    { id: "container", name: "Container", icon: "□" },
    { id: "section", name: "Section", icon: "≡" },
    { id: "columns", name: "Columns", icon: "|||" },
    { id: "grid", name: "Grid", icon: "⊞" },
  ];

  const contentElements = [
    { id: "heading", name: "Heading", icon: "T" },
    { id: "paragraph", name: "Paragraph", icon: "≡" },
    { id: "image", name: "Image", icon: "▢" },
    { id: "button", name: "Button", icon: "⊡" },
  ];

  const handleDragStart = (e, element) => {
    e.dataTransfer.setData(
      "application/json",
      JSON.stringify({
        type: element.id,
        content:
          element.id === "heading"
            ? "Heading"
            : element.id === "paragraph"
            ? "Paragraph text"
            : element.id === "button"
            ? "Button"
            : "",
        style: {},
      })
    );
  };

  const renderElement = (element) => (
    <div
      key={element.id}
      className="element-item"
      draggable
      onDragStart={(e) => handleDragStart(e, element)}
      onClick={() =>
        onAddElement({
          type: element.id,
          content:
            element.id === "heading"
              ? "Heading"
              : element.id === "paragraph"
              ? "Paragraph text"
              : element.id === "button"
              ? "Button"
              : "",
          style: {},
        })
      }
    >
      <div className="element-icon">{element.icon}</div>
      <div className="element-label">{element.name}</div>
    </div>
  );

  return (
    <div className="components-panel">
      <div className="components-tabs">
        <button
          className={`tab ${activeTab === "elements" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("elements")}
        >
          Elements
        </button>
        <button
          className={`tab ${activeTab === "templates" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("templates")}
        >
          Templates
        </button>
      </div>

      {activeTab === "elements" ? (
        <>
          <div className="components-section">
            <h3>LAYOUT</h3>
            <div className="element-grid">
              {layoutElements.map(renderElement)}
            </div>
          </div>

          <div className="components-section">
            <h3>CONTENT</h3>
            <div className="element-grid">
              {contentElements.map(renderElement)}
            </div>
          </div>
        </>
      ) : (
        <TemplatesPanel onSelectTemplate={onSelectTemplate} />
      )}
    </div>
  );
};

export default ComponentsPanel;
