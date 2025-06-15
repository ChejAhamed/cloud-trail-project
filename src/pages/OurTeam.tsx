import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Linkedin, ExternalLink, Mail } from 'lucide-react'

const OurTeam = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const teamMembers = [
    {
      name: "Chej Ahamed",
      title: "Founder & Program Director",
      image: "https://ext.same-assets.com/792219027/203706795.jpeg",
      bio: "Born in the Sahrawi refugee camps of Tindouf, Algeria, Chej embodies the journey from refugee to software engineer. His personal experience under the harsh conditions of displacement fuels his passion for the Cloud Trail Project. Having been fortunate enough to leave the camps and build a career in technology, Chej is driven by an unwavering commitment to create pathways for others still waiting for change. He believes deeply that digital skills can transcend physical borders, allowing his community to build livelihoods and dignity regardless of their circumstances. Through Cloud Trail, Chej doesn't just share technical knowledge—he shares hope, connecting his worlds by \"following knowledge like our ancestors followed the rain.\"",
      linkedin: "https://www.linkedin.com/in/chej-ahamed/",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Giannina Chavez",
      title: "Social Impact and Research Director",
      image: "https://ext.same-assets.com/792219027/2313701672.png",
      bio: "With an MSc in Health and International Development and deep experience in cross-cultural research, Giannina brings both academic excellence and genuine passion to the Cloud Trail Project. Having spent years immersed in indigenous communities throughout the Amazon, she has witnessed firsthand how access to education and resources can transform lives, particularly for women and youth. Her expertise in designing culturally-responsive research methodologies ensures our programs remain centred on community needs and dignity. Giannina's commitment to gender equity shapes our inclusive approach, while her skills in monitoring and evaluation strengthen our ability to measure real impact. For her, sustainable development must be built with—not for—communities, making her approach both empathetic and effective in creating lasting change.",
      linkedin: "https://www.linkedin.com/in/giannina-chavez-ackermann/",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Traian Mirci",
      title: "IT Director",
      image: "https://ext.same-assets.com/792219027/748476696.jpeg",
      bio: "With over five years of hands-on experience in full-stack development, system architecture, and team leadership, Traian brings deep technical expertise and real-world problem-solving to the Cloud Trail Project. Born and raised in Europe and now based in the UK, his journey through leading-edge technologies—from microservices and cloud computing to agile product development—makes him uniquely suited to build resilient, high-impact digital training platforms. Having previously led development teams in the healthcare sector, Traian is committed to applying his skills where they matter most: empowering communities that traditionally have limited access to technology. At Cloud Trail, he oversees IT infrastructure, curriculum technical design, and ensures our students gain real-world-ready skills. For Traian, technology isn't just about coding—it's about building bridges to opportunity, scalability, and dignity for refugee communities. His leadership transforms our classrooms into pathways for a better future, one project, one student at a time.",
      linkedin: "https://www.linkedin.com/in/traianmirci/",
      gradient: "from-green-500 to-emerald-500"
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Meet Our Team</h1>
            <p className="text-xl leading-relaxed opacity-90">
              Dedicated leaders bringing together diverse expertise to empower
              Sahrawi refugees through digital education and opportunity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              Our leadership combines lived experience, technical expertise, and deep commitment
              to creating sustainable change in refugee communities.
            </p>

            <div className="space-y-20">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="relative group">
                      <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity`} />
                      <img
                        src={member.image}
                        alt={member.name}
                        className="relative w-full aspect-[3/4] object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      <div className={`inline-block bg-gradient-to-r ${member.gradient} text-white px-4 py-2 rounded-full font-semibold text-sm uppercase tracking-wide`}>
                        {member.title}
                      </div>
                    </div>

                    <p className="text-lg leading-relaxed text-gray-600">
                      {member.bio}
                    </p>

                    <div className="flex items-center space-x-4">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center space-x-2 bg-gradient-to-r ${member.gradient} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 group`}
                      >
                        <Linkedin className="h-5 w-5" />
                        <span>Connect on LinkedIn</span>
                        <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Local Coordination Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="relative mb-12">
              <img
                src="https://ext.same-assets.com/792219027/1739335486.jpeg"
                alt="Local coordination team"
                className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent rounded-2xl" />
              <div className="absolute bottom-8 left-8 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Local Coordination Team
                </h2>
                <p className="text-lg opacity-90 max-w-2xl">
                  Our on-the-ground team in Smara brings together educational expertise,
                  technical knowledge, and deep community connections.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Program Coordinators",
                  description: "Local leaders who oversee daily operations and ensure programs meet community needs"
                },
                {
                  title: "Teaching Assistants",
                  description: "Graduates who return to mentor new students, creating a sustainable learning cycle"
                },
                {
                  title: "Community Liaisons",
                  description: "Trusted community members who bridge the program with local families and organizations"
                }
              ].map((role, index) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {role.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {role.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-12"
            >
              <p className="text-lg text-gray-600 mb-8">
                Want to learn more about our team or explore collaboration opportunities?
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>Contact Us</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default OurTeam
