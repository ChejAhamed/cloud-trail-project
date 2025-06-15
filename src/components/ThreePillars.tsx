import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, GraduationCap, Heart, ArrowRight } from 'lucide-react'

const ThreePillars = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const pillars = [
    {
      icon: BookOpen,
      title: 'Materials for Learning',
      image: 'https://ext.same-assets.com/792219027/3519488609.jpeg',
      description: 'Digital education requires proper tools and resources. We work to ensure students have access to current equipment, curriculum, and internet connectivity that supports their learning journey from basic skills to advanced specialization.',
      details: 'Our learning materials blend global digital standards with content that respects and incorporates Sahrawi culture and context, making technology relevant to local needs while opening doors to global opportunities.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: GraduationCap,
      title: 'Continuing Education for Teachers',
      image: 'https://ext.same-assets.com/792219027/2069305810.jpeg',
      description: 'We create bespoke training programs to empower local instructors with the skills to lead digital education effectively. From technical knowledge to pedagogical methods, we help teachers build engaging and effective learning environments.',
      details: 'Our teacher development model includes ongoing mentorship, connecting Sahrawi instructors with global tech professionals who provide guidance, curriculum support, and industry insights.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Heart,
      title: 'Support for Communities',
      image: 'https://ext.same-assets.com/792219027/1855087996.jpeg',
      description: 'Education happens within the context of the entire refugee camp ecosystem. Our approach extends beyond the classroom to help ensure students have the necessary support for success.',
      details: 'Family engagement programs, community tech hubs, infrastructure improvements for reliable power and connectivity, and partnerships with local organizations to reinforce and sustain tech initiatives.',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Three Pillars
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive approach to digital education that transforms lives and communities
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="space-y-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                {/* Image */}
                <div className="flex-1">
                  <motion.div
                    className="relative overflow-hidden rounded-2xl shadow-2xl group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${pillar.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-6">
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${pillar.color} rounded-full shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </motion.div>

                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {pillar.title}
                  </h3>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    {pillar.description}
                  </p>

                  <p className="text-gray-500 leading-relaxed">
                    {pillar.details}
                  </p>

                  <motion.button
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${pillar.color} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Make a Difference?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join us in empowering the next generation of digital innovators
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply to Program
              </motion.button>
              <motion.button
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Support Our Mission
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ThreePillars
