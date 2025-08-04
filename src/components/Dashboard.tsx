import React from 'react'
import Sidebar from './Sidebar'
import TopNav from './TopNav'
import MainContent from './MainContent'

const Dashboard: React.FC = () => {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full min-h-screen">
      {/* Top Navigation - Full width at the top */}
      <TopNav />
      
      {/* Main Content Area with Sidebar */}
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full flex-1">
        {/* Sidebar - Left side, below TopNav */}
        <Sidebar />
        
        {/* Main Content - Right side */}
        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 flex-1">
          <MainContent />
        </div>
      </div>
    </div>
  )
}

export default Dashboard 