import { motion } from "motion/react";

const SwitchButton = ({ isOn, ...props }) => {
  const className = `${isOn ? "switch-on" : "switch-off"}`;

  const variants = {
    on: { x: 19 },
    off: { x: 0 },
  };

  return (
    <motion.div className={`switch ${className}`} {...props}>
      <motion.div
        className={`circle ${className}`}
        variants={variants}
        animate={isOn ? "on" : "off"}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </motion.div>
  );
};

export default SwitchButton;
