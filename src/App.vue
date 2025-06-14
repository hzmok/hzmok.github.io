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
      <template v-else>
        <!-- Hero Section -->
        <section class="hero">
          <div class="container">
            <h1>构建、分享、<span>创造</span></h1>
            <p>欢迎来到我的开发者空间，这里汇集了精选的开发资源、实验性项目和原创技术文章。</p>
            <div class="cta-buttons">
              <a href="#resources" class="btn btn-primary">探索资源</a>
              <a href="#projects" class="btn btn-outline">查看项目</a>
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

        <!-- Projects Section -->
        <section id="projects" style="background-color: #f8faff;">
          <div class="container">
            <div class="section-title">
              <h2>实验项目</h2>
              <p>探索前沿技术、尝试新想法和解决方案的实践项目</p>
            </div>
            <div class="projects-container">
              <div class="project-card">
                <div class="project-image">
                  <i class="fas fa-chart-line"></i>
                </div>
                <div class="project-content">
                  <h3>可视化数据平台</h3>
                  <p>基于D3.js的数据可视化平台，支持多种图表类型和数据源接入。</p>
                  <div class="project-meta">
                    <div class="tags">
                      <span class="tag">数据可视化</span>
                      <span class="tag">React</span>
                    </div>
                    <a href="#" class="btn btn-primary">查看详情</a>
                  </div>
                </div>
              </div>
              
              <div class="project-card">
                <div class="project-image">
                  <i class="fas fa-robot"></i>
                </div>
                <div class="project-content">
                  <h3>AI聊天机器人</h3>
                  <p>使用GPT技术构建的智能对话系统，支持上下文理解和多轮对话。</p>
                  <div class="project-meta">
                    <div class="tags">
                      <span class="tag">人工智能</span>
                      <span class="tag">NLP</span>
                    </div>
                    <a href="#" class="btn btn-primary">查看详情</a>
                  </div>
                </div>
              </div>
              
              <div class="project-card">
                <div class="project-image">
                  <i class="fas fa-mobile-alt"></i>
                </div>
                <div class="project-content">
                  <h3>跨平台应用框架</h3>
                  <p>基于Flutter的跨平台开发框架，实现一套代码多端运行。</p>
                  <div class="project-meta">
                    <div class="tags">
                      <span class="tag">移动开发</span>
                      <span class="tag">Flutter</span>
                    </div>
                    <a href="#" class="btn btn-primary">查看详情</a>
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
              <div class="blog-card">
                <div class="blog-image">
                  <i class="fas fa-microchip"></i>
                </div>
                <div class="blog-content">
                  <h3>WebAssembly在现代Web开发中的应用</h3>
                  <p>探索WebAssembly如何提升Web应用性能，以及在复杂场景下的最佳实践。</p>
                  <a href="#" class="btn btn-outline">阅读全文</a>
                  <div class="blog-meta">
                    <span><i class="far fa-calendar"></i> 2023-10-15</span>
                    <span><i class="far fa-clock"></i> 8分钟阅读</span>
                  </div>
                </div>
              </div>
              
              <div class="blog-card">
                <div class="blog-image">
                  <i class="fas fa-lock"></i>
                </div>
                <div class="blog-content">
                  <h3>前端安全最佳实践</h3>
                  <p>全面解析常见的前端安全漏洞及防御措施，保护你的Web应用。</p>
                  <a href="#" class="btn btn-outline">阅读全文</a>
                  <div class="blog-meta">
                    <span><i class="far fa-calendar"></i> 2023-09-28</span>
                    <span><i class="far fa-clock"></i> 6分钟阅读</span>
                  </div>
                </div>
              </div>
              
              <div class="blog-card">
                <div class="blog-image">
                  <i class="fas fa-bolt"></i>
                </div>
                <div class="blog-content">
                  <h3>性能优化实战指南</h3>
                  <p>从加载时间到运行时性能，全面提升Web应用用户体验的实用技巧。</p>
                  <a href="#" class="btn btn-outline">阅读全文</a>
                  <div class="blog-meta">
                    <span><i class="far fa-calendar"></i> 2023-09-10</span>
                    <span><i class="far fa-clock"></i> 10分钟阅读</span>
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

    <Footer v-if="!currentGame" />
    <BackToTop v-if="!currentGame" />
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
      gameUrlMap: {
        'greedy-snake': '/games/greedy-snake.html',
        'path-fragments': '/games/path-fragments.html',
      },
    }
  },
  methods: {
    playGame(game) {
      this.currentGame = game;
    },
    handleBackToMain() {
      this.currentGame = '';
      this.$nextTick(() => {
        // 平滑滚动到 #games
        const gamesSection = document.getElementById('games');
        if (gamesSection) {
          gamesSection.scrollIntoView({ behavior: 'smooth' });
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
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.blog-card {
  background: white;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.blog-image {
  height: 120px;
  background: linear-gradient(135deg, #f72585, #4361ee);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
}

.blog-content {
  padding: 1.5rem;
}

.blog-content h3 {
  margin-bottom: 0.75rem;
  color: var(--dark);
}

.blog-content p {
  color: var(--gray);
  margin-bottom: 1.5rem;
}

.blog-meta {
  display: flex;
  justify-content: space-between;
  color: var(--gray);
  font-size: 0.9rem;
  border-top: 1px solid var(--light-gray);
  padding-top: 1rem;
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
}

.game-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.game-image {
  background: linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%);
  padding: 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
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
}

.game-image i {
  font-size: 3rem;
  color: #fff;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 2;
}

.game-content {
  padding: 1.5rem;
  color: var(--dark);
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
.back-icon-btn {
  position: absolute;
  top: 24px;
  left: 24px;
  z-index: 10;
  background: rgba(0,0,0,0.5);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;
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