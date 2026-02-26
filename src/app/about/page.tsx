import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AboutPageSec from '@/components/about/aboutsec'
import JourneyAbout from '@/components/about/journeyAbout'
import StoryAbout from '@/components/about/storyAbout'
import MissionAbout from '@/components/about/missionAbout'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      
      {/* Hero Section */}
      <AboutPageSec />
      <StoryAbout />
      <JourneyAbout />
      <MissionAbout />
      
      <Footer />
    </div>
  )
}
