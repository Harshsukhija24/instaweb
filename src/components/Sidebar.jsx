import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { addElement } from "../store/builderSlice";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const elementTypes = [
  {
    type: "text",
    label: "Text",
    icon: "📝",
    description: "Add text content to your page",
  },
  {
    type: "image",
    label: "Image",
    icon: "🖼️",
    description: "Insert images from URL",
  },
  {
    type: "button",
    label: "Button",
    icon: "🔘",
    description: "Add interactive buttons",
  },
];

const validationSchema = Yup.object().shape({
  content: Yup.string().required("Required"),
  style: Yup.object().shape({
    fontSize: Yup.string(),
    color: Yup.string(),
    backgroundColor: Yup.string(),
    width: Yup.string(),
    height: Yup.string(),
  }),
});

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("elements");
  const dispatch = useDispatch();
  const selectedElement = useSelector((state) => state.builder.selectedElement);

  const handleDragStart = (type) => {
    dispatch(
      addElement({
        type,
        content: type === "text" ? "New Text" : "",
        x: 100,
        y: 100,
        style: {},
      })
    );
  };

  return (
    <div className="sidebar">
      <div className="flex gap-2 mb-6">
        <button
          className={`tab-button ${
            activeTab === "elements" ? "active" : "inactive"
          }`}
          onClick={() => setActiveTab("elements")}
        >
          Elements
        </button>
        <button
          className={`tab-button ${
            activeTab === "settings" ? "active" : "inactive"
          }`}
          onClick={() => setActiveTab("settings")}
        >
          Settings
        </button>
      </div>

      {activeTab === "elements" ? (
        <div className="space-y-3">
          {elementTypes.map(({ type, label, icon, description }) => (
            <motion.div
              key={type}
              className="element-preview"
              onClick={() => handleDragStart(type)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-2xl">{icon}</span>
              <div>
                <h3 className="font-medium text-gray-900">{label}</h3>
                <p className="text-sm text-gray-500">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <Formik
          initialValues={selectedElement || {}}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            // Handle form submission
          }}
        >
          {({ values, handleChange }) => (
            <Form className="space-y-4">
              {selectedElement?.type === "text" && (
                <>
                  <div>
                    <label className="form-label">Text Content</label>
                    <input
                      type="text"
                      name="content"
                      value={values.content}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Enter text content"
                    />
                  </div>
                  <div>
                    <label className="form-label">Font Size</label>
                    <input
                      type="text"
                      name="style.fontSize"
                      value={values.style?.fontSize}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="e.g., 16px"
                    />
                  </div>
                </>
              )}

              {selectedElement?.type === "image" && (
                <>
                  <div>
                    <label className="form-label">Image URL</label>
                    <input
                      type="text"
                      name="content"
                      value={values.content}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Enter image URL"
                    />
                  </div>
                  <div>
                    <label className="form-label">Width</label>
                    <input
                      type="text"
                      name="style.width"
                      value={values.style?.width}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="e.g., 200px"
                    />
                  </div>
                </>
              )}

              {selectedElement?.type === "button" && (
                <>
                  <div>
                    <label className="form-label">Button Text</label>
                    <input
                      type="text"
                      name="content"
                      value={values.content}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Enter button text"
                    />
                  </div>
                  <div>
                    <label className="form-label">Background Color</label>
                    <input
                      type="color"
                      name="style.backgroundColor"
                      value={values.style?.backgroundColor}
                      onChange={handleChange}
                      className="w-full h-10 rounded-lg cursor-pointer"
                    />
                  </div>
                </>
              )}
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default Sidebar;
