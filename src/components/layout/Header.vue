<template>
  <header>
    <div class="container">
      <nav>
        <a href="#" class="logo">
          <div class="mobius"></div>
          <div class="bee"></div>
          <span class="logo-text">Hzmook</span>
        </a>
        <div class="nav-links">
          <a href="#resources">精选资源</a>
          <a href="#projects">实验项目</a>
          <a href="#blog">技术博客</a>
          <a href="#games">休闲游戏</a>
        </div>
        <button class="mobile-menu-btn">
          <i class="fas fa-bars"></i>
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
header {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: var(--shadow);
  position: sticky;
  top: 0;
  z-index: 100;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
}

.logo {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary);
  text-decoration: none;
  display: flex;
  align-items: center;
  position: relative;
  width: 80px;
  height: 40px;
}

.mobius {
  width: 40px;
  height: 20px;
  border: 3px solid transparent;
  border-top-color: #2962FF;
  border-bottom-color: #FF6D00;
  border-radius: 50%;
  transform-origin: 50% 50%;
  transform: rotateX(60deg) rotate(45deg);
  position: absolute;
  top: 10px;
  left: 20px;
  animation: spin 6s linear infinite;
}

.bee {
  width: 12px;
  height: 8px;
  background: #FFC107;
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  box-shadow: 0 0 2px rgba(0,0,0,0.3);
}

.bee:before, .bee:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  background: #000;
  left: 0;
}

.bee:before { top: 3px; }
.bee:after { top: 5px; }

.logo-text {
  margin-left: 90px;
  white-space: nowrap;
  font-size: 1.5rem;
}

@keyframes spin {
  to { transform: rotateX(60deg) rotate(405deg); }
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: var(--dark);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
  position: relative;
}

.nav-links a:hover {
  color: var(--primary);
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary);
  transition: var(--transition);
}

.nav-links a:hover::after {
  width: 100%;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--dark);
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .nav-links.active {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    padding: 1rem;
    box-shadow: var(--shadow);
  }

  .nav-links.active a {
    margin: 0.5rem 0;
  }

  .mobile-menu-btn {
    display: block;
  }
}
</style> 