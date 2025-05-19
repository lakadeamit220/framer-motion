import { useState } from "react";
import { motion } from "framer-motion";

function DynamicAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        onClick={() => setIsVisible(!isVisible)}
      >
        Toggle
      </button>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 2 }}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "orange",
          margin: "20px auto",
        }}
      />
    </div>
  );
}

export default DynamicAnimation;
