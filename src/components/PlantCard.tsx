import React from 'react'
import { images } from '../assets/images'

interface PlantCardProps {
  title: string
  location: string
  buildings: string
  imageUrl: string
  className?: string
}

const PlantCard: React.FC<PlantCardProps> = ({ 
  title, 
  location, 
  buildings, 
  imageUrl, 
  className = "" 
}) => {
  return (
    <div
      className={`bg-[#222222] box-border content-stretch flex flex-col gap-2 items-start justify-start overflow-hidden p-3 md:p-[16px] relative rounded-2xl md:rounded-3xl shadow-[2px_2px_6px_0px_rgba(0,0,0,0.4)] w-full ${className}`}
      data-name="Plant Card"
    >
      {/* Top container */}
      <div
        className="box-border content-stretch flex flex-row gap-2 md:gap-3 items-center justify-start overflow-hidden pb-1 pt-0 px-0 relative shrink-0"
        data-name="Top container"
      >
        <div
          className="box-border content-stretch flex flex-row gap-2 md:gap-3 items-center justify-start p-0 relative shrink-0 flex-1"
          data-name="Link - Title container"
        >
          {/* Icon frame */}
          <div
            className="bg-[#087aa2] box-border content-stretch flex flex-row items-center justify-center p-[6px] md:p-[8px] relative rounded-lg shrink-0"
            data-name="Icon frame"
          >
            <div
              className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 size-4 md:size-6"
              data-name="Container"
            >
              <div
                className="h-4 md:h-6 relative shrink-0 w-full"
                data-name="SVG"
              >
                <div
                  className="absolute bottom-[13.28%] contents left-[7.03%] right-[7.03%] top-[7.04%]"
                  data-name="Group"
                >
                  <div
                    className="absolute bottom-[13.28%] left-[7.03%] right-[7.04%] top-[7.04%]"
                    data-name="Vector"
                  >
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={images.buildingIcon}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Title */}
          <div
            className="box-border content-stretch flex flex-col items-start justify-start flex-1 p-0 relative shrink-0"
            data-name="Container"
          >
            <div
              className="box-border content-stretch flex flex-col items-start justify-start pb-[0.59px] pt-0 px-0 relative shrink-0 w-full"
              data-name="Container"
            >
              <div
                className="flex flex-col font-manrope-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] md:text-[16px] text-left text-nowrap"
              >
                <p className="block leading-[22.4px] md:leading-[25.6px] whitespace-pre">
                  {title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Arrow and Dots icons container positioned absolutely from right edge */}
      <div
        className="absolute top-3 md:top-4 right-3 md:right-4 flex flex-row gap-1 md:gap-2 items-center justify-start p-0 z-10"
        data-name="Icons container"
      >
        {/* Arrow icon */}
        <div
          className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 size-7 md:size-9"
          data-name="Container"
        >
          <div
            className="h-7 md:h-9 relative shrink-0 w-full"
            data-name="SVG"
          >
            <div
              className="absolute bottom-[12.5%] contents left-[6.25%] right-[6.25%] top-[9.38%]"
              data-name="Group"
            >
              <div
                className="absolute bottom-[12.5%] left-[6.25%] right-[6.25%] top-[9.38%]"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="block max-w-none size-full"
                  src={images.warningIcon}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Dots icon */}
        <div
          className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 size-7 md:size-9"
          data-name="Container"
        >
          <div
            className="h-7 md:h-9 relative shrink-0 w-full"
            data-name="SVG"
          >
            <div
              className="absolute bottom-[12.5%] contents left-[6.25%] right-[6.25%] top-[9.38%]"
              data-name="Group"
            >
              <div
                className="absolute bottom-[12.5%] left-[6.25%] right-[6.25%] top-[9.38%]"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="block max-w-none size-full"
                  src={images.dotsIcon}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Horizontal Divider */}
      <div
        className="bg-[#474747] h-px shrink-0 w-full"
        data-name="Horizontal Divider"
      />
      
      {/* Data container */}
      <div
        className="box-border content-stretch flex flex-col gap-[3px] md:gap-[3.99px] items-start justify-start p-0 relative shrink-0"
        data-name="Link - Data container"
      >
        {/* Location container */}
        <div
          className="box-border content-stretch flex flex-row gap-2 h-[20px] md:h-[22.41px] items-center justify-start overflow-hidden pb-px pt-0 px-0 relative shrink-0 w-full"
          data-name="Location container"
        >
          <div
            className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 size-3 md:size-4"
            data-name="Container"
          >
            <div
              className="h-3 md:h-4 relative shrink-0 w-full"
              data-name="SVG"
            >
              <div
                className="absolute bottom-[7.02%] contents left-[16.41%] right-[16.41%] top-[7.03%]"
                data-name="Group"
              >
                <div
                  className="absolute bottom-[7.02%] left-[16.41%] right-[16.41%] top-[7.03%]"
                  data-name="Vector"
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={images.locationIcon}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
            data-name="Container"
          >
            <div
              className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
              data-name="Container"
            >
              <div
                className="flex flex-col font-manrope-regular justify-center leading-[0] not-italic relative shrink-0 text-[#adadad] text-[12px] md:text-[14px] text-left w-full"
              >
                <p className="block leading-[19.2px] md:leading-[22.4px]">
                  {location}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Buildings container */}
        <div
          className="box-border content-stretch flex flex-row gap-2 h-[20px] md:h-[22.41px] items-center justify-start overflow-hidden pb-px pt-0 px-0 relative shrink-0 w-full"
          data-name="Num Factories container"
        >
          <div
            className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 size-3 md:size-4"
            data-name="Container"
          >
            <div
              className="h-3 md:h-4 relative shrink-0 w-full"
              data-name="SVG"
            >
              <div
                className="absolute bottom-[16.41%] contents left-[3.89%] right-[3.9%] top-[13.28%]"
                data-name="Group"
              >
                <div
                  className="absolute bottom-[16.41%] left-[3.89%] right-[3.9%] top-[13.28%]"
                  data-name="Vector"
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={images.factoryIcon}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
            data-name="Container"
          >
            <div
              className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
              data-name="Container"
            >
              <div
                className="flex flex-col font-manrope-regular justify-center leading-[0] not-italic relative shrink-0 text-[#adadad] text-[12px] md:text-[14px] text-left w-full"
              >
                <p className="block leading-[19.2px] md:leading-[22.4px]">{buildings}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Image container */}
      <div
        className="h-[200px] md:h-[300px] max-h-[441.81px] relative rounded-lg shrink-0 w-full"
        data-name="Link"
      >
        <div
          className="absolute box-border content-stretch flex flex-col inset-0 items-start justify-start p-0 rounded-lg"
          data-name="Container"
        >
          <div
            className="bg-left bg-no-repeat bg-size-[100%_179.09%] h-full rounded-lg shrink-0 w-full"
            data-name="Plant Image"
            style={{
              backgroundImage: `url('${imageUrl}')`,
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default PlantCard 