import React from "react";
import { motion } from "framer-motion";

const ContactUsPage = () => {
  return (
    <motion.section
      className=""
      // initial={{ width: 0 }}
      // animate={{ width: "100%" }}
      // exit={{ x: window.innerWidth }}
      // transition={{ duration: 0.5 }}

      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
    >
      <div className="container flex flex-col gap-5 items-center justify-center ">
        <h1 className="mb-5">Contact Us Page</h1>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
          mollitia in minima architecto odit sunt enim quidem blanditiis
          voluptates, provident veritatis labore. Natus pariatur eos at nemo,
          officia voluptatibus accusamus.
        </p>
      </div>
    </motion.section>
  );
};

export default ContactUsPage;
