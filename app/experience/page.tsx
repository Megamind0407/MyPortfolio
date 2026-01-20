"use client";

import { motion } from "framer-motion";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { PageHeader } from "@/components/page-header";

export default function ExperiencePage() {
  const experienceItems = [
    {
      title: "Graduate Engineer Apprentice",
      company: "DRDO HEMRL",
      companyUrl: "#",
      date: "Aug 2025 — Jan 2026",
      achievements: [
        "Developed full-stack Library Management System using Java, JSP, and MySQL to manage 5000+ research articles and technical documents",
        "Designed normalized MySQL database with efficient search and retrieval functionality for scientific publications and organizational records",
        "Implemented secure authentication system with role-based access control for 200+ authorized defense research personnel",
      ],
      technologies: [
        "Java",
        "JSP",
        "JDBC",
        "MySQL",
        "Apache Tomcat",
      ],
    },
    {
      title: "Web Developer Intern",
      company: "Elite Software's",
      companyUrl: "https://www.elitesoftwares.co.in/",
      date: "Nov 2023 — Jan 2024",
      achievements: [
        "Developed full-stack web applications using Python-Django provided production support and hot fixes while ensuring defect-free delivery",
        "Deployed projects end-to-end from development to production on online servers in professional work environment",
        "Collaborated with developer mentors to implement industry-standard coding practices and software development workflows",
      ],
      technologies: ["HTML5", "CSS3", "Python", "Django", "Wordpress"],
    },
  ];

  return (
    <main className="min-h-screen ">
      <div className="container max-w-4xl py-16 md:py-24 lg:py-32 mb-12">
        {/* Header */}
        <PageHeader title="Experience" description="A journey through my professional career, building products and leading teams across various industries"/>
        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="group/list"
        >
          <ExperienceTimeline items={experienceItems} />
        </motion.section>

        {/* View Resume Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-border"
        >
          <a
            href="https://drive.google.com/file/d/1oa2_UyIzpI0Jv5441KOoVImQhoIxWxQ7/view?usp=drive_link"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="border-b border-transparent group-hover:border-foreground transition-colors">
              View Full Resume
            </span>
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </motion.div>
        </div>

    </main>
  );
}
