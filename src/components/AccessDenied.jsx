import React from "react";
import lock from "/padlock.svg";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/frameranimation";

const AccessDenied = () => {
  return (
    <>
      <div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeIn("up", "spring", 0.8, 0.9)}
          className="flex items-center justify-center"
        >
          <img src={lock} alt="padlock" className="h-[290px]" />
        </motion.div>
        <motion.div initial="hidden" animate="show" variants={textVariant(0.5)}>
          <h3 className="text-center text-3xl font-semibold text-white">
            Access Denied!
          </h3>
          <p className="mt-3 text-center text-lg text-slate-200">
            Please contact{" "}
            <a href="mailto:sekuritasins@gmail.com" className="underline">
              Author
            </a>{" "}
            to access this website!
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default AccessDenied;
