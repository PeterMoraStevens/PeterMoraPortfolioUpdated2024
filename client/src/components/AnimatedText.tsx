import { motion } from "framer-motion";

const Letter = ({ children, delay }: any) => (
  <motion.span
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay }}
    className="inline-block"
  >
    {children}
  </motion.span>
);

const AnimatedText = ({ text }: any) => {
  return (
    <div className="text-2xl md:text-3xl lg:text-4xl self-center justify-end my-4 font-extrabold">
      {text.split("").map((char: any, index: any) => (
        <Letter key={index} delay={index * 0.1}>
          {char === " " ? "\u00A0" : char} {/* Handle spaces */}
        </Letter>
      ))}
    </div>
  );
};

export default AnimatedText;
