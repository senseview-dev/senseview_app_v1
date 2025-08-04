export interface Plant {
  id: number
  name: string
  location: string
  buildings: number
  image: string
}

export interface SidebarItem {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  active: boolean
}

export interface Notification {
  id: number
  message: string
  type: 'info' | 'warning' | 'error'
  timestamp: Date
  read: boolean
} 