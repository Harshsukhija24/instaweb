import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { motion } from "framer-motion";

const DraggableElement = ({ children, id, type }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data: {
      type,
    },
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="element"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default DraggableElement;
