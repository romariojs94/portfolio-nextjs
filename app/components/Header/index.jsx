"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button";
import styles from "./style.module.scss";
import Nav from "./Nav";


const menuMobile = {
  open: {
		width: "300px",
		height: "450px",
		top: "-16px",
		right: "-16px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "100px",
    height: "40px",
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const menu = {
  open: {
    width: "480px",
		height: "650px",
		top: "-25px",
		right: "-25px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "100px",
    height: "40px",
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function Index() {
  const [isActive, setIsActive] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	const handleResize = () => {
			setIsMobile(window.innerWidth <= 640);  
	};

	useEffect(() => {
			handleResize();
			window.addEventListener('resize', handleResize);

			return () => {
					window.removeEventListener('resize', handleResize);
			};
	}, []);

  return (
    <header className="py-6 border-b-[1px]">
      <div className="container sm:container md:container lg:container mx-auto flex justify-between items-center">
        <div className="marca">
          <h1 className="text-2xl sm:text-5xl md:text-6xl font-medium">
            Romário<span className="text-[#F47209] ">.</span>
          </h1>
        </div>
        <div className={styles.header}>
          <motion.div
            className={styles.menu}
            variants={isMobile ? menuMobile : menu}				
            animate={isActive ? "open" : "closed"}
            initial="closed"
          >
            <AnimatePresence>
              {isActive && <Nav />}
            </AnimatePresence>
          </motion.div>
          <Button
            isActive={isActive}
            toggleMenu={() => {
              setIsActive(!isActive);
            }}
          />
        </div>
      </div>
    </header>
  );
}