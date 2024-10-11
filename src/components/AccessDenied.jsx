import React from "react";
import lock from "/padlock.svg";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/frameranimation";

const AccessDenied = () => {
  return (
    <>
      <div className="">
        <motion.div initial = 'hidden' animate = 'show' variants={fadeIn('up','spring',0.8,0.9)}>
          <img src={lock} alt="padlock" />
        </motion.div>
        <motion.div initial='hidden' animate='show' variants={textVariant(0.5)} className="px-4">
          <h3 className="text-center text-3xl font-semibold text-white">
            Access Denied!
          </h3>
          <p className="mt-3 text-center text-lg text-slate-200">
            Please contact Author to access this website!
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default AccessDenied;
