"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface AnimatedTextProps {
  text?: string
  delay?: number
  duration?: number
  className?: string
}

const phrases = [
  "Full Stack Developer",
  "Cloud Enthusiast",
  "Open Source Contributor",
  "Tech Blogger",
  "Software Engineer"
]

export default function AnimatedText({
  text,
  delay = 0,
  duration = 0.05,
  className = ""
}: AnimatedTextProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)

  const [index, setIndex] = useState(0)
  const displayText = text ?? phrases[index]

  useEffect(() => {
    let timeout: NodeJS.Timeout
    if (isInView) {
      controls.start("hidden").then(() => {
        timeout = setTimeout(() => {
          controls.start("visible")
        }, 300) 
      })
    }

    return () => clearTimeout(timeout)
  }, [displayText, isInView, controls])

  useEffect(() => {
    if (!text) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % phrases.length)
      }, 5000) 
      return () => clearInterval(interval)
    }
  }, [text])

  const words = displayText.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: delay * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate={controls}
    >
      {words.map((word, index) => (
        <motion.span key={index} className="inline-block mr-1" variants={child}>
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  )
}
