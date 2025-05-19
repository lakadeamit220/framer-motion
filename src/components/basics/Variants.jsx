import { motion } from "framer-motion";

const boxVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

function Variants() {
  return (
    <div className="flex justify-around py-10">
      <motion.div
        variants={boxVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 4 }}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "red",
          margin: "auto",
        }}
      />

      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "green",
          margin: "0 auto",
        }}
      />

      <motion.div
        className="border-5"
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "purple",
          margin: "0 auto",
        }}
      />
    </div>
  );
}

export default Variants;
