"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"

interface TimelineItem {
  title: string
  institution: string
  date: string
  description: string
  achievements: string[]
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative mx-auto max-w-4xl px-4 space-y-16">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="relative pl-12 sm:pl-20"
        >
          {/* Timeline vertical line */}
          {index < items.length - 1 && (
            <div className="absolute left-4 sm:left-8 top-8 bottom-0 w-px bg-muted" />
          )}

          {/* Timeline icon */}
          <div className="absolute left-0 sm:left-4 top-0 h-8 w-8 flex items-center justify-center rounded-full bg-primary text-primary-foreground shadow">
            <GraduationCap className="h-4 w-4" />
          </div>

          {/* Date (shown inline on desktop, mobile below title) */}
          <div className="sm:absolute sm:-left-40 sm:top-1 text-sm font-medium text-muted-foreground">
            <span className="hidden sm:block">{item.date}</span>
          </div>

          {/* Content */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <span className="text-sm text-muted-foreground sm:hidden">{item.date}</span>
            </div>
            <p className="text-base font-medium">{item.institution}</p>
            <p className="text-muted-foreground">{item.description}</p>

            {/* Achievements */}
            <ul className="mt-2 space-y-1">
              {item.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
