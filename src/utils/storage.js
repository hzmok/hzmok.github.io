/**
 * 本地存储工具
 */
export const storage = {
  /**
   * 设置存储项
   * @param {string} key - 键名
   * @param {any} value - 值
   */
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  },

  /**
   * 获取存储项
   * @param {string} key - 键名
   * @returns {any} 存储的值
   */
  get(key) {
    const value = localStorage.getItem(key)
    try {
      return JSON.parse(value)
    } catch {
      return value
    }
  },

  /**
   * 移除存储项
   * @param {string} key - 键名
   */
  remove(key) {
    localStorage.removeItem(key)
  }
} 