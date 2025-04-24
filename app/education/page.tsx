import { PageHeader } from "@/components/page-header"
import { Timeline } from "@/components/timeline"

export default function EducationPage() {
  const educationItems = [
    {
      title: "Bachelor of Engineering in Computer Science",
      institution: "SPPU University",
      date: "2021 - 2025",
      description: "Specialized in Computer Science and Machine Learning.",
      achievements: [
        "Ace First Place in Project Competition in 2022",
        "Runner-up in Project Exhibition in 2023",
        "Recipient of Academic Excellence Scholarship",
      ],
    },
    {
      title: "High School HSC",
      institution: "Abasaheb Garware College",
      date: "2019 - 2021",
      description: "Advanced courses in Computer Science, Mathematics, and Physics.",
      achievements: [],
    },
    {
      title: "Secondary School SSC",
      institution: "P.E.S Modern High School NCL",
      date: "2009 - 2019",
      description: "Completed secondary education with a focus on Science and Mathematics.",
      achievements: [],
    }
  ]

  return (
    <main className="container py-12 md:py-24 lg:py-32">
      <PageHeader title="Education" description="My academic background and educational qualifications" />

      <div className="mt-12">
        <Timeline  items={educationItems} />
      </div>
    </main>
  )
}
