import { motion } from "framer-motion";

function BasicAnimation() {
  return (
    <div className="flex justify-around">
      <motion.div
        style={{
          width: 100,
          height: 100,
          backgroundColor: "blue",
        }}
        animate={{ x: 200 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className="w-10 h-20 text-amber-500 border-4"
        animate={{ rotate: 360 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      />

      <motion.div
      className="border-10 w-50 h-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      />
    </div>
  );
}

export default BasicAnimation;
