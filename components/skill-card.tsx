"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SkillCardProps {
  name: string
  level: number
}

export function SkillCard({ name, level }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all duration-300"
    >
      <h3 className="text-lg font-medium mb-2">{name}</h3>
      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          className={cn(
            "h-full rounded-full",
            level >= 80 ? "bg-green-500" : level >= 60 ? "bg-yellow-500" : "bg-red-500",
          )}
        />
      </div>
      <div className="mt-2 text-sm text-muted-foreground text-right">{level}%</div>
    </motion.div>
  )
}
