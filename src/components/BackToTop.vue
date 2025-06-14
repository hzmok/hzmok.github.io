<template>
  <div 
    v-show="isVisible" 
    class="back-to-top"
    title="返回顶部"
    @click="scrollToTop"
  >
    <i class="fas fa-arrow-up"></i>
  </div>
</template>

<script>
export default {
  name: 'BackToTop',
  data() {
    return {
      isVisible: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    // 初始检查一次
    this.handleScroll()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const scrollY = window.scrollY
      this.isVisible = scrollY > 100 // 降低阈值到 100px
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
.back-to-top {
  position: fixed;
  right: 0.5rem;
  bottom: 0.5rem;
  width: 3rem;
  height: 3rem;
  background-color: #4a90e2;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  z-index: 9999; /* 提高 z-index 确保按钮在最上层 */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); /* 添加阴影效果 */
}

.back-to-top:hover {
  opacity: 1;
  transform: translateY(-2px); /* 添加悬停效果 */
}

.back-to-top i {
  font-size: 1.5rem;
}
</style> 