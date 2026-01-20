"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

interface ExperienceItem {
  title: string
  company: string
  companyUrl?: string
  date: string
  achievements: string[]
  technologies?: string[]
}

interface ExperienceTimelineProps {
  items: ExperienceItem[]
}

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <div className="space-y-12">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
        >
          {/* Hover background effect */}
          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-muted/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

          {/* Date column */}
          <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
            {item.date}
          </header>

          {/* Content column */}
          <div className="z-10 sm:col-span-6">
            <h3 className="font-medium leading-snug">
              <div className="inline-flex items-baseline text-base font-semibold leading-tight group/link">
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                <span className="inline-block">
                  {item.title}
                  <span className="mx-2 text-muted-foreground">·</span>
                  {item.companyUrl ? (
                    <Link
                      href={item.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-baseline font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {item.company}
                      <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                    </Link>
                  ) : (
                    <span className="text-foreground">{item.company}</span>
                  )}
                </span>
              </div>
            </h3>

            <p className="mt-2 text-sm leading-normal text-muted-foreground">
              {item.description}
            </p>

            {/* Achievements as inline list */}
            {item.achievements.length > 0 && (
              <ul className="mt-3 space-y-1.5">
                {item.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start text-sm text-muted-foreground">
                    <span className="mr-2 mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                    {achievement}
                  </li>
                ))}
              </ul>
            )}

            {/* Technology tags */}
            {item.technologies && item.technologies.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                {item.technologies.map((tech, i) => (
                  <li key={i}>
                    <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                      {tech}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
