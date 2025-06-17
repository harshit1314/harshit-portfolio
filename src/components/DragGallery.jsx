// components/DragGallery.jsx
import { useRef, useState } from 'react';
import { motion, PanInfo, useMotionValue } from 'framer-motion';

const DragGallery = ({ projects }) => {
  const constraintsRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const x = useMotionValue(0);

  const handleDragEnd = (event, info: PanInfo) => {
    if (info.offset.x < -100) {
      setActiveIndex((prev) => Math.min(prev + 1, projects.length - 1));
    } else if (info.offset.x > 100) {
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <div className="drag-gallery" ref={constraintsRef}>
      <motion.div
        drag="x"
        dragConstraints={constraintsRef}
        onDragEnd={handleDragEnd}
        style={{ x }}
        className="gallery-inner"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`gallery-item ${index === activeIndex ? 'active' : ''}`}
            animate={{
              scale: index === activeIndex ? 1.05 : 0.9,
              opacity: index === activeIndex ? 1 : 0.6,
            }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
export default DragGallery;