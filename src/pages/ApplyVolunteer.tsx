import { motion } from 'framer-motion';
import { Users, Heart, Briefcase, Code, Mail, Phone, Calendar, Upload } from 'lucide-react';

export default function ApplyVolunteer() {
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
              Let's work together
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Join our mission to empower Sahrawi refugees through digital skills and remote work opportunities.
              We're looking for volunteers, partners, and organizations to help build a sustainable future.
            </p>
          </motion.div>

          {/* Gallery Images */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          >
            <img src="https://images.squarespace-cdn.com/content/v1/67f7d349a2bbbb4039c3bd1b/daa982f5-7b8f-4d85-8ffa-7163583cca2d/_AOB6680.jpg" alt="Community" className="rounded-lg shadow-md" />
            <img src="https://images.squarespace-cdn.com/content/v1/67f7d349a2bbbb4039c3bd1b/651872b9-2c3f-4427-8e4e-657de0f78aaf/_AOB6460.jpg" alt="Learning" className="rounded-lg shadow-md" />
            <img src="https://images.squarespace-cdn.com/content/v1/67f7d349a2bbbb4039c3bd1b/211cd61e-0335-4053-9d88-a8a1df803ae0/_AOB6623.jpg" alt="Technology" className="rounded-lg shadow-md" />
            <img src="https://images.squarespace-cdn.com/content/v1/67f7d349a2bbbb4039c3bd1b/993319e6-8aca-410d-9842-c154f167e4e8/_AOB6291.jpg" alt="Students" className="rounded-lg shadow-md" />
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Volunteer & Partnership Application
            </h2>

            <form className="space-y-8">
              {/* Basic Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name (required)
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name (required)
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email (required)
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="mt-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm text-gray-600">Sign up for news and updates</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Volunteer Interest */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Volunteer/Collaboration Interest
                </label>
                <p className="text-sm text-gray-600 mb-4">
                  Which area are you interested in contributing to? (Check all that apply)
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Volunteer as a Teacher / Instructor (IT, English, Spanish, Digital Skills)',
                    'Curriculum Development Volunteer (help design training modules)',
                    'Fundraising Volunteer (help raise funds online or through events)',
                    'Volunteer as a Community Outreach Assistant (help with local engagement in camps)',
                    'Project Management Support (help us coordinate tasks remotely)',
                    'Tech Infrastructure Support (help with internet setup, Starlink management, etc.)',
                    'Graphic Designer / Content Creator (social media, website, materials)',
                    'Partnership Outreach Volunteer (help us connect with NGOs, companies)',
                    'Legal/Policy Volunteer (advice on regulations, contracts)',
                    'Other (please specify in message)'
                  ].map((option, index) => (
                    <label key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <input type="checkbox" className="mt-1" />
                      <span className="text-sm text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Organization Partnership */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Organization Partnership Interest
                </label>
                <p className="text-sm text-gray-600 mb-4">
                  Are you representing an organization or company interested in partnering with us?
                </p>
                <div className="space-y-3">
                  {[
                    'Yes, for collaboration (NGO, CSR, Education Partner)',
                    'Yes, to offer internships or jobs to our graduates',
                    'Yes, to help certify training programs',
                    'Yes, to donate training content or platforms'
                  ].map((option, index) => (
                    <label key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                      <input type="radio" name="partnership" className="mt-1" />
                      <span className="text-sm text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Additional Fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What is your budget?
                  </label>
                  <input
                    type="text"
                    placeholder="(Only if applying as a corporate/organization partner)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How did you hear about us?
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Select an option</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="instagram">Instagram</option>
                  <option value="personal">Personal connection</option>
                  <option value="event">Event</option>
                  <option value="other">Other (specify)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message (required)
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  Tell us a little about yourself, your motivation, and how you'd like to contribute!
                </p>
                <textarea
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Share your background, experience, and how you'd like to help..."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload CV/Portfolio
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">
                    Click to upload or drag and drop your CV or portfolio
                  </p>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors transform hover:scale-105"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
