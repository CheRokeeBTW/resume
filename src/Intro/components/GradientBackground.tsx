import { motion } from "framer-motion";

const GradientBackground: React.FC = () => {
  return (
    <motion.div
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0"
      style={{
        background: "linear-gradient(120deg, #0d0d0d, #1a1a1a, #222)",
        backgroundSize: "300% 300%",
        width: "100vw",
        height: "100vh",
      }}
    />
  );
};

export default GradientBackground;