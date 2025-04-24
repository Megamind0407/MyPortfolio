"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function HeroParallax() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 50])

  return (
    <div ref={ref} className="relative h-[400px] w-[400px]">
      <motion.div
        style={{ y: y1 }}
        className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-pink-500 to-grey-700 text-white rounded-lg flex items-center justify-center shadow-xl"
      >
        <div className="text-center">
          <p className="text-lg font-bold">Frontend</p>
          <p className="text-sm mt-1">UI/UX Design & React</p>
        </div>
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute top-20 right-0 w-40 h-40 bg-gradient-to-br from-green-500 to-grey-700 text-white rounded-lg flex items-center justify-center shadow-xl"
      >
        <div className="text-center">
          <p className="text-md font-bold">Backend</p>
          <p className="text-xs mt-1">APIs & Databases</p>
        </div>
      </motion.div>

      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-0 left-10 w-56 h-56 bg-gradient-to-br from-purple-600 to-grey-700 text-white rounded-lg flex items-center justify-center shadow-xl"
      >
        <div className="text-center">
          <p className="text-lg font-bold">DevOps</p>
          <p className="text-sm mt-1">CI/CD & Deployment</p>
        </div>
      </motion.div>
    </div>
  )
}
