import { motion } from "framer-motion";
import '../Intro.css';

const TypingEffect = () => {
  const text = "Coding";

  return (
    <span>
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.28 }}
          style={{ color: "#00ffff", fontWeight: "bold" }}
          className = "glow-text"
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
};

export default TypingEffect;