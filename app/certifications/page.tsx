import { PageHeader } from "@/components/page-header"
import { CertificationCard } from "@/components/certification-card"

export default function CertificationsPage() {
  const certifications = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "March 2025",
      description: "Validates expertise in designing distributed systems on AWS.",
      image: "https://img.icons8.com/?size=100&id=33039&format=png&color=000000",
      credentialId: "AWS-123456",
    },
    {
      id: 2,
      title: "AWS SAP Fundamentals",
      issuer: "Amazon Web Services",
      date: "April 2025",
      description: "Gain a solid foundation in AWS cloud architecture and services with the AWS Certified SAP.",
      image: "https://img.icons8.com/?size=100&id=33039&format=png&color=000000",
      credentialId: "AWS-789012",
    },
    {
      id: 3,
      title: "Cisco Certified : Cybersecurity Operations",
      issuer: "Cisco",
      date: "April 2025",
      description: "Enhance your skills in protecting digital assets with a recognized Cybersecurity Certification.",
      image: "https://www.vectorlogo.zone/logos/cisco/cisco-ar21.svg",
      credentialId: "AZ-204-345678",
    },
    {
      id: 4,
      title: "Advanced Javascripts and API",
      issuer: "LinkedIn",
      date: "December 2024",
      description: "Master dynamic web development with the Advanced JavaScript and API Certification.",
      image: "https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000",
      credentialId: "CKA-901234",
    },
    {
      id: 5,
      title: "Machine Learning Simulation",
      issuer: "MatLab",
      date: "March 2025",
      description: "Dive into intelligent systems with the Machine Learning Simulation Certification.",
      image: "https://img.icons8.com/?size=100&id=r5Y16PcDkoWI&format=png&color=000000",
      credentialId: "MDB-567890",
    },
    {
      id: 6,
      title: "Python Certification",
      issuer: "Udemy",
      date: "November 2024",
      description: "Build a strong coding foundation with the Python Programming Certification.",
      image: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
      credentialId: "UDEMY-123456",
    },
  ]

  return (
    <main className="container py-12 md:py-24 lg:py-32">
      <PageHeader
        title="Certifications"
        description="Professional certifications and credentials I've earned throughout my career"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {certifications.map((certification) => (
          <CertificationCard key={certification.id} certification={certification} />
        ))}
      </div>
    </main>
  )
}
