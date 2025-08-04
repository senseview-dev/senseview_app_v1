import React from 'react'
import { images } from '../assets/images'

interface PlantCardProps {
  title: string
  location: string
  buildings: string
  imageUrl: string
}

const PlantCard: React.FC<PlantCardProps> = ({ title, location, buildings, imageUrl }) => {
  return (
    <div className="absolute bg-[#222222] box-border content-stretch flex flex-col gap-2 items-center justify-center left-10 min-w-[280px] overflow-clip p-[16px] right-[910.5px] rounded-3xl shadow-[2px_2px_6px_0px_rgba(0,0,0,0.4)] top-0">
      {/* Top container */}
      <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center overflow-clip pb-1 pt-0 px-0 relative shrink-0">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center p-0 relative shrink-0">
          {/* Icon frame - Building icon for title */}
          <div className="bg-[#087aa2] box-border content-stretch flex flex-row items-center justify-center p-[8px] relative rounded-lg shrink-0">
            <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 size-4">
              <div className="h-4 relative shrink-0 w-full">
                <div className="absolute bottom-[13.28%] contents left-[7.03%] right-[7.03%] top-[7.04%]">
                  <div className="absolute bottom-[13.28%] left-[7.03%] right-[7.03%] top-[7.04%]">
                    <img alt="" className="block max-w-none size-full" src={images.buildingIcon} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Title */}
          <div className="box-border content-stretch flex flex-col items-start justify-start min-w-[674.5px] p-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-col items-start justify-start pb-[0.59px] pt-0 px-0 relative shrink-0 w-full">
              <div className="flex flex-col font-manrope-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap">
                <p className="block leading-[25.6px] whitespace-pre">{title}</p>
              </div>
            </div>
          </div>
          
          {/* Arrow icon */}
          <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 size-6">
            <div className="h-6 relative shrink-0 w-full">
              <div className="absolute bottom-[12.5%] contents left-[6.25%] right-[6.25%] top-[9.38%]">
                <div className="absolute bottom-[12.5%] left-[6.25%] right-[6.25%] top-[9.38%]">
                  <img alt="" className="block max-w-none size-full" src={images.arrowIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Dots overlay */}
        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
          <div className="box-border content-stretch flex flex-row items-center justify-center p-[4px] relative rounded-3xl shrink-0">
            <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 size-6">
              <div className="h-6 relative shrink-0 w-full">
                <div className="absolute bottom-[17.19%] contents left-[43.75%] right-[43.75%] top-[17.19%]">
                  <div className="absolute bottom-[17.19%] left-[43.75%] right-[43.75%] top-[17.19%]">
                    <img alt="" className="block max-w-none size-full" src={images.dotsIcon} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Divider */}
      <div className="bg-[#474747] h-px shrink-0 w-[798.5px]"></div>
      
      {/* Data container */}
      <div className="box-border content-stretch flex flex-col gap-[3.99px] items-center justify-center p-0 relative shrink-0">
        {/* Location with map icon */}
        <div className="box-border content-stretch flex flex-row gap-2 h-[22.41px] items-center justify-start overflow-clip pb-px pt-0 px-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 size-4">
            <div className="h-4 relative shrink-0 w-full">
              <div className="absolute bottom-[7.02%] contents left-[16.41%] right-[16.41%] top-[7.03%]">
                <div className="absolute bottom-[7.02%] left-[16.41%] right-[16.41%] top-[7.03%]">
                  <img alt="" className="block max-w-none size-full" src={images.locationIcon} />
                </div>
              </div>
            </div>
          </div>
          <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
              <div className="flex flex-col font-manrope-regular justify-center leading-[0] not-italic relative shrink-0 text-[#adadad] text-[14px] text-left w-full">
                <p className="block leading-[22.4px]">{location}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Buildings with calendar icon */}
        <div className="box-border content-stretch flex flex-row gap-2 h-[22.41px] items-center justify-start overflow-clip pb-px pt-0 px-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 size-4">
            <div className="h-4 relative shrink-0 w-full">
              <div className="absolute bottom-[13.28%] contents left-[13.28%] right-[13.28%] top-[7.03%]">
                <div className="absolute bottom-[13.28%] left-[13.28%] right-[13.28%] top-[7.03%]">
                  <img alt="" className="block max-w-none size-full" src={images.calendarIcon} />
                </div>
              </div>
            </div>
          </div>
          <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
              <div className="flex flex-col font-manrope-regular justify-center leading-[0] not-italic relative shrink-0 text-[#adadad] text-[14px] text-left w-full">
                <p className="block leading-[22.4px]">{buildings}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Image */}
      <div className="h-[300px] max-h-[441.81px] relative rounded-lg shrink-0 w-[798.5px]">
        <div className="absolute box-border content-stretch flex flex-col inset-0 items-start justify-start p-0 rounded-lg">
          <div 
            className="bg-left bg-no-repeat bg-size-[100%_179.09%] h-[300px] rounded-lg shrink-0 w-full"
            style={{ backgroundImage: `url('${imageUrl}')` }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default PlantCard 