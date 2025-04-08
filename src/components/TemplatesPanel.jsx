import React from "react";

const TemplatesPanel = ({ onSelectTemplate }) => {
  const templates = [
    {
      id: "business",
      name: "Business Website",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG85hqAUcnmMhKOaGXDZCC7dsT4Y6NGNDnXw&s",
      sections: [
        {
          type: "header",
          elements: [
            {
              type: "container",
              content: "",
              style: {
                width: "100%",
                height: "80px",
                backgroundColor: "#ffffff",
                display: "flex",
                alignItems: "center",
                padding: "0 2rem",
              },
              x: 0,
              y: 0,
            },
            {
              type: "heading",
              content: "Your Company",
              style: { fontSize: "24px", color: "#1F2937" },
              x: 20,
              y: 25,
            },
          ],
        },
        {
          type: "hero",
          elements: [
            {
              type: "container",
              content: "",
              style: {
                width: "100%",
                height: "400px",
                backgroundColor: "#4F46E5",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              },
              x: 0,
              y: 80,
            },
            {
              type: "heading",
              content: "Welcome to Our Business",
              style: {
                fontSize: "48px",
                color: "#ffffff",
                textAlign: "center",
              },
              x: 200,
              y: 200,
            },
            {
              type: "button",
              content: "Get Started",
              style: {
                backgroundColor: "#ffffff",
                color: "#4F46E5",
                padding: "12px 24px",
                borderRadius: "6px",
                fontSize: "18px",
              },
              x: 350,
              y: 300,
            },
          ],
        },
      ],
    },
    {
      id: "portfolio",
      name: "Portfolio",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFVTCNB3SmBsIwsSpr--BxJ9-GOziHWyUvZA&s",
      sections: [
        {
          type: "header",
          elements: [
            {
              type: "container",
              content: "",
              style: {
                width: "100%",
                height: "80px",
                backgroundColor: "#111827",
                display: "flex",
                alignItems: "center",
                padding: "0 2rem",
              },
              x: 0,
              y: 0,
            },
            {
              type: "heading",
              content: "John Doe",
              style: { fontSize: "24px", color: "#ffffff" },
              x: 20,
              y: 25,
            },
          ],
        },
        {
          type: "hero",
          elements: [
            {
              type: "container",
              content: "",
              style: {
                width: "100%",
                height: "500px",
                backgroundColor: "#10B981",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              },
              x: 0,
              y: 80,
            },
            {
              type: "heading",
              content: "Creative Developer",
              style: {
                fontSize: "56px",
                color: "#ffffff",
                textAlign: "center",
              },
              x: 200,
              y: 250,
            },
          ],
        },
      ],
    },
    {
      id: "blog",
      name: "Blog",
      thumbnail:
        "data:image/jpeg;base64,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",
      sections: [
        {
          type: "header",
          elements: [
            {
              type: "container",
              content: "",
              style: {
                width: "100%",
                height: "80px",
                backgroundColor: "#ffffff",
                borderBottom: "1px solid #E5E7EB",
                display: "flex",
                alignItems: "center",
                padding: "0 2rem",
              },
              x: 0,
              y: 0,
            },
            {
              type: "heading",
              content: "My Blog",
              style: { fontSize: "24px", color: "#EC4899" },
              x: 20,
              y: 25,
            },
          ],
        },
        {
          type: "hero",
          elements: [
            {
              type: "container",
              content: "",
              style: {
                width: "100%",
                height: "300px",
                backgroundColor: "#FDF2F8",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              },
              x: 0,
              y: 80,
            },
            {
              type: "heading",
              content: "Welcome to My Blog",
              style: {
                fontSize: "42px",
                color: "#EC4899",
                textAlign: "center",
              },
              x: 200,
              y: 180,
            },
          ],
        },
      ],
    },
  ];

  const handleTemplateClick = (template) => {
    onSelectTemplate(template);
  };

  return (
    <div className="templates-panel">
      <div className="templates-grid">
        {templates.map((template) => (
          <div
            key={template.id}
            className="template-item"
            onClick={() => handleTemplateClick(template)}
          >
            <div className="template-thumbnail">
              <img src={template.thumbnail} alt={template.name} />
            </div>
            <div className="template-name">{template.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplatesPanel;
