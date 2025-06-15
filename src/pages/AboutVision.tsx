import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote, Users, Target, Heart } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const AboutVision = () => {
  const { t, isRTL } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className={`pt-16 ${isRTL ? 'font-arabic' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Image Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://ext.same-assets.com/792219027/2444052085.jpeg"
            alt="Sahrawi youth learning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('aboutVision.heroTitle')}</h1>
          <h2 className="text-2xl md:text-3xl font-medium opacity-90">
            {t('aboutVision.heroSubtitle')}
          </h2>
        </motion.div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed text-gray-700 mb-8">
                {t('aboutVision.visionStatement1')}
              </p>

              <p className="text-lg leading-relaxed text-gray-600 mb-8">
                {t('aboutVision.visionStatement2')}
              </p>

              <p className="text-lg leading-relaxed text-gray-600 mb-8">
                {t('aboutVision.visionStatement3')}
              </p>

              <p className="text-lg leading-relaxed text-gray-600 mb-12">
                {t('aboutVision.visionStatement4')}
              </p>

              <div className="bg-blue-50 rounded-2xl p-8 mb-12">
                <p className="text-lg font-medium text-gray-800 mb-4">
                  {t('aboutVision.founderName')}<br />
                  <span className="text-gray-600 italic">{t('aboutVision.founderTitle')}</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story and Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-16"
          >
            {/* Story */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">{t('aboutVision.storyTitle')}</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">{t('aboutVision.beginningTitle')}</h3>
                    <p className="text-lg leading-relaxed text-gray-600">
                      {t('aboutVision.beginning1')}
                    </p>
                    <p className="text-lg leading-relaxed text-gray-600 mt-4">
                      {t('aboutVision.beginning2')}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">{t('aboutVision.missionTitle')}</h3>
                    <div className="bg-blue-600 text-white rounded-2xl p-8">
                      <p className="text-lg font-medium leading-relaxed">
                        {t('aboutVision.missionStatement')}
                      </p>
                    </div>
                    <p className="text-lg leading-relaxed text-gray-600 mt-6">
                      {t('aboutVision.missionDescription')}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <img
                    src="https://ext.same-assets.com/792219027/3046022216.jpeg"
                    alt="Sahrawi community"
                    className="w-full rounded-2xl shadow-lg"
                  />

                  <div className="bg-white rounded-2xl p-8 shadow-sm">
                    <Quote className="h-8 w-8 text-blue-600 mb-4" />
                    <blockquote className="text-lg italic text-gray-700 leading-relaxed">
                      "{t('aboutVision.quote')}"
                    </blockquote>
                    <p className="text-gray-600 mt-4 font-medium">
                      — {t('aboutVision.quoteAuthor')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">{t('aboutVision.coreValuesTitle')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: t('aboutVision.communityCentered'),
                  description: t('aboutVision.communityCenteredDesc')
                },
                {
                  icon: Target,
                  title: t('aboutVision.sustainableImpact'),
                  description: t('aboutVision.sustainableImpactDesc')
                },
                {
                  icon: Heart,
                  title: t('aboutVision.dignityOpportunity'),
                  description: t('aboutVision.dignityOpportunityDesc')
                }
              ].map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                    className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutVision
