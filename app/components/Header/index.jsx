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
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="py-6 border-b-[1px]">
      <div className="container sm:container md:container lg:container mx-auto flex justify-between items-center">
        <div className="marca">
          <p className="text-2xl sm:text-5xl md:text-6xl font-medium">
            Romário<span className="ponto">.</span>
          </p>
        </div>
        <div className="flex items-center gap-20">
          <div className="relative hidden sm:block">
            <button
              type="button"
              className="flex gap-3 items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-[#fff] bg-black dark:bg-slate-800 transition ease-in-out duration-150 cursor-not-allowed ring-1 ring-slate-900/10 dark:ring-slate-200/20"
            >
              Disponível para novos projetos
            </button>
            <span className="absolute flex top-[-7px] left-[-4px]">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38e492] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#38e492]"></span>
            </span>
          </div>

          <div className={styles.header}>
            <motion.div
              className={styles.menu}
              variants={isMobile ? menuMobile : menu}
              animate={isActive ? "open" : "closed"}
              initial="closed"
            >
              <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
            </motion.div>
            <Button
              isActive={isActive}
              toggleMenu={() => {
                setIsActive(!isActive);
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}