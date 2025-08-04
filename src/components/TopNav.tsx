import React from 'react'
import { images } from '../assets/images'

const TopNav: React.FC = () => {
  return (
    <div className="bg-[#222222] box-border content-stretch flex flex-col h-[78px] items-center justify-center p-0 relative shadow-[0px_1px_4px_0px_rgba(0,0,0,0.4)] shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row gap-2 md:gap-5 items-center justify-between px-2 md:px-5 py-[15px] relative shrink-0 w-full">
        
        {/* Logo Section */}
        <div className="box-border content-stretch flex flex-row gap-1 md:gap-2 items-center justify-start p-0 relative shrink-0">
          <div className="box-border content-stretch flex flex-col h-8 md:h-10 items-start justify-center p-0 relative shrink-0 w-[120px] md:w-[153px]">
            <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
              <div className="absolute inset-0 overflow-clip">
                <div className="absolute bottom-0 left-[0.2%] right-[0.2%] top-0">
                  <img alt="" className="block max-w-none size-full" src={images.smartSiteLogo} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center self-stretch">
            <div className="bg-[#333333] h-full shrink-0 w-px"></div>
          </div>
          <div className="h-[32px] md:h-[40.17px] relative shrink-0 w-16 md:w-20">
            <div className="absolute box-border content-stretch flex flex-col inset-0 items-start justify-start p-0">
              <img 
                alt="Company Logo"
                className="h-full w-full object-contain"
                src={images.companyLogo}
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="box-border content-stretch flex flex-row gap-2 md:gap-5 items-center justify-end p-0 relative shrink-0">
          
          {/* Search Button */}
          <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
            <div className="bg-[#0f0f0f] box-border content-stretch flex flex-row items-center justify-center overflow-clip p-[6px] md:p-[8px] relative rounded-[40px] shrink-0 size-10 md:size-12">
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 size-5 md:size-6">
                <div className="h-5 md:h-6 relative shrink-0 w-full">
                  <div className="absolute bottom-[10.21%] contents left-[10.04%] right-[10.21%] top-[10.04%]">
                    <div className="absolute bottom-[10.21%] left-[10.04%] right-[10.21%] top-[10.04%]">
                      <img alt="" className="block max-w-none size-full" src={images.searchIcon} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-[40px]">
                <div aria-hidden="true" className="absolute border border-[#474747] border-solid inset-0 pointer-events-none rounded-[40px]"></div>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0">
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 size-8 md:size-10">
                <div className="h-8 md:h-10 relative shrink-0 w-full">
                  <div className="absolute bottom-[10.96%] contents left-[14.06%] right-[14.08%] top-[10.94%]">
                    <div className="absolute bottom-[10.96%] left-[14.06%] right-[14.08%] top-[10.94%]">
                      <img alt="" className="block max-w-none size-full" src={images.notificationIcon} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[20px] md:bottom-[26px] box-border content-stretch flex flex-col items-start justify-start left-[20px] md:left-[26px] p-0">
                <div className="bg-[#c71606] box-border content-stretch flex flex-row items-center justify-center min-h-2 md:min-h-3 min-w-2 md:min-w-3 px-1 py-0.5 relative rounded-md shrink-0">
                  <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                    <div className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0 w-full">
                      <div className="flex flex-col font-manrope-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[6px] md:text-[8px] text-center text-nowrap">
                        <p className="block leading-[6px] md:leading-[8px] whitespace-pre">12</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Help Icon */}
          <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0">
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 size-8 md:size-10">
                <div className="h-8 md:h-10 relative shrink-0 w-full">
                  <div className="absolute bottom-[4.69%] contents left-[10.94%] right-[10.94%] top-[10.92%]">
                    <div className="absolute bottom-[4.69%] left-[10.94%] right-[10.94%] top-[10.92%]">
                      <img alt="" className="block max-w-none size-full" src={images.helpIcon} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0">
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 size-8 md:size-10">
                <div className="h-8 md:h-10 relative shrink-0 w-full">
                  <div className="absolute bottom-[10.68%] contents left-[10.69%] right-[10.69%] top-[10.69%]">
                    <div className="absolute bottom-[10.68%] left-[10.69%] right-[10.69%] top-[10.69%]">
                      <img alt="" className="block max-w-none size-full" src={images.messagesIcon} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[20px] md:bottom-[26px] box-border content-stretch flex flex-col items-start justify-start left-[20px] md:left-[26px] p-0">
                <div className="bg-[#c71606] min-h-2 md:min-h-2.5 min-w-2 md:min-w-2.5 rounded-md shrink-0 size-2 md:size-2.5"></div>
              </div>
            </div>
          </div>

          {/* User Avatar */}
          <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0">
              <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0 size-8 md:size-10">
                <div className="basis-0 bg-[#172a4f] box-border content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px overflow-clip p-0 relative rounded-[16px] md:rounded-[20px] shrink-0 w-full">
                  <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                    <div className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0 w-full">
                      <div className="flex flex-col font-inter-regular font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] md:text-[18px] text-center text-nowrap">
                        <p className="block leading-[16.8px] md:leading-[21.6px] whitespace-pre">ML</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-[16px] md:rounded-[20px]">
                    <div aria-hidden="true" className="absolute border border-[#474747] border-solid inset-0 pointer-events-none rounded-[16px] md:rounded-[20px]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0">
        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none"></div>
      </div>
    </div>
  )
}

export default TopNav 