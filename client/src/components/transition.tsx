import { motion } from "framer-motion";

function transition(Component: any) {
  return function TransitionComponent(props: any) {
    return (
      <>
        <motion.div
          className="bar-in bar1 bg-[#FFDC00]"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="bar-in bar2 bg-[#00EB90]"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        />
        <motion.div
          className="bar-in bar3 bg-[#FF73A9]"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        />
        <Component {...props} />
        <motion.div
          className="bar-out bar1 bg-[#FFDC00]"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="bar-out bar2 bg-[#00EB90]"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        />
        <motion.div
          className="bar-out bar3 bg-[#FF73A9]"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        />
      </>
    );
  };
}

export default transition;
