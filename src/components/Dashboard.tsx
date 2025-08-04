import React from 'react'
import Sidebar from './Sidebar'
import TopNav from './TopNav'
import MainContent from './MainContent'

const Dashboard: React.FC = () => {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Top Navigation */}
      <TopNav />
      
      {/* Main Content */}
      <MainContent />
    </div>
  )
}

export default Dashboard 