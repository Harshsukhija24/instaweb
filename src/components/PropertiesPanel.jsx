import React from "react";

const PropertiesPanel = ({ selectedElement, onUpdateElement }) => {
  if (!selectedElement) {
    return (
      <div className="properties-panel">
        <h2 className="properties-title">Properties</h2>
        <p className="no-selection-message">
          Select an element to edit its properties
        </p>
      </div>
    );
  }

  const handleStyleChange = (property, value) => {
    onUpdateElement({
      ...selectedElement,
      style: {
        ...selectedElement.style,
        [property]: value,
      },
    });
  };

  const handleContentChange = (content) => {
    onUpdateElement({
      ...selectedElement,
      content,
    });
  };

  return (
    <div className="properties-panel">
      <h2 className="properties-title">Properties</h2>
      <div className="properties-fields">
        {/* Common Properties */}
        <div className="property-field">
          <label>Position X</label>
          <input
            type="number"
            value={selectedElement.x}
            onChange={(e) =>
              onUpdateElement({
                ...selectedElement,
                x: parseInt(e.target.value),
              })
            }
          />
        </div>
        <div className="property-field">
          <label>Position Y</label>
          <input
            type="number"
            value={selectedElement.y}
            onChange={(e) =>
              onUpdateElement({
                ...selectedElement,
                y: parseInt(e.target.value),
              })
            }
          />
        </div>

        {/* Element-specific Properties */}
        {(selectedElement.type === "heading" ||
          selectedElement.type === "paragraph") && (
          <>
            <div className="property-field">
              <label>Text Content</label>
              <input
                type="text"
                value={selectedElement.content}
                onChange={(e) => handleContentChange(e.target.value)}
              />
            </div>
            <div className="property-field">
              <label>Font Size</label>
              <input
                type="number"
                value={parseInt(selectedElement.style?.fontSize) || 16}
                onChange={(e) =>
                  handleStyleChange("fontSize", `${e.target.value}px`)
                }
              />
            </div>
            <div className="property-field">
              <label>Color</label>
              <input
                type="color"
                value={selectedElement.style?.color || "#000000"}
                onChange={(e) => handleStyleChange("color", e.target.value)}
              />
            </div>
          </>
        )}

        {selectedElement.type === "image" && (
          <>
            <div className="property-field">
              <label>Image URL</label>
              <input
                type="text"
                value={selectedElement.content}
                onChange={(e) => handleContentChange(e.target.value)}
              />
            </div>
            <div className="property-field">
              <label>Width</label>
              <input
                type="number"
                value={parseInt(selectedElement.style?.width) || 200}
                onChange={(e) =>
                  handleStyleChange("width", `${e.target.value}px`)
                }
              />
            </div>
            <div className="property-field">
              <label>Height</label>
              <input
                type="number"
                value={parseInt(selectedElement.style?.height) || 200}
                onChange={(e) =>
                  handleStyleChange("height", `${e.target.value}px`)
                }
              />
            </div>
            <div className="property-field">
              <label>Alt Text</label>
              <input
                type="text"
                value={selectedElement.alt || ""}
                onChange={(e) =>
                  onUpdateElement({
                    ...selectedElement,
                    alt: e.target.value,
                  })
                }
              />
            </div>
          </>
        )}

        {selectedElement.type === "button" && (
          <>
            <div className="property-field">
              <label>Button Text</label>
              <input
                type="text"
                value={selectedElement.content}
                onChange={(e) => handleContentChange(e.target.value)}
              />
            </div>
            <div className="property-field">
              <label>Background Color</label>
              <input
                type="color"
                value={selectedElement.style?.backgroundColor || "#3b82f6"}
                onChange={(e) =>
                  handleStyleChange("backgroundColor", e.target.value)
                }
              />
            </div>
            <div className="property-field">
              <label>Text Color</label>
              <input
                type="color"
                value={selectedElement.style?.color || "#ffffff"}
                onChange={(e) => handleStyleChange("color", e.target.value)}
              />
            </div>
            <div className="property-field">
              <label>Padding</label>
              <input
                type="number"
                value={parseInt(selectedElement.style?.padding) || 8}
                onChange={(e) =>
                  handleStyleChange("padding", `${e.target.value}px`)
                }
              />
            </div>
            <div className="property-field">
              <label>Border Radius</label>
              <input
                type="number"
                value={parseInt(selectedElement.style?.borderRadius) || 4}
                onChange={(e) =>
                  handleStyleChange("borderRadius", `${e.target.value}px`)
                }
              />
            </div>
          </>
        )}

        {/* Layout Element Properties */}
        {(selectedElement.type === "container" ||
          selectedElement.type === "section") && (
          <>
            <div className="property-field">
              <label>Width</label>
              <input
                type="number"
                value={parseInt(selectedElement.style?.width) || 300}
                onChange={(e) =>
                  handleStyleChange("width", `${e.target.value}px`)
                }
              />
            </div>
            <div className="property-field">
              <label>Height</label>
              <input
                type="number"
                value={parseInt(selectedElement.style?.height) || 200}
                onChange={(e) =>
                  handleStyleChange("height", `${e.target.value}px`)
                }
              />
            </div>
            <div className="property-field">
              <label>Background Color</label>
              <input
                type="color"
                value={selectedElement.style?.backgroundColor || "#ffffff"}
                onChange={(e) =>
                  handleStyleChange("backgroundColor", e.target.value)
                }
              />
            </div>
            <div className="property-field">
              <label>Border Width</label>
              <input
                type="number"
                value={parseInt(selectedElement.style?.borderWidth) || 1}
                onChange={(e) =>
                  handleStyleChange("borderWidth", `${e.target.value}px`)
                }
              />
            </div>
            <div className="property-field">
              <label>Border Color</label>
              <input
                type="color"
                value={selectedElement.style?.borderColor || "#e5e7eb"}
                onChange={(e) =>
                  handleStyleChange("borderColor", e.target.value)
                }
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PropertiesPanel;
