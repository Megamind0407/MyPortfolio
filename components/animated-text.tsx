"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"

interface AnimatedTextProps {
  text?: string
  delay?: number
  className?: string
  cycleInterval?: number
}

const phrases = [
  "Software Engineer",
  "Full Stack Developer",
  "Cloud Enthusiast", 
  "Open Source Contributor",
  "Analytical Thinker",
]

export default function AnimatedText({
  text,
  delay = 0,
  className = "",
  cycleInterval = 2000
}: AnimatedTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "100px" })
  const [index, setIndex] = useState(0)
  
  const displayText = text ?? phrases[index]

  // Simple cycling effect
  useEffect(() => {
    if (!text && isInView) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % phrases.length)
      }, cycleInterval)
      
      return () => clearInterval(interval)
    }
  }, [text, isInView, cycleInterval])

  const words = displayText.split(" ")

  // Simple, clean animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    }
  }

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      },
    }
  }

  if (!isInView) {
    return <div ref={ref} className={`inline-block ${className}`} />
  }

  return (
    <div ref={ref} className={`inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={text ? "static" : index}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, y: -10 }}
          className="inline-block"
          transition={{ duration: 0.3 }}
        >
          {words.map((word, wordIndex) => (
            <motion.span 
              key={`${word}-${wordIndex}`}
              className="inline-block mr-1" 
              variants={wordVariants}
            >
              {word}
              {wordIndex < words.length - 1 ? " " : ""}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}