import { motion } from 'framer-motion';
import { Clock, BookOpen, Target, CheckCircle, Code, ShoppingCart, Users, Shield, Edit } from 'lucide-react';

const Phase3 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Phase 3: Specialization Track
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">
              Developing Your Skills
            </h2>
            <div className="flex items-center justify-center gap-2 text-lg text-gray-600 mb-6">
              <Clock className="w-5 h-5" />
              <span className="font-medium">6 months</span>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The Specialization Track phase provides in-depth training in your chosen field, building technical proficiency and practical experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Available Tracks Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Available Tracks
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Web Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Web Development</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>HTML, CSS, and JavaScript fundamentals</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Responsive web design principles</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Content management systems (WordPress)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Basic programming concepts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Website testing and troubleshooting</span>
                </li>
              </ul>
            </motion.div>

            {/* E-commerce & Digital Marketing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <ShoppingCart className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">E-commerce & Digital Marketing</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Online store setup and management</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Product photography and description</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Digital marketing fundamentals</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Customer service best practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Payment processing and logistics</span>
                </li>
              </ul>
            </motion.div>

            {/* Virtual Assistant Work */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-900">Virtual Assistant Work</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Advanced administrative skills</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Project management tools and techniques</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Client communication and management</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Scheduling and organization systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Data entry and research methods</span>
                </li>
              </ul>
            </motion.div>

            {/* Networking & Cybersecurity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-red-600" />
                <h3 className="text-xl font-bold text-gray-900">Networking & Cybersecurity</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Network fundamentals</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Basic security protocols</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>System administration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Troubleshooting methods</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Security awareness training</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Content Creation - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-2xl mt-8 max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-4">
              <Edit className="w-8 h-8 text-yellow-600" />
              <h3 className="text-xl font-bold text-gray-900">Content Creation</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Digital writing and editing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Basic graphic design</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Social media management</span>
                </li>
              </ul>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Content planning and scheduling</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>SEO principles</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learning Methods Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Learning Methods
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              'Structured lessons and tutorials',
              'Practical exercises and assignments',
              'Industry-standard tools and platforms',
              'Regular progress assessments'
            ].map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="flex items-center gap-3 bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                </div>
                <span className="text-gray-800 font-medium">{method}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center mb-12"
          >
            <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Outcomes
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Upon completing Phase 3, students will:
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              'Possess intermediate technical skills',
              'Complete track-specific certification',
              'Develop a beginning portfolio',
              'Be prepared for advanced projects'
            ].map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-green-50 rounded-xl"
              >
                <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{outcome}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Phase3
