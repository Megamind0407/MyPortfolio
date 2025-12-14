"use client"

import { motion } from "framer-motion"
import { Code2, Database, Globe, Server, Smartphone, Layers, Cloud } from "lucide-react"

export function SkillsShowcase() {
  const skills = [
    { name: "React", icon: <Code2 className="h-8 w-8" />, color: "bg-blue-100 dark:bg-blue-950" },
    { name: "Node.js", icon: <Server className="h-8 w-8" />, color: "bg-green-100 dark:bg-green-950" },
    { name: "TypeScript", icon: <Code2 className="h-8 w-8" />, color: "bg-blue-100 dark:bg-blue-950" },
    { name: "MongoDB", icon: <Database className="h-8 w-8" />, color: "bg-green-100 dark:bg-green-950" },
    { name: "Next.js", icon: <Globe className="h-8 w-8" />, color: "bg-gray-100 dark:bg-gray-800" },
    { name: "React Native", icon: <Smartphone className="h-8 w-8" />, color: "bg-blue-100 dark:bg-blue-950" },
    { name: "API's", icon: <Layers className="h-8 w-8" />, color: "bg-pink-100 dark:bg-pink-950" },
    { name: "AWS", icon: <Cloud className="h-8 w-8" />, color: "bg-yellow-100 dark:bg-yellow-950" },
  ]

  return (
    <>
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`flex flex-col items-center justify-center p-6 rounded-lg ${skill.color} transition-all duration-300 hover:shadow-md`}
        >
          <div className="mb-3 text-primary">{skill.icon}</div>
          <h3 className="font-medium">{skill.name}</h3>
        </motion.div>
      ))}
    </>
  )
}
