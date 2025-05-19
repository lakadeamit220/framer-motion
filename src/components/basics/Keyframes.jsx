import { motion } from "framer-motion";

function Keyframes() {
  return (
    <motion.div
      animate={{ x: [0, 200, 0], y: [0, -200, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
      style={{
        width: 100,
        height: 100,
        backgroundColor: "pink",
        margin: "0 auto",
      }}
    />
  );
}

export default Keyframes;
