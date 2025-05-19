import { useState } from "react";
import { motion } from "framer-motion";

function LayoutAnimation() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div onClick={() => setIsToggled(!isToggled)}>
      <motion.div
        layout
        style={{
          width: isToggled ? 500 : 100,
          height: 100,
          backgroundColor: "teal",
          margin: "20px auto",
        }}
      />
    </div>
  );
}

export default LayoutAnimation;
