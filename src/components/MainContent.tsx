import React from 'react'
import { images } from '../assets/images'
import PlantCard from './PlantCard'
import AssetView from './AssetView'

const MainContent: React.FC = () => {
  return (
    <div className="bg-[#0f0f0f] box-border content-stretch flex flex-col items-start justify-start min-h-full p-0 relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-4 md:gap-6 items-center justify-center overflow-clip pb-10 md:pb-20 relative shrink-0 w-full">
        
        {/* Hero Section - AssetView perfectly aligned with TopNav and Sidebar */}
        <AssetView 
          title="Mi compañia"
          assetCount="3 Plantas"
          heroImage={images.heroBackground}
          className="w-full"
        />

        {/* Date Display */}
        <div className="box-border content-stretch flex flex-row items-center justify-start overflow-clip px-4 md:px-10 py-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-row gap-2 h-[22.41px] items-center justify-center overflow-clip pb-px pt-0 px-0 relative shrink-0">
            {/* Calendar icon for date */}
            <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 size-6">
              <div className="h-6 relative shrink-0 w-full">
                <div className="absolute bottom-[13.28%] contents left-[13.28%] right-[13.28%] top-[7.03%]">
                  <div className="absolute bottom-[13.28%] left-[13.28%] right-[13.28%] top-[7.03%]">
                    <img alt="" className="block max-w-none size-full" src={images.calendarIcon} />
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
              <div className="box-border content-stretch flex flex-col items-end justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-manrope-regular justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] md:text-[17.5px] text-nowrap text-right">
                  <p className="block leading-[22.4px] md:leading-[28px] whitespace-pre">Miércoles 14 de Mayo de 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Plants Grid - Responsive */}
        <div className="w-full px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {/* Plant 1 - Alpha */}
            <PlantCard 
              title="Planta 01 - Alpha"
              location="Av. Vallarta 404, Ciudad Granja, Zapopan, Jalisco"
              buildings="3 Naves"
              imageUrl={images.plant1Image}
              className="w-full"
            />
            
            {/* Plant 2 - Beta */}
            <PlantCard 
              title="Planta 02 - Beta"
              location="Av. Vallarta 405, Ciudad Granja, Zapopan, Jalisco"
              buildings="2 Naves"
              imageUrl={images.plant2Image}
              className="w-full"
            />

            {/* Plant 3 - Gamma */}
            <PlantCard 
              title="Planta 03 - Gamma"
              location="Av. Vallarta 406, Ciudad Granja, Zapopan, Jalisco"
              buildings="1 Nave"
              imageUrl={images.plant3Image}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContent 