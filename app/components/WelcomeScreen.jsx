"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./animations.module.css";

const MoonIcon = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

const SparklesIcon = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    <path d="M20 3v4" />
    <path d="M22 5h-4" />
  </svg>
);

const StarIcon = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
  </svg>
);

const ZapIcon = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
  </svg>
);

const STARS = Array.from({ length: 45 }, (_, i) => ({
  left: `${(i * 37.3) % 100}%`,
  top: `${(i * 53.7) % 100}%`,
  size: (i % 3) + 1,
  delay: `${(i % 12) * 0.5}s`,
  duration: `${2.5 + (i % 5) * 0.6}s`,
}));

const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="inline-block">
      {displayText}
      <motion.span
        className="inline-block w-[2px] h-4 ml-1 bg-violet-500"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      />
    </span>
  );
};

const BackgroundEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className={styles.shootingStar} />
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-violet-600/10 blur-[120px] rounded-full"
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

const IconButton = ({ Icon }) => (
  <motion.div className="relative group" whileHover={{ scale: 1.1 }}>
    <div className="absolute -inset-2 bg-violet-600/20 rounded-full blur-md opacity-50 transition-all duration-300" />
    <div className="relative p-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
      <Icon className="w-5 h-5 text-violet-300" />
    </div>
  </motion.div>
);

const WelcomeScreen = ({ onLoadingComplete = () => {} }) => {
  const [isLoading, setIsLoading] = useState(true);
  const fantasyFont = "font-serif italic tracking-wider uppercase";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete?.();
      }, 1000);
    }, 4000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-gradient-to-b from-[#0e1733] via-[#070c1f] to-[#03040a] z-[9999] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(20px)",
            transition: { duration: 1, ease: "easeInOut" },
          }}
        >
          <BackgroundEffect />

          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            {STARS.map((star, i) => (
              <span
                key={i}
                className={`${styles.twinkle} absolute rounded-full bg-white`}
                style={{
                  left: star.left,
                  top: star.top,
                  width: star.size,
                  height: star.size,
                  animationDelay: star.delay,
                  animationDuration: star.duration,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h1 className={`${fantasyFont} text-3xl sm:text-6xl font-bold tracking-[0.3em] text-white`}>
                ALTRA <span className="text-violet-500">CAELTHARION</span>
              </h1>
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto my-4 opacity-50" />
              <p className="text-[10px] sm:text-xs tracking-[0.5em] text-white/40 uppercase font-light italic">
                Every expert was once a beginner.
              </p>
            </motion.div>

            <div className="flex gap-6 sm:gap-10 my-10">
              {[MoonIcon, SparklesIcon, StarIcon].map((Icon, i) => (
                <motion.div
                  key={i}
                  className={styles.floating}
                  style={{ animationDelay: `${0.7 * i}s` }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + i * 0.2 }}
                >
                  <IconButton Icon={Icon} />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="mt-2"
            >
              <div className={`flex items-center gap-3 text-xs sm:text-sm tracking-[0.4em] font-medium text-violet-400/80 uppercase`}>
                <ZapIcon className="w-3 h-3" />
                <TypewriterEffect text="est. 2026" />
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5">
            <motion.div
              className="h-full bg-violet-600 shadow-[0_0_10px_#8b5cf6]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3.5, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
