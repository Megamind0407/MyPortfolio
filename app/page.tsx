import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedText from "@/components/animated-text"
import { HeroParallax } from "@/components/hero-parallax"
import { SkillsShowcase } from "@/components/skills-showcase"

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
          <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                <AnimatedText text="Hi, I'm Aryan Gaikwad" />
              </h1>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-primary mt-2">
                <AnimatedText text="Full Stack Developer" delay={0.3} />
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl max-w-[600px]">
                I build exceptional digital experiences that make people's lives easier. Focused on creating intuitive,
                accessible, and performant web applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button asChild size="lg" className="group">
                  <Link href="/projects">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <HeroParallax />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Skills</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Here are some of the technologies I work with
              </p>
            </div>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 xl:gap-10 mt-8">
            <SkillsShowcase />
          </div>
          <div className="flex justify-center mt-10">
            <Button asChild variant="outline">
              <Link href="/skills">View All Skills</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out some of my recent work
              </p>
            </div>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-8 xl:gap-10 mt-8">
            {[1, 2, 3].map((i) => (
              <Link
                key={i}
                href={`/projects/project-${i}`}
                className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-md"
              >
                <div className="aspect-video overflow-hidden rounded-md bg-muted">
                  <img
                    src={`/placeholder.svg?height=400&width=600&text=Project+${i}`}
                    alt={`Project ${i}`}
                    width={600}
                    height={400}
                    className="object-cover transition-all group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold tracking-tight">Project {i}</h3>
                  <p className="text-sm text-muted-foreground">A sample project description goes here.</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Button asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
