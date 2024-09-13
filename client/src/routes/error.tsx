import Lost from "../assets/Astronaut-big (1).png";
import AnimatedText from "@/components/AnimatedText";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import transition from "@/components/transition";

const error = () => {
  return (
    <div id="error-page">
      <div className="min-h-screen">
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            src={Lost}
            className="w-[200px] md:w-[300px] lg:w-[400px] h-auto"
          />
        </div>
        <div className="flex justify-center items-center">
          <AnimatedText text={"You're far from the ship!"} />
        </div>
        <motion.div
          className="flex justify-center items-center mt-8"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Button className="self-center">
            <Link to={"/"}>Let's take me back home!</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default transition(error);
