import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote, Users, Target, Heart } from 'lucide-react'

const AboutVision = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className="pt-16">
      {/* Hero Image Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://ext.same-assets.com/792219027/2444052085.jpeg"
            alt="Sahrawi youth learning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Vision</h1>
          <h2 className="text-2xl md:text-3xl font-medium opacity-90">
            Following Knowledge Like Our Ancestors Followed The Rain
          </h2>
        </motion.div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed text-gray-700 mb-8">
                The Cloud Trail Project envisions a future where Sahrawi refugees transform their
                circumstances through digital skills and remote work opportunities. We're building
                pathways to economic independence that transcend geographical limitations, creating
                a self-sustaining ecosystem of learning and earning within refugee communities.
              </p>

              <p className="text-lg leading-relaxed text-gray-600 mb-8">
                We believe technology and education are the new sources of sustenance in resource-scarce
                environments—just as our ancestors followed clouds across the desert to find water,
                today's Sahrawi youth can follow digital trails to find opportunity and dignity.
              </p>

              <p className="text-lg leading-relaxed text-gray-600 mb-8">
                Our model moves from donor-supported education to a self-sustaining social enterprise
                where students become earners, mentors, and community leaders. We aim to create spaces
                where women and youth lead digital transformation, turning refugee camps into innovation
                and remote work hubs.
              </p>

              <p className="text-lg leading-relaxed text-gray-600 mb-12">
                By 2030, we envision graduates running their own digital businesses, teaching new cohorts,
                and connecting their community to global opportunities—proving that with the right skills,
                geographical isolation need not limit human potential.
              </p>

              <div className="bg-blue-50 rounded-2xl p-8 mb-12">
                <p className="text-lg font-medium text-gray-800 mb-4">
                  Chej Ahamed<br />
                  <span className="text-gray-600 italic">Founder & Program Director, Cloud Trail Project</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story and Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-16"
          >
            {/* Story */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story and Mission</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Beginning</h3>
                    <p className="text-lg leading-relaxed text-gray-600">
                      The Cloud Trail Project was born from a simple yet powerful observation: digital
                      skills represent an untapped pathway to opportunity in the Sahrawi refugee camps,
                      where physical resources are scarce. Founded in 2025, this grassroots initiative
                      aims to bridge the digital divide for Sahrawi youth and women.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-600 mt-4">
                      Named in honour of the nomadic tradition of following clouds in search of rain,
                      Cloud Trail reimagines that journey — now following knowledge and technology as
                      the new sources of sustenance in the modern world.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
                    <div className="bg-blue-600 text-white rounded-2xl p-8">
                      <p className="text-lg font-medium leading-relaxed">
                        To empower Sahrawi refugee youth and women by providing digital literacy,
                        language training, and pathways to remote work opportunities, creating a
                        self-sustaining educational ecosystem that leads to economic dignity.
                      </p>
                    </div>
                    <p className="text-lg leading-relaxed text-gray-600 mt-6">
                      We're building a program that doesn't just teach technical skills but creates
                      a complete pathway from basic digital literacy to employment while fostering
                      community ownership and long-term sustainability.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <img
                    src="https://ext.same-assets.com/792219027/3046022216.jpeg"
                    alt="Sahrawi community"
                    className="w-full rounded-2xl shadow-lg"
                  />

                  <div className="bg-white rounded-2xl p-8 shadow-sm">
                    <Quote className="h-8 w-8 text-blue-600 mb-4" />
                    <blockquote className="text-lg italic text-gray-700 leading-relaxed">
                      "The cloud trail once led our people to water in the desert. Today, it leads
                      our youth to knowledge, opportunity, and dignity in a digital world."
                    </blockquote>
                    <p className="text-gray-600 mt-4 font-medium">
                      — Chej Ahamed, Founder & Program Director
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Our Core Values</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Community-Centered",
                  description: "Everything we do strengthens and empowers the Sahrawi refugee community, with programs designed by and for community members."
                },
                {
                  icon: Target,
                  title: "Sustainable Impact",
                  description: "We build programs that become self-sustaining, creating lasting change that continues long after initial support ends."
                },
                {
                  icon: Heart,
                  title: "Dignity & Opportunity",
                  description: "We believe every person deserves the opportunity to shape their own future with dignity, regardless of their circumstances."
                }
              ].map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                    className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutVision
