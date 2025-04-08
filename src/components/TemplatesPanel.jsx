import React from "react";

const TemplatesPanel = ({ onSelectTemplate }) => {
  const templates = [
    {
      id: "business",
      name: "Business Website",
      thumbnail:
        "https://via.placeholder.com/150x100/4F46E5/ffffff?text=Business",
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
        "https://via.placeholder.com/150x100/10B981/ffffff?text=Portfolio",
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
      thumbnail: "https://via.placeholder.com/150x100/EC4899/ffffff?text=Blog",
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
