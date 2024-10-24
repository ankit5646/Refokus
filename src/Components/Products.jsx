import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

const Products = () => {
  var products = [
    {
      title: "arqitel",
      description:
        "Aurq Excutilve value collected form all the world and display it to the main development containers",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "Aurq Excutilve value collected form all the world and display it to the main development containers",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Aurq Excutilve value collected form all the world and display it to the main development containers",
      live: true,
      case: false,
    },
    {
      title: "Yahoo! ",
      description:
        "Aurq Excutilve value collected form all the world and display it to the main development containers",
      live: true,
      case: true,
    },
    {
      title: "rainfall",
      description:
        "Aurq Excutilve value collected form all the world and display it to the main development containers",
      live: true,
      case: true,
    },
    {
      title: "casting",
      description:
        "Aurq Excutilve value collected form all the world and display it to the main development containers",
      live: true,
      case: true,
    },
  ];

  const [position, setPsition] = useState(0);

  const mover = (val) => {
    setPsition(val * 23);
  };

  return (
    <div className="w-full mt-32 relative">
      {products.map((ele, index) => (
        <Product val={ele} count={index} mover={mover} />
      ))}

      <div className=" absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: position, x: "-50%" }}
          animate={{ y: position + `rem` }}
          transition={{ ease: [0.37, 0, 0.63, 1], duration: 0.5 }}
          className="window absolute w-[32rem] h-[23rem] bg-white left-[45%] -translate-x-[50%] overflow-hidden"
        >
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.37, 0, 0.63, 1], duration: 0.5 }}
            className="w-full h-full bg-[url('https://img.freepik.com/free-psd/furniture-sale-social-media-instagram-post-template_237398-299.jpg?uid=R161033561')]"
          ></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.37, 0, 0.63, 1], duration: 0.5 }}
            className="w-full h-full bg-[url('https://img.freepik.com/free-psd/new-collection-sneakers-social-media-template_505751-3255.jpg?uid=R161033561')]"
          ></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.37, 0, 0.63, 1], duration: 0.5 }}
            className="w-full h-full bg-[url('https://img.freepik.com/free-psd/cleaning-service-square-flyer-social-media-post-instagram-banner-template_84443-1007.jpg?uid=R161033561')]"
          ></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.37, 0, 0.63, 1], duration: 0.5 }}
            className="w-full h-full bg-[url('https://plus.unsplash.com/premium_vector-1720102933713-e3ad74c8b32c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D')]"
          ></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.37, 0, 0.63, 1], duration: 0.5 }}
            className="w-full h-full bg-[url('https://plus.unsplash.com/premium_vector-1721285851761-25fcf09f59e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhaW5mYWxsfGVufDB8fDB8fHww')]"
          ></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.37, 0, 0.63, 1], duration: 0.5 }}
            className="w-full h-full bg-[url('https://images.unsplash.com/photo-1725961476494-efa87ae3106a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8')]"
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
