import { motion } from 'framer-motion';

const CreativeDivider = ({ direction = "down" }: { direction?: "up" | "down" }) => {
  return (
    <div className={`relative w-full h-24 overflow-hidden ${direction === "up" ? "rotate-180" : ""}`}>
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0 0C240 80 480 100 720 100C960 100 1200 80 1440 0V0H0Z"
          fill="currentColor"
          className="text-white"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          d="M0 20C240 90 480 110 720 110C960 110 1200 90 1440 20"
          stroke="var(--color-secondary)"
          strokeWidth="2"
          strokeDasharray="10 10"
          className="opacity-20"
        />
      </svg>
    </div>
  );
};

export default CreativeDivider;
