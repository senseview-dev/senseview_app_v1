import React from 'react'
import { images } from '../assets/images'

const Sidebar: React.FC = () => {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 top-[78px] w-[124px]">
      <div className="bg-[#222222] box-border content-stretch flex flex-col items-start justify-start overflow-auto pb-[321px] pt-0 px-0 relative shrink-0">
        <div className="box-border content-stretch flex flex-col gap-3 items-center justify-start overflow-clip p-[12px] relative shrink-0">
          {/* Tableros - Selected */}
          <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0 size-[100px]">
            <div className="basis-0 bg-[#292929] box-border content-stretch flex flex-col gap-[3px] grow items-center justify-center min-h-px min-w-px p-[8px] relative rounded-xl shrink-0 w-full">
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 size-10">
                <div className="h-10 relative shrink-0 w-full">
                  <div className="absolute contents inset-[15.625%]">
                    <div className="absolute inset-[15.625%]">
                      <img alt="" className="block max-w-none size-full" src={images.dashboardIcon} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-col items-start justify-start min-w-[84px] p-0 relative shrink-0">
                <div className="box-border content-stretch flex flex-col items-center justify-start pb-[0.8px] pt-0 px-0 relative shrink-0 w-full">
                  <div className="flex flex-col font-manrope-regular justify-center leading-[0] not-italic relative shrink-0 text-[#087aa2] text-[0px] text-center text-nowrap">
                    <p className="block leading-[16.8px] text-[12px] whitespace-pre">Tableros</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Producción */}
          <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0 size-[100px]">
            <div className="basis-0 box-border content-stretch flex flex-col gap-[3px] grow items-center justify-center min-h-px min-w-px p-[8px] relative rounded-xl shrink-0 w-full">
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 size-10">
                <div className="h-10 relative shrink-0 w-full">
                  <div className="absolute bottom-[9.38%] contents left-[15.63%] right-[15.63%] top-[6.25%]">
                    <div className="absolute bottom-[9.38%] left-[15.63%] right-[15.63%] top-[6.25%]">
                      <img alt="" className="block max-w-none size-full" src={images.productionIcon} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-col items-start justify-start min-w-[84px] p-0 relative shrink-0">
                <div className="box-border content-stretch flex flex-col items-center justify-start pb-[0.8px] pt-0 px-0 relative shrink-0 w-full">
                  <div className="flex flex-col font-manrope-regular justify-center leading-[0] not-italic relative shrink-0 text-[#757575] text-[12px] text-center text-nowrap">
                    <p className="block leading-[16.8px] whitespace-pre">Producción</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mantenimiento */}
          <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0 size-[100px]">
            <div className="basis-0 box-border content-stretch flex flex-col gap-[3px] grow items-center justify-center min-h-px min-w-px p-[8px] relative rounded-xl shrink-0 w-full">
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 size-10">
                <div className="h-10 relative shrink-0 w-full">
                  <div className="absolute bottom-[9.37%] contents left-[9.37%] right-[9.38%] top-[9.38%]">
                    <div className="absolute bottom-[9.37%] left-[9.37%] right-[9.38%] top-[9.38%]">
                      <img alt="" className="block max-w-none size-full" src={images.maintenanceIcon} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                <div className="box-border content-stretch flex flex-col items-center justify-start pb-[0.8px] pt-0 px-0 relative shrink-0 w-full">
                  <div className="flex flex-col font-manrope-regular justify-center leading-[0] not-italic relative shrink-0 text-[#757575] text-[12px] text-center text-nowrap">
                    <p className="block leading-[16.8px] whitespace-pre">Mantenimiento</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Analítica */}
          <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0 size-[100px]">
            <div className="basis-0 box-border content-stretch flex flex-col gap-[3px] grow items-center justify-center min-h-px min-w-px p-[8px] relative rounded-xl shrink-0 w-full">
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 size-10">
                <div className="h-10 relative shrink-0 w-full">
                  <div className="absolute bottom-[9.65%] contents left-[9.36%] right-[9.28%] top-[9.38%]">
                    <div className="absolute bottom-[9.65%] left-[9.36%] right-[9.28%] top-[9.38%]">
                      <img alt="" className="block max-w-none size-full" src={images.analyticsIcon} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-col items-start justify-start min-w-[84px] p-0 relative shrink-0">
                <div className="box-border content-stretch flex flex-col items-center justify-start pb-[0.8px] pt-0 px-0 relative shrink-0 w-full">
                  <div className="flex flex-col font-manrope-regular justify-center leading-[0] not-italic relative shrink-0 text-[#757575] text-[12px] text-center text-nowrap">
                    <p className="block leading-[16.8px] whitespace-pre">Analítica</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar 