// Image assets using Vite dynamic imports for proper asset handling
export const images = {
  // Background images
  heroBackground: new URL('./images/heroBackground.png', import.meta.url).href,
  plant1Image: new URL('./images/plant1Image.png', import.meta.url).href,
  plant2Image: new URL('./images/plant2Image.png', import.meta.url).href,
  plant3Image: new URL('./images/plant3Image.png', import.meta.url).href,

  // Icons
  dashboardIcon: new URL('./images/dashboardIcon.svg', import.meta.url).href,
  productionIcon: new URL('./images/productionIcon.svg', import.meta.url).href,
  maintenanceIcon: new URL('./images/maintenanceIcon.svg', import.meta.url).href,
  analyticsIcon: new URL('./images/analyticsIcon.svg', import.meta.url).href,

  // Top navigation icons
  searchIcon: new URL('./images/searchIcon.svg', import.meta.url).href,
  notificationIcon: new URL('./images/notificationIcon.svg', import.meta.url).href,
  helpIcon: new URL('./images/helpIcon.svg', import.meta.url).href,
  settingsIcon: new URL('./images/settingsIcon.svg', import.meta.url).href,
  messagesIcon: new URL('./images/settingsIcon.svg', import.meta.url).href,

  // Plant card icons
  buildingIcon: new URL('./images/buildingIcon.svg', import.meta.url).href,
  locationIcon: new URL('./images/locationIcon.svg', import.meta.url).href,
  factoryIcon: new URL('./images/factoryIcon.svg', import.meta.url).href,
  dotsIcon: new URL('./images/dotsIcon.svg', import.meta.url).href,
  arrowIcon: new URL('./images/warningIcon.svg', import.meta.url).href,
  calendarIcon: new URL('./images/calendarIcon.svg', import.meta.url).href,
  warningIcon: new URL('./images/warningIcon.svg', import.meta.url).href,

  // Logos
  smartSiteLogo: new URL('./images/smartSiteLogo.svg', import.meta.url).href,
  companyLogo: new URL('./images/companyLogo.png', import.meta.url).href
} 