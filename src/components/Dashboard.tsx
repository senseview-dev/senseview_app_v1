import React from 'react'
import HeroSection from './HeroSection'
import PlantCard from './PlantCard'
import { Calendar } from 'lucide-react'
import { plants } from '../data/plants'
import { getCurrentDate } from '../utils/dateUtils'

const Dashboard: React.FC = () => {
  const currentDate = getCurrentDate()

  return (
    <div className="flex-1 bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Hero Section */}
        <HeroSection />

        {/* Date Display */}
        <div className="flex items-center gap-2 text-white">
          <Calendar className="w-4 h-4" />
          <span className="text-sm font-manrope">
            {currentDate}
          </span>
        </div>

        {/* Plants Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {plants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard 