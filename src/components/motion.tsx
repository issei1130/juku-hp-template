"use client";

import { motion, useInView, useMotionValue, useSpring, type Variants } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function Reveal({
  children,
  delay = 0,
  className,
  onMount = false,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  onMount?: boolean;
}) {
  const trigger = onMount
    ? { animate: "visible" }
    : { whileInView: "visible", viewport: { once: true, margin: "-80px" } };
  return (
    <motion.div
      className={className}
      initial="hidden"
      variants={revealVariants}
      transition={{ delay, duration: 0.7, ease: EASE }}
      {...trigger}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({
  children,
  className,
  stagger = 0.08,
  onMount = false,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  onMount?: boolean;
}) {
  const trigger = onMount
    ? { animate: "visible" }
    : { whileInView: "visible", viewport: { once: true, margin: "-60px" } };
  return (
    <motion.div
      className={className}
      initial="hidden"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
      {...trigger}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={revealVariants}>
      {children}
    </motion.div>
  );
}

export function FloatingPetal({
  className = "",
  duration = 6,
  delay = 0,
}: {
  className?: string;
  duration?: number;
  delay?: number;
}) {
  return (
    <motion.svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden
      animate={{
        y: [0, -14, 0],
        rotate: [0, 12, -8, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <path
        fill="currentColor"
        d="M16 2c2 3 2 6 0 8-2-2-2-5 0-8Zm0 28c-2-3-2-6 0-8 2 2 2 5 0 8ZM2 16c3-2 6-2 8 0-2 2-5 2-8 0Zm28 0c-3 2-6 2-8 0 2-2 5-2 8 0ZM6.3 6.3c3-.5 5.8.6 7 2.7-2.6.6-5.3-.5-7-2.7Zm19.4 19.4c-3 .5-5.8-.6-7-2.7 2.6-.6 5.3.5 7 2.7ZM6.3 25.7c1.7-2.2 4.4-3.3 7-2.7-1.2 2.1-4 3.2-7 2.7ZM25.7 6.3c1.2 2.1-.5 5-2.7 7-.6-2.6.5-5.3 2.7-7Z"
      />
    </motion.svg>
  );
}

export function HoverLift({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: EASE } }}
    >
      {children}
    </motion.div>
  );
}

export function CountUp({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  className,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1400, bounce: 0 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${latest.toFixed(decimals)}${suffix}`;
      }
    });
  }, [spring, prefix, suffix, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
