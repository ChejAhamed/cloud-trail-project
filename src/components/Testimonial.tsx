import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote } from 'lucide-react'

const Testimonial = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Quote Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-12"
          >
            <Quote className="h-10 w-10 text-white" />
          </motion.div>

          {/* Quote Text */}
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-12"
          >
            "With digital skills, we can work from anywhere, building futures that honor our
            <span className="text-blue-600"> heritage </span>
            while embracing
            <span className="text-blue-600"> global opportunity.</span>"
          </motion.blockquote>

          {/* Author Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">CA</span>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Chej Ahamed
            </h3>

            <p className="text-lg text-gray-600 mb-8">
              Founder & Program Director
            </p>

            {/* Additional Context */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Born in the refugee camps of Western Sahara, Chej understands firsthand the power
                of education and technology to transform lives. His vision drives our mission to
                create sustainable pathways from the desert to the digital world.
              </p>
            </motion.div>
          </motion.div>

          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              initial={{ opacity: 0, rotate: -10 }}
              animate={isInView ? { opacity: 0.1, rotate: 0 } : { opacity: 0, rotate: -10 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="absolute top-20 -right-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl"
            />
            <motion.div
              initial={{ opacity: 0, rotate: 10 }}
              animate={isInView ? { opacity: 0.1, rotate: 0 } : { opacity: 0, rotate: 10 }}
              transition={{ duration: 1.5, delay: 1.2 }}
              className="absolute bottom-20 -left-20 w-96 h-96 bg-purple-300 rounded-full blur-3xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonial
