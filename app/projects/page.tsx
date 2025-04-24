import { PageHeader } from "@/components/page-header"
import { ProjectCard } from "@/components/project-card"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "MeetX - Remote Interview Platform",
      description: "A full-featured remote interview platform, live video/audio sessions and user authentication..",
      technologies: ["Next.js", "TypeScript", "Stream", "Convex", "Clerk"],
      image: "/3.png?height=400&width=600&text=Interview+Platform",
      link: "https://meet-x-nine.vercel.app/",
    },
    {
      id: 2,
      title: "Friend Storing App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["Python", "Flask", "React.js", "SQLAlchemy"],
      image: "/4.png?height=400&width=600&text=Task+Management+App",
      link: "https://friendmanager-zokq.onrender.com",
    },
    {
      id: 3,
      title: "Real-time Chat Application",
      description:
        "A web application for real-time chatting, sharing files, and media content with secure user auth.",
      technologies: ["React.js", "Express", "MongoDB", "Socket.io"],
      image: "/5.png?height=400&width=600&text=Health+Fitness+Tracker",
      link: "https://chat-app-lovat-two-70.vercel.app/",
    },
    {
      id: 4,
      title: "Social Media Platform",
      description:
        "A comprehensive platform for creating and managing social media across multiple platforms.",
      technologies: ["React.js", "MongoDB", "Node.js", "Express", "Tailwind CSS"],
      image: "/6.png?height=400&width=600&text=Social+Media+Dashboard",
      link: "/projects/social-media-dashboard",
    },
    {
      id: 5,
      title: "Expense Tracker App",
      description: "A simple and user-friendly application that helps users manage their personal finances by tracking income and expenses.",
      technologies: ["React.js", "MongoDB", "Node.js", "Express", "Tailwind CSS"],
      image: "/placeholder.svg?height=400&width=600&text=Real+Estate+Platform",
      link: "/projects/real-estate-platform",
    },
    {
      id: 6,
      title: "Fitness Website",
      description: "An interactive platform designed to help users stay fit and motivated. The app offers personalized workout plans, progress tracking, and daily fitness tips.",
      technologies: ["React", "Firebase", "RapidAPI", "Tailwind CSS"],
      image: "/7.png?height=400&width=600&text=Learning+Management+System",
      link: "https://fitlifehub12.netlify.app/",
    },
  ]

  return (
    <main className="container py-12 md:py-24 lg:py-32">
      <PageHeader title="Projects" description="A showcase of my recent work and personal projects" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  )
}
