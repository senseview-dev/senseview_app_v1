import React from 'react'
import { images } from '../assets/images'
import PlantCard from './PlantCard'

const MainContent: React.FC = () => {
  return (
    <div className="bg-[#0f0f0f] box-border content-stretch flex flex-col items-start justify-start min-h-[859px] p-0 relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-6 items-center justify-center overflow-clip pb-20 pl-[124px] pr-0 pt-[78px] relative shrink-0">
        
        {/* Hero Section */}
        <div className="box-border content-stretch flex flex-row items-center justify-center overflow-clip p-0 relative shrink-0">
          <div className="absolute box-border content-stretch flex flex-col inset-0 items-start justify-start p-0">
            <div 
              className="bg-left bg-no-repeat bg-size-[100%_761.47%] h-40 shrink-0 w-[1781px]"
              style={{ backgroundImage: `url('${images.heroBackground}')` }}
            ></div>
          </div>
          <div className="bg-gradient-to-l box-border content-stretch flex flex-row from-[#00000066] items-center justify-center min-h-40 overflow-clip px-10 py-8 relative shrink-0 to-[#000000e6]">
            <div className="h-24 overflow-clip relative shrink-0 w-[1701px]">
              <div className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 translate-y-[-50%]" style={{ top: "calc(50% - 36px)" }}>
                <div className="box-border content-stretch flex flex-row items-center justify-start overflow-clip p-0 relative shrink-0 w-full">
                  <div className="shrink-0 size-6"></div>
                </div>
              </div>
              <div className="absolute box-border content-stretch flex flex-row gap-2.5 items-center justify-start left-0 p-0 right-0 translate-y-[-50%]" style={{ top: "calc(50% + 1px)" }}>
                <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                  <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                    <div className="flex flex-col font-manrope-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[24px] text-left text-nowrap">
                      <p className="block leading-[33.6px] whitespace-pre">Mi compañia</p>
                    </div>
                  </div>
                </div>
                <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0 size-6">
                  <div className="basis-0 box-border content-stretch flex flex-row grow items-center justify-center min-h-px min-w-px p-[4px] relative rounded-3xl shrink-0 w-full">
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
              <div className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 translate-y-[-50%]" style={{ top: "calc(50% + 36.09px)" }}>
                <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                  <div className="flex flex-col font-manrope-regular justify-center leading-[0] not-italic relative shrink-0 text-[#adadad] text-[14px] text-left text-nowrap">
                    <p className="block leading-[22.4px] whitespace-pre">3 Plantas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Date Display */}
        <div className="box-border content-stretch flex flex-row items-center justify-start overflow-clip px-10 py-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-row gap-2 h-[22.41px] items-center justify-center overflow-clip pb-px pt-0 px-0 relative shrink-0">
            {/* Location icon for date */}
            <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 size-4">
              <div className="h-4 relative shrink-0 w-full">
                <div className="absolute bottom-[7.02%] contents left-[16.41%] right-[16.41%] top-[7.03%]">
                  <div className="absolute bottom-[7.02%] left-[16.41%] right-[16.41%] top-[7.03%]">
                    <img alt="" className="block max-w-none size-full" src={images.locationIcon} />
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
              <div className="box-border content-stretch flex flex-col items-end justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-manrope-regular justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-nowrap text-right">
                  <p className="block leading-[22.4px] whitespace-pre">Miércoles 14 de Mayo de 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Plants Grid */}
        <div className="h-[923.63px] relative shrink-0 w-full">
          {/* Plant 1 */}
          <PlantCard 
            title="Planta 01 - Alpha"
            location="Av. Vallarta 404, Ciudad Granja, Zapopan, Jalisco"
            buildings="3 Naves"
            imageUrl={images.plant1Image}
          />
          
          {/* Plant 2 */}
          <div className="absolute bg-[#222222] box-border content-stretch flex flex-col gap-2 items-center justify-center left-[910.5px] min-w-[280px] overflow-clip p-[16px] right-10 rounded-3xl shadow-[2px_2px_6px_0px_rgba(0,0,0,0.4)] top-0">
            <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center overflow-clip pb-1 pt-0 px-0 relative shrink-0">
              <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center p-0 relative shrink-0">
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
                <div className="box-border content-stretch flex flex-col items-start justify-start min-w-[710.5px] p-0 relative shrink-0">
                  <div className="box-border content-stretch flex flex-col items-start justify-start pb-[0.59px] pt-0 px-0 relative shrink-0 w-full">
                    <div className="flex flex-col font-manrope-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap">
                      <p className="block leading-[25.6px] whitespace-pre">Planta 02 - Beta</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#474747] h-px shrink-0 w-[798.5px]"></div>
            <div className="box-border content-stretch flex flex-col gap-[3.99px] items-center justify-center p-0 relative shrink-0">
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
                      <p className="block leading-[22.4px]">Av. Vallarta 405, Ciudad Granja, Zapopan, Jalisco</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-row gap-2 h-[22.41px] items-center justify-start overflow-clip pb-px pt-0 px-0 relative shrink-0 w-full">
                <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 size-4">
                  <div className="h-4 relative shrink-0 w-full">
                    <div className="absolute bottom-[16.41%] contents left-[3.89%] right-[3.9%] top-[13.28%]">
                      <div className="absolute bottom-[16.41%] left-[3.89%] right-[3.9%] top-[13.28%]">
                        <img alt="" className="block max-w-none size-full" src={images.factoryIcon} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
                  <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                    <div className="flex flex-col font-manrope-regular justify-center leading-[0] not-italic relative shrink-0 text-[#adadad] text-[14px] text-left w-full">
                      <p className="block leading-[22.4px]">2 Naves</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[300px] max-h-[441.81px] relative rounded-lg shrink-0 w-[798.5px]">
              <div className="absolute box-border content-stretch flex flex-col inset-0 items-start justify-start p-0 rounded-lg">
                <div 
                  className="bg-left bg-no-repeat bg-size-[100%_182.08%] h-[300px] rounded-lg shrink-0 w-full"
                  style={{ backgroundImage: `url('${images.plant2Image}')` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Plant 3 */}
          <div className="absolute bg-[#222222] box-border content-stretch flex flex-col gap-2 items-center justify-center left-10 min-w-[280px] overflow-clip p-[16px] right-[910.5px] rounded-3xl shadow-[2px_2px_6px_0px_rgba(0,0,0,0.4)] top-[481.81px]">
            <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center overflow-clip pb-1 pt-0 px-0 relative shrink-0">
              <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center p-0 relative shrink-0">
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
                <div className="box-border content-stretch flex flex-col items-start justify-start min-w-[710.5px] p-0 relative shrink-0">
                  <div className="box-border content-stretch flex flex-col items-start justify-start pb-[0.59px] pt-0 px-0 relative shrink-0 w-full">
                    <div className="flex flex-col font-manrope-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap">
                      <p className="block leading-[25.6px] whitespace-pre">Planta 03 - Gamma</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#474747] h-px shrink-0 w-[798.5px]"></div>
            <div className="box-border content-stretch flex flex-col gap-1 items-center justify-center p-0 relative shrink-0">
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
                      <p className="block leading-[22.4px]">Av. Vallarta 406, Ciudad Granja, Zapopan, Jalisco</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-row gap-2 h-[22.41px] items-center justify-start overflow-clip pb-px pt-0 px-0 relative shrink-0 w-full">
                <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 size-4">
                  <div className="h-4 relative shrink-0 w-full">
                    <div className="absolute bottom-[16.41%] contents left-[3.89%] right-[3.9%] top-[13.28%]">
                      <div className="absolute bottom-[16.41%] left-[3.89%] right-[3.9%] top-[13.28%]">
                        <img alt="" className="block max-w-none size-full" src={images.factoryIcon} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
                  <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                    <div className="flex flex-col font-manrope-regular justify-center leading-[0] not-italic relative shrink-0 text-[#adadad] text-[14px] text-left w-full">
                      <p className="block leading-[22.4px]">1 Nave</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[300px] max-h-[441.81px] relative rounded-lg shrink-0 w-[798.5px]">
              <div className="absolute box-border content-stretch flex flex-col inset-0 items-start justify-start p-0 rounded-lg">
                <div 
                  className="bg-left bg-no-repeat bg-size-[100%_354.89%] h-[300px] rounded-lg shrink-0 w-full"
                  style={{ backgroundImage: `url('${images.plant3Image}')` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContent 