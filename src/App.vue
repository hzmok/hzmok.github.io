<template>
  <div id="app">
    <Header v-if="!currentGame" />
    
    <main>
      <!-- 游戏专属页面条件渲染 -->
      <div v-if="currentGame" class="game-player-fullscreen">
        <button class="back-icon-btn" @click="handleBackToMain" title="返回主页面">
          <i class="fas fa-arrow-left"></i>
        </button>
        <iframe
          :src="gameUrlMap[currentGame]"
          frameborder="0"
          class="game-iframe-full"
          allowfullscreen
        ></iframe>
      </div>
      <!-- 博客专属页面条件渲染 -->
      <div v-else-if="currentBlog" class="blog-player-fullscreen">
        <button class="back-icon-btn" @click="handleBackToMain" title="返回主页面">
          <i class="fas fa-arrow-left"></i>
        </button>
        <iframe
          :src="blogUrlMap[currentBlog]"
          frameborder="0"
          class="blog-iframe-full"
          allowfullscreen
        ></iframe>
      </div>
      <template v-else>
        <!-- Hero Section -->
        <section class="hero">
          <div class="container">
            <h1>构建、分享、<span>创造</span></h1>
            <p>欢迎来到我的开发者空间，这里汇集了精选的开发资源、实验性项目和原创技术文章。</p>
            <div class="cta-buttons">
              <a href="#resources" class="btn btn-primary">探索资源</a>
              <a href="#blog" class="btn btn-outline">查看博客</a>
            </div>
          </div>
        </section>

        <!-- Resources Section -->
        <section id="resources">
          <div class="container">
            <div class="section-title">
              <h2>精选资源</h2>
              <p>收集整理的高质量开发工具、学习资源和实用网站</p>
            </div>
            <div class="resources-container">
              <div class="resource-card">
                <div class="resource-icon">
                  <i class="fas fa-globe"></i>
                </div>
                <div class="resource-content">
                  <h3>前端开发指南</h3>
                  <p>系统化的前端技术学习路径，涵盖HTML5、CSS3、JavaScript等核心技术。</p>
                  <a href="https://developer.mozilla.org/zh-CN/docs/Web/" class="btn btn-outline" target="_blank">访问资源</a>
                  <div class="tags">
                    <span class="tag">前端</span>
                    <span class="tag">JavaScript</span>
                    <span class="tag">教程</span>
                  </div>
                </div>
              </div>
              
              <div class="resource-card">
                <div class="resource-icon">
                  <i class="fas fa-palette"></i>
                </div>
                <div class="resource-content">
                  <h3>UI设计资源</h3>
                  <p>精选的设计工具、配色方案和UI组件库，提升产品视觉体验。</p>
                  <a href="https://collectui.com/" class="btn btn-outline" target="_blank">访问资源</a>
                  <div class="tags">
                    <span class="tag">设计</span>
                    <span class="tag">UI/UX</span>
                    <span class="tag">资源</span>
                  </div>
                </div>
              </div>
              
              <div class="resource-card">
                <div class="resource-icon">
                  <i class="fas fa-database"></i>
                </div>
                <div class="resource-content">
                  <h3>后端开发指南</h3>
                  <p>Java、Spring等后端技术栈的学习路径和项目实践。</p>
                  <a href="https://spring.io/guides" class="btn btn-outline" target="_blank">访问资源</a>
                  <div class="tags">
                    <span class="tag">后端</span>
                    <span class="tag">Java</span>
                    <span class="tag">Spring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Blog Section -->
        <section id="blog">
          <div class="container">
            <div class="section-title">
              <h2>技术博客</h2>
              <p>分享开发经验、技术探索和行业见解</p>
            </div>
            <div class="blog-container">
              <div class="blog-card" @click="readBlog('web-safe')">
                <div class="blog-image">
                  <i class="fas fa-lock"></i>
                </div>
                <div class="blog-content">
                  <h3>前端安全最佳实践</h3>
                  <p>全面解析常见的前端安全漏洞及防御措施，保护你的Web应用。</p>
                  <div class="blog-meta">
                    <span><i class="far fa-calendar"></i> 2025-06-01</span>
                    <span><i class="far fa-clock"></i> 5分钟阅读</span>
                  </div>
                </div>
              </div>
              
              <div class="blog-card" @click="readBlog('web-perf')">
                <div class="blog-image">
                  <i class="fas fa-bolt"></i>
                </div>
                <div class="blog-content">
                  <h3>性能优化实战指南</h3>
                  <p>从加载时间到运行时性能，全面提升Web应用用户体验的实用技巧。</p>
                  <div class="blog-meta">
                    <span><i class="far fa-calendar"></i> 2025-06-01</span>
                    <span><i class="far fa-clock"></i> 8分钟阅读</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="games">
          <div class="container">
            <div class="section-title">
              <h2>休闲游戏</h2>
              <p>轻松有趣的H5小游戏，随时随地在浏览器中体验</p>
            </div>
            <div class="games-container">
              <div class="game-card">
                <div class="game-image">
                  <i class="fas fa-puzzle-piece"></i>
                </div>
                <div class="game-content">
                  <h3>路径碎片</h3>
                  <p>有趣的路径拼接游戏，通过旋转和移动碎片，将分散的路径连接成完整的通路。</p>
                  <button class="btn btn-primary" @click="playGame('path-fragments')">开始游戏</button>
                  <div class="game-meta">
                    <span><i class="fas fa-mouse-pointer"></i> 鼠标操作</span>
                    <span><i class="fas fa-brain"></i> 益智解谜</span>
                  </div>
                </div>
              </div>

              <div class="game-card">
                <div class="game-image">
                  <i class="fas fa-gamepad"></i>
                </div>
                <div class="game-content">
                  <h3>贪吃蛇</h3>
                  <p>经典贪吃蛇游戏，使用方向键控制蛇的移动，吃到食物后蛇身会变长，撞到墙壁或自己则游戏结束。</p>
                  <button class="btn btn-primary" @click="playGame('greedy-snake')">开始游戏</button>
                  <div class="game-meta">
                    <span><i class="fas fa-keyboard"></i> 方向键控制</span>
                    <span><i class="fas fa-trophy"></i> 挑战最高分</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </template>
    </main>

    <Footer v-if="!currentGame && !currentBlog" />
    <BackToTop v-if="!currentGame && !currentBlog" />
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
import BackToTop from './components/BackToTop.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    BackToTop
  },
  data() {
    return {
      currentGame: '',
      currentBlog: '',
      gameUrlMap: {
        'greedy-snake': '/games/greedy-snake.html',
        'path-fragments': '/games/path-fragments.html',
      },
      blogUrlMap: {
        'web-safe': '/blog/web-safe.html',
        'web-perf': '/blog/web-perf.html',
      },
    }
  },
  methods: {
    playGame(game) {
      this.currentGame = game;
    },
    readBlog(blog) {
      this.currentBlog = blog;
    },
    handleBackToMain() {
      const previousSection = this.currentGame ? 'games' : 'blog';
      this.currentGame = '';
      this.currentBlog = '';
      this.$nextTick(() => {
        // 平滑滚动到对应部分
        const targetSection = document.getElementById(previousSection);
        if (targetSection) {
          const headerOffset = 100;
          const elementPosition = targetSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    },
  },
  mounted() {
    // 平滑滚动处理
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          const headerOffset = 100;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  },
}
</script>

<style>
@import './assets/styles/variables.css';
@import './assets/styles/global.css';

/* Hero Section */
.hero {
  padding: 6rem 0 4rem;
  text-align: center;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: var(--dark);
  line-height: 1.2;
}

.hero h1 span {
  color: var(--primary);
}

.hero p {
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto 2rem;
  color: var(--gray);
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

/* Resources Section */
.resources-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.resource-card {
  background: white;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.resource-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.resource-icon {
  height: 120px;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
}

.resource-content {
  padding: 1.5rem;
}

.resource-content h3 {
  margin-bottom: 0.5rem;
  color: var(--dark);
}

.resource-content p {
  color: var(--gray);
  margin-bottom: 1rem;
}

/* Projects Section */
.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

.project-card {
  background: white;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.project-image {
  height: 120px;
  background: linear-gradient(135deg, #4cc9f0, #4361ee);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
}

.project-content {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.project-content h3 {
  margin-bottom: 0.75rem;
  color: var(--dark);
}

.project-content p {
  color: var(--gray);
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.project-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

/* Blog Section */
.blog-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.blog-card {
  background: white;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.blog-image {
  height: 120px;
  background: linear-gradient(135deg, #4cc9f0, #4361ee);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
}

.blog-content {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.blog-content h3 {
  margin-bottom: 0.75rem;
  color: var(--dark);
}

.blog-content p {
  color: var(--gray);
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.blog-meta {
  display: flex;
  justify-content: space-between;
  color: var(--gray);
  font-size: 0.9rem;
  border-top: 1px solid var(--light-gray);
  padding-top: 1rem;
  margin-top: auto;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tag {
  background: var(--light-gray);
  color: var(--gray);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    text-align: center;
  }
}

/* 游戏模块样式 */
.games-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.game-card {
  background: #fff;
  border-radius: 1rem;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
}

.game-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.game-image {
  height: 120px;
  background: linear-gradient(135deg, #f72585, #4361ee);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  position: relative;
  z-index: 1;
}

.game-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
  z-index: 1;
  pointer-events: none;
}

.game-image i {
  font-size: 3rem;
  color: #fff;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 2;
  pointer-events: none;
}

.game-content {
  padding: 1.5rem;
  color: var(--dark);
  position: relative;
  z-index: 2;
}

.game-content h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--dark);
}

.game-content p {
  color: var(--text);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.btn-game {
  background: transparent;
  color: var(--primary);
  padding: 0.8rem 1.5rem;
  border-radius: 2rem;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
  border: 2px solid var(--primary);
}

.btn-game:hover {
  background: var(--primary);
  color: #fff;
}

.game-meta {
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
}

.game-meta span {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text);
}

.game-meta i {
  color: var(--primary);
}

@media (max-width: 768px) {
  .games-container {
    grid-template-columns: 1fr;
  }
}

.game-player-fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background: #000;
}

.blog-player-fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background: #fff;
}

.game-iframe-full {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  border: none;
  background: #000;
  z-index: 1;
}

.blog-iframe-full {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  border: none;
  background: #fff;
  z-index: 1;
}

.back-icon-btn {
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 10;
  background: rgba(0,0,0,0.5);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
}

.back-icon-btn:hover {
  background: linear-gradient(135deg, #4361ee 60%, #4cc9f0 100%);
  color: #fff;
  transform: scale(1.12);
  box-shadow: 0 6px 24px rgba(67,97,238,0.25);
}
</style> 