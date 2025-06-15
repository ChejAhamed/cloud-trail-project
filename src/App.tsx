import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Impact from './components/Impact'
import ThreePillars from './components/ThreePillars'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Page Components
import HomePage from './pages/HomePage'
import AboutVision from './pages/AboutVision'
import OurTeam from './pages/OurTeam'
import TeachersCommunity from './pages/TeachersCommunity'
import ProgramsOverview from './pages/ProgramsOverview'
import Phase1 from './pages/Phase1'
import Phase2 from './pages/Phase2'
import Phase3 from './pages/Phase3'
import Phase4 from './pages/Phase4'
import Phase5 from './pages/Phase5'
import ApplyStudent from './pages/ApplyStudent'
import ApplyVolunteer from './pages/ApplyVolunteer'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about/story-vision" element={<AboutVision />} />
          <Route path="/about/our-team" element={<OurTeam />} />
          <Route path="/about/teachers-community" element={<TeachersCommunity />} />
          <Route path="/programs-overview" element={<ProgramsOverview />} />
          <Route path="/programs/phase-one" element={<Phase1 />} />
          <Route path="/programs/phase-two" element={<Phase2 />} />
          <Route path="/programs/phase-three" element={<Phase3 />} />
          <Route path="/programs/phase-four" element={<Phase4 />} />
          <Route path="/programs/phase-five" element={<Phase5 />} />
          <Route path="/apply-student" element={<ApplyStudent />} />
          <Route path="/apply" element={<ApplyVolunteer />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
