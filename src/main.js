import { createApp } from 'vue'
import App from './App.vue'

// 导入全局样式
import './assets/styles/variables.css'
import './assets/styles/global.css'

// 导入 Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css'

// 创建 Vue 应用
const app = createApp(App)

// 挂载应用
app.mount('#app')

// 移动端菜单切换
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn')
  const navLinks = document.querySelector('.nav-links')
  
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active')
    })
  }
  
  // 平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault()
      
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        })
        
        // 关闭移动端菜单
        if (navLinks) {
          navLinks.classList.remove('active')
        }
      }
    })
  })
}) 