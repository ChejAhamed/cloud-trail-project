import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, ExternalLink, Mail, ArrowUp } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Footer = () => {
  const { t, language, formatDate, isRTL } = useLanguage()
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const currentYear = new Date().getFullYear()
  const currentDate = formatDate(new Date())

  const footerLinks = {
    programs: [
      { name: t('nav.programsOverview'), href: '/programs-overview' },
      { name: t('nav.phase1'), href: '/programs/phase-one' },
      { name: t('nav.phase2'), href: '/programs/phase-two' },
      { name: t('nav.phase3'), href: '/programs/phase-three' }
    ],
    about: [
      { name: t('nav.aboutVision'), href: '/about/story-vision' },
      { name: t('nav.ourTeam'), href: '/about/our-team' },
      { name: t('nav.teachersCommunity'), href: '/about/teachers-community' },
      { name: t('nav.contact'), href: '/contact' }
    ],
    getInvolved: [
      { name: t('footer.applyNow'), href: '/apply-student' },
      { name: t('footer.volunteer'), href: '/apply' },
      { name: t('footer.donate'), href: '#donate' },
      { name: t('footer.contact'), href: '/contact' }
    ]
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className={`bg-gray-900 text-white relative ${isRTL ? 'font-arabic' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label={t('common.backToTop')}
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center mb-6">
              <img
                src="https://ext.same-assets.com/792219027/2301644208.png"
                alt="CloudTrail Project"
                className="h-10 w-10 mr-3"
              />
              <span className="text-xl font-bold">CloudTrail Project</span>
            </div>

            <h3 className="text-lg font-semibold mb-4">{t('footer.aboutProject')}</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              {t('footer.aboutDescription')}
            </p>

            {/* Newsletter Signup */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-2">{t('footer.newsletter')}</h4>
              <p className="text-gray-400 text-sm mb-4">
                {t('footer.newsletterDescription')}
              </p>

              {isSubscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-600 text-white p-3 rounded-lg text-center"
                >
                  ✓ Thank you for subscribing!
                </motion.div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('footer.emailPlaceholder')}
                    className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors flex items-center"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    {t('footer.subscribe')}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Programs Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">{t('footer.programs')}</h3>
            <ul className="space-y-4">
              {footerLinks.programs.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* About Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">{t('nav.about')}</h3>
            <ul className="space-y-4">
              {footerLinks.about.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Get Involved Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-4">
              {footerLinks.getInvolved.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 block flex items-center group"
                  >
                    {link.name}
                    {link.href.startsWith('#') && (
                      <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Media & Follow Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">{t('footer.followUs')}</h4>
              <p className="text-gray-400 text-sm max-w-md">
                {t('footer.socialMedia')}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { name: 'LinkedIn', href: 'https://www.linkedin.com/in/chej-ahamed/', icon: '💼' },
                { name: 'GitHub', href: 'https://github.com/ChejAhamed', icon: '💻' },
                { name: 'Email', href: 'mailto:contact@cloudtrailproject.com', icon: '📧' }
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-4 md:mb-0">
              <p className="flex items-center justify-center md:justify-start">
                {t('footer.copyright')}
                <Heart className="h-4 w-4 mx-2 text-red-500" />
              </p>
              {language !== 'en' && (
                <p className="mt-1 text-xs">
                  Last updated: {currentDate}
                </p>
              )}
            </div>

            <div className="flex space-x-6">
              <Link to="/privacy" className="hover:text-white transition-colors">
                {t('footer.privacyPolicy')}
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                {t('footer.termsOfService')}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
