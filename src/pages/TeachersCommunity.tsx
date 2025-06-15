import { motion } from 'framer-motion';
import { Users, BookOpen, Trophy, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TeachersCommunity() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section with Quote */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Teachers & Community
            </h1>

            {/* Hero Image */}
            <div className="mb-12">
              <img
                src="https://images.squarespace-cdn.com/content/v1/67f7d349a2bbbb4039c3bd1b/83ae9477-c34d-46db-b827-108332d5731e/_AOB6345.jpg"
                alt="Teachers and Community"
                className="w-full max-w-4xl mx-auto rounded-2xl shadow-xl"
              />
            </div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl sm:text-2xl text-gray-700 italic mb-6 max-w-4xl mx-auto leading-relaxed"
            >
              "We're not just teaching coding or digital skills. We're building a sustainable ecosystem where knowledge flows from student to student, from graduates to new learners, creating a cycle of opportunity that grows stronger with each cohort."
            </motion.blockquote>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-600 font-medium"
            >
              — Giannina Chavez, Social Impact and Research Director
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Teaching Approach */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-16"
          >
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Teaching Approach
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Cloud Trail brings together local talent and international expertise to create a rich learning environment:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Program Coordinator",
                description: "Oversees curriculum implementation and program quality",
                icon: "👩‍💼"
              },
              {
                title: "Lead Instructor",
                description: "Delivers core technical content and guides student development",
                icon: "👨‍🏫"
              },
              {
                title: "Teaching Assistants",
                description: "Selected from top graduates who return to mentor new students",
                icon: "🎓"
              },
              {
                title: "Remote Mentors",
                description: "International tech professionals who provide virtual guidance and expertise",
                icon: "🌐"
              }
            ].map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl text-center"
              >
                <div className="text-4xl mb-4">{role.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{role.title}</h3>
                <p className="text-gray-700">{role.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher Development */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-16"
          >
            <BookOpen className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Teacher Development
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We invest in developing local teaching capacity through our train-the-trainer model:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Initial intensive training for instructors before program launch",
              "Ongoing professional development opportunities",
              "Progressive responsibility increase over time",
              "Leadership opportunities within the program",
              "Skills certification and professional credentials"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold text-sm">{index + 1}</span>
                </div>
                <span className="text-gray-800 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Building Local Capacity */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center mb-16"
          >
            <Trophy className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Building Local Capacity
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our long-term sustainability depends on developing local capacity:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Graduates become teaching assistants and eventually instructors",
              "Community members participate in program governance",
              "Local leadership takes increasing ownership of direction and operations",
              "Knowledge remains within the community, creating lasting impact"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-purple-50 rounded-xl"
              >
                <Heart className="w-6 h-6 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Our Partners
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              The Cloud Trail Project is proud to partner with organizations that share our vision:
            </p>

            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Not Forgotten International</h3>
              <p className="text-gray-700">Providing infrastructure and facility support</p>
            </div>

            <p className="text-gray-600 italic mb-8">Additional partners to be listed as confirmed</p>

            <Link
              to="/apply"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Learn more about partnership opportunities
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Join Our Journey */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
              Join Our Journey
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { text: "Apply as a Student", link: "/apply-student" },
                { text: "Support Our Mission", link: "/donate" },
                { text: "Volunteer Your Expertise", link: "/apply" },
                { text: "Contact Us", link: "/contact" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                >
                  <Link
                    to={item.link}
                    className="block bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 p-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="text-gray-900 font-semibold">{item.text}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
