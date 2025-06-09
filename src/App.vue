<template>
  <div id="app">
    <Header />
    
    <main>
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
                <i class="fab fa-js"></i>
              </div>
              <div class="resource-content">
                <h3>现代JavaScript教程</h3>
                <p>从基础到高级的JavaScript全面教程，包含大量实例和最佳实践。</p>
                <a href="#" class="btn btn-outline">访问资源</a>
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
                <a href="#" class="btn btn-outline">访问资源</a>
                <div class="tags">
                  <span class="tag">设计</span>
                  <span class="tag">UI/UX</span>
                  <span class="tag">资源</span>
                </div>
              </div>
            </div>
            
            <div class="resource-card">
              <div class="resource-icon">
                <i class="fas fa-server"></i>
              </div>
              <div class="resource-content">
                <h3>后端开发指南</h3>
                <p>Node.js、Python、Go等后端技术栈的学习路径和项目实践。</p>
                <a href="#" class="btn btn-outline">访问资源</a>
                <div class="tags">
                  <span class="tag">后端</span>
                  <span class="tag">Node.js</span>
                  <span class="tag">API</span>
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
    </main>

    <Footer />
    <BackToTop />
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
  }
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
  height: 200px;
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
  height: 180px;
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
</style> 