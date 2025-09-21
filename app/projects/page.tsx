import { PageHeader } from "@/components/page-header"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "AI-Based Fault Detection System",
      description: "An AI-powered fault detection system that uses machine learning algorithms to identify and predict faults in industrial equipment",
      technologies: ["Python", "CNN", "Tensorflow/Keras","Streamlit"],
      image: "/2.png?height=400&width=600&text=Interview+Platform",
      link: "https://solarfaultdetection-pamcnmtbxpgcp9wreqbznn.streamlit.app/",
    },
    {
      id: 2,
      title: "MeetX - Remote Interview Platform",
      description: "A full-featured remote interview platform, live video/audio sessions and user authentication..",
      technologies: ["Next.js", "TypeScript", "Stream", "Convex", "Clerk"],
      image: "/3.png?height=400&width=600&text=Interview+Platform",
      link: "https://meet-x-nine.vercel.app/",
    },
    
    {
      id: 3,
      title: "Churn Predictor System",
      description:
        "A web-based sentiment analysis tool that leverages a pre-trained transformer model (DistilBERT) to classify and visualize social media text sentiments in real-time.",
      technologies: ["Python", "Scikit-learn", "HuggingFace", "Streamlit"],
      image: "/6.png?height=400&width=600&text=Social+Media+Dashboard",
      link: "https://customerchurnpredictorsystem.streamlit.app",
    },
    {
      id: 4,
      title: "Friend Storing App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["Python", "Flask", "React.js", "SQLAlchemy"],
      image: "/4.png?height=400&width=600&text=Task+Management+App",
      link: "https://friendmanager-zokq.onrender.com",
    },
    {
      id: 5,
      title: "Real-time Chat Application",
      description:
        "A web application for real-time chatting, sharing files, and media content with secure user auth.",
      technologies: ["React.js", "Express", "MongoDB", "Socket.io"],
      image: "/5.png?height=400&width=600&text=Health+Fitness+Tracker",
      link: "https://chat-app-lovat-two-70.vercel.app/",
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
      <div className="flex justify-center mt-10">
            <Button>
              <Link href="https://github.com/Megamind0407?tab=repositories" target="_blank">View More Projects</Link>
            </Button>
      </div>
    </main>
  )
}
