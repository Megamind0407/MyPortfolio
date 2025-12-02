import { SkillCard } from "@/components/skill-card"
import { PageHeader } from "@/components/page-header"

export default function SkillsPage() {
  const skills = [
    { name: "React", level: 90, category: "Frontend" },
    { name: "Next.js", level: 85, category: "Frontend" },
    { name: "TypeScript", level: 80, category: "Languages" },
    { name: "JavaScript", level: 95, category: "Languages" },
    { name: "C++", level: 95, category: "Languages" },
    { name: "Python", level: 80, category: "Languages" },
    { name: "SQL", level: 95, category: "Languages" },
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "Express", level: 80, category: "Backend" },
    { name: "Django", level: 80, category: "Backend" },
    { name: "MongoDB", level: 75, category: "Database" },
    { name: "MySQL", level: 90, category: "Database" },
    { name: "PostgreSQL", level: 70, category: "Database" },
    { name: "Fast API", level: 65, category: "API" },
    { name: "REST API", level: 90, category: "API" },
    { name: "HTML", level: 95, category: "Frontend" },
    { name: "CSS", level: 90, category: "Frontend" },
    { name: "Tailwind CSS", level: 85, category: "Frontend" },
    { name: "Git", level: 85, category: "Tools" },
    { name: "GitHub", level: 85, category: "Tools" },
    { name: "VS Code", level: 85, category: "Tools" },
    { name: "Postman", level: 85, category: "Tools" },
    { name: "Agile", level: 85, category: "Tools" },
    { name: "Docker", level: 70, category: "DevOps" },
    { name: "Kubernetes", level: 70, category: "DevOps" },
    { name: "AWS", level: 65, category: "Cloud" },
    { name: "Google Cloud", level: 65, category: "Cloud" },
  ]

  const categories = [...new Set(skills.map((skill) => skill.category))]

  return (
    <main className="container py-12 md:py-24 lg:py-32">
      <PageHeader
        title="Skills & Expertise"
        description="A comprehensive overview of my technical skills and proficiency levels"
      />

      <div className="space-y-16 mt-12">
        {categories.map((category) => (
          <div key={category} className="space-y-6">
            <h2 className="text-2xl font-bold">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <SkillCard key={skill.name} name={skill.name} level={skill.level} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
