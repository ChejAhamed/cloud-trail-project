import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Users, Globe, Award } from 'lucide-react'

const Impact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Students Empowered',
      description: 'Refugees trained in digital skills across multiple camps'
    },
    {
      icon: Globe,
      number: '15+',
      label: 'Countries Reached',
      description: 'Global remote work opportunities secured'
    },
    {
      icon: Award,
      number: '75%',
      label: 'Success Rate',
      description: 'Students finding meaningful remote employment'
    },
    {
      icon: Target,
      number: '3',
      label: 'Active Camps',
      description: 'Operational learning centers in refugee camps'
    }
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision Statement */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Supporting education and innovation
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The Cloud Trail Project envisions a future where Sahrawi refugees transform their
            circumstances through digital skills and remote work opportunities. Named in honor
            of the nomadic tradition of following clouds in search of rain, we now follow
            knowledge as the new source of survival and growth.
          </motion.p>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-200 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon className="h-8 w-8 text-blue-600" />
                </motion.div>

                <motion.div
                  className="text-4xl font-bold text-gray-900 mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  {stat.number}
                </motion.div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {stat.label}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <div className="bg-blue-600 text-white rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Technology as a Bridge to Independence
            </h3>
            <p className="text-xl leading-relaxed opacity-90">
              We believe technology and education can bridge isolation, creating pathways to
              economic independence that transcend geographical limitations. By equipping youth
              and women with digital skills, we aim to build a self-sustaining ecosystem where
              learning leads to earning, dignity, and community transformation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Impact
