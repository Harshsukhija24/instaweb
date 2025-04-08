import React, { useRef, useState } from "react";

const Canvas = ({
  elements,
  selectedElement,
  onSelectElement,
  onUpdatePosition,
  onDrop,
}) => {
  const canvasRef = useRef(null);
  const [activeDragSection, setActiveDragSection] = useState(null);

  const handleMouseDown = (e, element) => {
    e.stopPropagation();
    onSelectElement(element);

    const startX = e.clientX;
    const startY = e.clientY;
    const elementX = element.x;
    const elementY = element.y;

    const handleMouseMove = (moveEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const deltaY = moveEvent.clientY - startY;
      onUpdatePosition(element.id, elementX + deltaX, elementY + deltaY);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleDragOver = (e, section) => {
    e.preventDefault();
    setActiveDragSection(section);
  };

  const handleDragLeave = () => {
    setActiveDragSection(null);
  };

  const handleDrop = (e, section) => {
    e.preventDefault();
    setActiveDragSection(null);
    onDrop(e, section);
  };

  const renderElement = (element) => {
    const elementStyle = {
      position: "absolute",
      left: element.x,
      top: element.y,
      ...element.style,
    };

    const commonProps = {
      key: element.id,
      className: `canvas-element ${
        selectedElement?.id === element.id ? "selected" : ""
      }`,
      style: elementStyle,
      onClick: (e) => {
        e.stopPropagation();
        onSelectElement(element.id);
      },
      onMouseDown: (e) => handleMouseDown(e, element),
    };

    switch (element.type) {
      case "heading":
        return <h2 {...commonProps}>{element.content}</h2>;
      case "paragraph":
        return <p {...commonProps}>{element.content}</p>;
      case "image":
        return (
          <img
            {...commonProps}
            src={element.content}
            alt={element.alt || "User added"}
          />
        );
      case "button":
        return <button {...commonProps}>{element.content}</button>;
      case "container":
        return (
          <div
            {...commonProps}
            className={`${commonProps.className} container-element`}
          >
            {element.content || "Container"}
          </div>
        );
      case "section":
        return (
          <div
            {...commonProps}
            className={`${commonProps.className} section-element`}
          >
            {element.content || "Section"}
          </div>
        );
      case "columns":
        return (
          <div
            {...commonProps}
            className={`${commonProps.className} columns-element`}
          >
            {element.content || "Columns"}
          </div>
        );
      case "grid":
        return (
          <div
            {...commonProps}
            className={`${commonProps.className} grid-element`}
          >
            {element.content || "Grid"}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="canvas-container" ref={canvasRef}>
      {elements.length === 0 ? (
        <div className="empty-canvas">
          <div className="empty-canvas-sections">
            <div
              className={`drop-section ${
                activeDragSection === "header" ? "active" : ""
              }`}
              onDragOver={(e) => handleDragOver(e, "header")}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, "header")}
            >
              <div>Drop Header Elements Here</div>
            </div>
            <div
              className={`drop-section ${
                activeDragSection === "hero" ? "active" : ""
              }`}
              onDragOver={(e) => handleDragOver(e, "hero")}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, "hero")}
            >
              <div>Drop Hero Section Elements Here</div>
            </div>
            <div
              className={`drop-section ${
                activeDragSection === "main" ? "active" : ""
              }`}
              onDragOver={(e) => handleDragOver(e, "main")}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, "main")}
            >
              <div className="drop-container"></div>
            </div>
            <div
              className={`drop-section ${
                activeDragSection === "content" ? "active" : ""
              }`}
              onDragOver={(e) => handleDragOver(e, "content")}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, "content")}
            >
              <div>Drop Content Section Elements Here</div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="canvas-elements"
          onClick={() => onSelectElement(null)}
          onDragOver={(e) => handleDragOver(e, "main")}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, "main")}
        >
          {elements.map(renderElement)}
        </div>
      )}
    </div>
  );
};

export default Canvas;
