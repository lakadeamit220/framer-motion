import { motion } from "framer-motion";

function SVGAnimation() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.svg
        width="200"
        height="200"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="border"
      >
        {/* Circle Animation */}
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          fill="transparent"
          stroke="red"
          strokeWidth="5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5, ease: "easeInOut" }}
        />

        {/* Line Animation */}
        <motion.line
          x1="10"
          y1="90"
          x2="90"
          y2="10"
          stroke="green"
          strokeWidth="2"
          initial={{ strokeDasharray: "0 100" }}
          animate={{ strokeDasharray: "100 0" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Rectangle Animation */}
        <motion.rect
          x="25"
          y="25"
          width="50"
          height="50"
          fill="transparent"
          stroke="blue"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
      </motion.svg>
    </div>
  );
}

export default SVGAnimation;
