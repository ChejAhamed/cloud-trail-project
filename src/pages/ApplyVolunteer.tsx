import { motion } from 'framer-motion';
import { useState } from 'react';
import { Users, Heart, Briefcase, Code, Mail, Phone, Calendar, Upload, Send, User, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ApplyVolunteer() {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    role: '',
    skills: '',
    experience: '',
    motivation: '',
    availability: '',
    commitment: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = t('validation.required');
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = t('validation.required');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('validation.required');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('validation.emailInvalid');
    }

    if (!formData.role) {
      newErrors.role = t('validation.required');
    }

    if (!formData.motivation.trim()) {
      newErrors.motivation = t('validation.required');
    }

    if (!formData.availability) {
      newErrors.availability = t('validation.required');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      console.log('Volunteer application submitted:', formData);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <div className={`min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center ${isRTL ? 'font-arabic' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl p-8 text-center"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('apply.submissionSuccess')}</h2>
          <p className="text-gray-600 mb-6">
            We appreciate your interest in joining our mission. Our team will review your application and get back to you within 1-2 weeks.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                organization: '',
                role: '',
                skills: '',
                experience: '',
                motivation: '',
                availability: '',
                commitment: ''
              });
            }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Submit Another Application
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 ${isRTL ? 'font-arabic' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
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
              {t('apply.volunteerTitle')}
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {t('apply.volunteerSubtitle')}
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
              {t('apply.volunteerTitle')}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  {t('apply.personalInfo')}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('apply.firstName')} *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                        errors.firstName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your first name"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('apply.lastName')} *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                        errors.lastName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your last name"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('apply.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('apply.phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                    Organization/Company (if applicable)
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your organization or company"
                  />
                </div>
              </div>

              {/* Professional Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Briefcase className="h-5 w-5 mr-2" />
                  Professional Background
                </h3>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                      How would you like to contribute? *
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                        errors.role ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select your preferred role</option>
                      <option value="technical-mentor">Technical Mentor/Instructor</option>
                      <option value="curriculum-developer">Curriculum Developer</option>
                      <option value="program-coordinator">Program Coordinator</option>
                      <option value="career-advisor">Career Advisor</option>
                      <option value="fundraising">Fundraising & Partnerships</option>
                      <option value="marketing">Marketing & Communications</option>
                      <option value="organizational-partner">Organizational Partner</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.role && (
                      <p className="mt-1 text-sm text-red-600">{errors.role}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('apply.skills')}
                    </label>
                    <textarea
                      id="skills"
                      name="skills"
                      rows={3}
                      value={formData.skills}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="List your relevant skills and expertise"
                    />
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('apply.experience')}
                    </label>
                    <textarea
                      id="experience"
                      name="experience"
                      rows={4}
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder={t('apply.describeExperience')}
                    />
                  </div>
                </div>
              </div>

              {/* Commitment & Motivation */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Heart className="h-5 w-5 mr-2" />
                  Commitment & Motivation
                </h3>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('apply.motivation')} *
                    </label>
                    <textarea
                      id="motivation"
                      name="motivation"
                      rows={4}
                      value={formData.motivation}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none ${
                        errors.motivation ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder={t('apply.whyJoinProgram')}
                    />
                    {errors.motivation && (
                      <p className="mt-1 text-sm text-red-600">{errors.motivation}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('apply.availability')} *
                    </label>
                    <select
                      id="availability"
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                        errors.availability ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select your availability</option>
                      <option value="1-2-hours-week">1-2 hours per week</option>
                      <option value="3-5-hours-week">3-5 hours per week</option>
                      <option value="5-10-hours-week">5-10 hours per week</option>
                      <option value="10-plus-hours-week">10+ hours per week</option>
                      <option value="project-based">Project-based availability</option>
                      <option value="flexible">Flexible schedule</option>
                    </select>
                    {errors.availability && (
                      <p className="mt-1 text-sm text-red-600">{errors.availability}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="commitment" className="block text-sm font-medium text-gray-700 mb-2">
                      Expected commitment duration
                    </label>
                    <select
                      id="commitment"
                      name="commitment"
                      value={formData.commitment}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select commitment duration</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-12-months">6-12 months</option>
                      <option value="1-year-plus">1+ years</option>
                      <option value="ongoing">Ongoing commitment</option>
                    </select>
                  </div>
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className={`w-full px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>{t('apply.submit')}</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
