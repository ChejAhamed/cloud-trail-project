import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Users, MapPin, Award, CheckCircle } from 'lucide-react'

const ProgramsOverview = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const phases = [
    {
      number: 1,
      title: "Digital Literacy & Language",
      duration: "2 months",
      subtitle: "Building Your Foundation",
      description: "Essential computer skills and language fundamentals for the digital workplace.",
      skills: [
        "Basic computer operation and file management",
        "Digital productivity tools and internet skills",
        "English and Spanish for technical contexts",
        "Online communication and collaboration"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: 2,
      title: "Career Exploration",
      duration: "1 month",
      subtitle: "Discovering Your Path",
      description: "Explore tech career options to identify interests and strengths.",
      skills: [
        "Introduction to different tech career paths",
        "Mini-projects in various technical fields",
        "Self-assessment of aptitudes and interests",
        "Selection of specialization track"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      number: 3,
      title: "Specialization Track",
      duration: "6 months",
      subtitle: "Developing Your Skills",
      description: "Focus on developing skills in one technical pathway.",
      skills: [
        "Web Development: HTML, CSS, JavaScript",
        "E-commerce: Online store management",
        "Virtual Assistant: Administrative skills",
        "Networking & Cybersecurity basics",
        "Content Creation: Digital writing, social media"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      number: 4,
      title: "Advanced Projects",
      duration: "6 months",
      subtitle: "Building Your Portfolio",
      description: "Apply specialized skills to real-world projects.",
      skills: [
        "Client simulation projects",
        "Collaborative team assignments",
        "Portfolio development",
        "Workplace readiness training"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      number: 5,
      title: "Employment Support",
      duration: "Ongoing",
      subtitle: "Launching Your Career",
      description: "Continuing assistance to connect with income opportunities.",
      skills: [
        "Freelance platform optimization",
        "Job search and application support",
        "Ongoing skill development",
        "Co-working space access"
      ],
      color: "from-indigo-500 to-purple-500"
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Educational Model
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A comprehensive tech education pathway designed specifically for Sahrawi refugee camps.
              Our structured, five-phase learning journey takes students from basic digital literacy
              to employment-ready technical skills.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
              Program Structure
            </h2>

            <div className="space-y-8">
              {phases.map((phase, index) => (
                <motion.div
                  key={phase.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    <div className={`bg-gradient-to-br ${phase.color} p-8 text-white`}>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-xl font-bold">{phase.number}</span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{phase.title}</h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <Clock className="h-4 w-4" />
                            <span className="text-sm font-medium">{phase.duration}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-lg font-medium opacity-90">{phase.subtitle}</p>
                    </div>

                    <div className="lg:col-span-2 p-8">
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {phase.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        {phase.skills.map((skill) => (
                          <div key={skill} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{skill}</span>
                          </div>
                        ))}
                      </div>

                      <div className={`inline-flex items-center space-x-2 bg-gradient-to-r ${phase.color} text-white px-6 py-3 rounded-full font-semibold`}>
                        <span>Phase {phase.number}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Program Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: MapPin,
                title: "Location",
                details: "Smara Camp (Not Forgotten International facility)"
              },
              {
                icon: Users,
                title: "Class Size",
                details: "10-15 students per cohort"
              },
              {
                icon: Clock,
                title: "Schedule",
                details: "5 days/week, 2-4 hours daily (9:00-13:00)"
              },
              {
                icon: Award,
                title: "Start Date",
                details: "December 2025"
              }
            ].map((detail) => {
              const Icon = detail.icon
              return (
                <div key={detail.title} className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{detail.title}</h3>
                  <p className="text-gray-600">{detail.details}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Digital Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our comprehensive program and transform your future through technology
          </p>
          <Link
            to="/apply-student"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            <span>Apply Now</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ProgramsOverview
