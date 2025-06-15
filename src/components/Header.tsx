import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const [isApplyDropdownOpen, setIsApplyDropdownOpen] = useState(false)

  const aboutItems = [
    { name: 'Our Story & Vision', href: '/about/story-vision' },
    { name: 'Our Team', href: '/about/our-team' },
    { name: 'Teachers & Community', href: '/about/teachers-community' },
  ]

  const applyItems = [
    { name: 'Apply as Student', href: '/apply-student' },
    { name: 'Apply as Volunteer/Partner', href: '/apply' },
  ]

  const navItems = [
    { name: 'Programs', href: '/programs-overview' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="https://ext.same-assets.com/792219027/2301644208.png"
                alt="CloudTrail Project"
                className="h-10 w-10 mr-3"
              />
              <span className="text-xl font-bold text-gray-900">
                CloudTrail Project
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium">
                <span>About</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              <AnimatePresence>
                {isAboutDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                  >
                    {aboutItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Apply Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsApplyDropdownOpen(true)}
              onMouseLeave={() => setIsApplyDropdownOpen(false)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium">
                <span>Apply</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              <AnimatePresence>
                {isApplyDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                  >
                    {applyItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Nav Items */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
              >
                <motion.span
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </motion.span>
              </Link>
            ))}
          </nav>

          {/* Right side items */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Globe className="h-4 w-4" />
              <span>EN</span>
            </div>
            <motion.button
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Donate
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-3">
              {/* About Section */}
              <div className="space-y-2">
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">About</div>
                {aboutItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block pl-4 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Apply Section */}
              <div className="space-y-2">
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Apply</div>
                {applyItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block pl-4 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Other Nav Items */}
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-3 border-t flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Globe className="h-4 w-4" />
                  <span>English</span>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">
                  Donate
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
