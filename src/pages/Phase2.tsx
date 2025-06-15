import { motion } from 'framer-motion';
import { Clock, BookOpen, Target, CheckCircle, Users, Lightbulb } from 'lucide-react';

const Phase2 = () => {
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
              Phase 2: Career Exploration
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">
              Discovering Your Path
            </h2>
            <div className="flex items-center justify-center gap-2 text-lg text-gray-600 mb-6">
              <Clock className="w-5 h-5" />
              <span className="font-medium">1 month</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You'll Explore Section */}
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
              What You'll Explore
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Tech Career Pathways */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tech Career Pathways</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Web development and design</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>E-commerce and digital marketing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Virtual assistance and remote administration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Networking and cybersecurity</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Content creation and management</span>
                </li>
              </ul>
            </motion.div>

            {/* Industry Insights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Insights</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Guest speakers from various tech fields</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Case studies of successful remote workers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Job market trends and opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Remote work platforms and marketplaces</span>
                </li>
              </ul>
            </motion.div>

            {/* Self-Assessment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Self-Assessment</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span>Technical aptitude identification</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Working style preferences</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Career interest inventory</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Personal goals alignment</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Learning Methods Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Learning Methods
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              'Mini-projects in different fields',
              'Career simulation activities',
              'Interest and skill assessments',
              'Informational interviews'
            ].map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
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
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-12"
          >
            <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Outcomes
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Upon completing Phase 2, students will:
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              'Understand various tech career options',
              'Identify their personal strengths and interests',
              'Select a specialization track for Phase 3',
              'Create a personalized learning plan'
            ].map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
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

export default Phase2
