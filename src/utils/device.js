/**
 * 设备检测工具
 */
export const device = {
  /**
   * 是否为移动设备
   * @returns {boolean}
   */
  isMobile: () => window.innerWidth < 768,

  /**
   * 是否为平板设备
   * @returns {boolean}
   */
  isTablet: () => window.innerWidth >= 768 && window.innerWidth < 1024,

  /**
   * 是否为桌面设备
   * @returns {boolean}
   */
  isDesktop: () => window.innerWidth >= 1024
}

/**
 * 浏览器特性检测工具
 */
export const browser = {
  /**
   * 是否支持WebP格式
   * @returns {boolean}
   */
  supportsWebP: () => {
    const elem = document.createElement('canvas')
    if (elem.getContext && elem.getContext('2d')) {
      return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0
    }
    return false
  },

  /**
   * 是否支持localStorage
   * @returns {boolean}
   */
  supportsLocalStorage: () => {
    try {
      localStorage.setItem('test', 'test')
      localStorage.removeItem('test')
      return true
    } catch (e) {
      return false
    }
  }
} 