"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Certification {
  id: number
  title: string
  issuer: string
  date: string
  description: string
  image: string
  credentialId: string
}

interface CertificationCardProps {
  certification: Certification
}

export function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="p-6 flex flex-col items-center text-center">
        <div className="w-16 h-16 mb-4 rounded-full overflow-hidden bg-muted flex items-center justify-center">
          <Image
            src={certification.image || "/placeholder.svg"}
            alt={certification.title}
            width={64}
            height={64}
            className="object-cover"
          />
        </div>
        <h3 className="text-lg font-bold">{certification.title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{certification.issuer}</p>
        <p className="text-xs text-muted-foreground mt-1">{certification.date}</p>

        <div className="w-full h-px bg-border my-4" />

        <p className="text-sm text-muted-foreground mb-4">{certification.description}</p>

        <div className="flex items-center text-xs text-muted-foreground mb-4">
          <Award className="h-3 w-3 mr-1" />
          <span>Credential ID: {certification.credentialId}</span>
        </div>

        <Button variant="outline" size="sm" className="w-full gap-1">
          <ExternalLink className="h-3 w-3" />
          Verify Credential
        </Button>
      </div>
    </motion.div>
  )
}
