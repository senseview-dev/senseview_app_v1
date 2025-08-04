import React from 'react'
import { images } from '../assets/images'

interface AssetViewProps {
  title: string
  assetCount: string
  heroImage: string
  className?: string
}

const AssetView: React.FC<AssetViewProps> = ({ 
  title, 
  assetCount, 
  heroImage, 
  className = "" 
}) => {
  return (
    <div className={`box-border content-stretch flex flex-row items-center justify-center overflow-hidden p-0 relative shrink-0 w-full ${className}`}>
      <div className="absolute box-border content-stretch flex flex-col inset-0 items-start justify-start p-0">
        <div 
          className="bg-left bg-no-repeat bg-size-[100%_761.47%] h-40 shrink-0 w-full"
          style={{ backgroundImage: `url('${heroImage}')` }}
        ></div>
      </div>
      <div className="bg-gradient-to-l box-border content-stretch flex flex-row from-[#00000066] items-center justify-center min-h-40 overflow-hidden px-10 py-8 relative shrink-0 to-[#000000e6] w-full">
        <div className="h-24 overflow-hidden relative shrink-0 w-full">
          <div className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 translate-y-[-50%]" style={{ top: "calc(50% - 36px)" }}>
            <div className="box-border content-stretch flex flex-row items-center justify-start overflow-hidden p-0 relative shrink-0 w-full">
              <div className="shrink-0 size-6"></div>
            </div>
          </div>
          <div className="absolute box-border content-stretch flex flex-row gap-2.5 items-center justify-start left-0 p-0 right-0 translate-y-[-50%]" style={{ top: "calc(50% + 1px)" }}>
            <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-manrope-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[24px] text-left text-nowrap">
                  <p className="block leading-[33.6px] whitespace-pre">{title}</p>
                </div>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 size-6">
              <div className="basis-0 box-border content-stretch flex flex-row grow items-center justify-center min-h-px min-w-px p-[4px] relative rounded-3xl shrink-0 w-full">
                <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 size-6">
                  <div className="h-8 relative shrink-0 w-full">
                    <div className="absolute bottom-[12.5%] contents left-[6.25%] right-[6.25%] top-[9.38%]">
                      <div className="absolute bottom-[12.5%] left-[6.25%] right-[6.25%] top-[0%]">
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
                <p className="block leading-[22.4px] whitespace-pre">{assetCount}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssetView 