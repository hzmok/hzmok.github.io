<template>
  <div id="app">
    <Header v-if="!currentGame && !currentBlog && currentPage === 'home'" />

    <main>
      <!-- 游戏专属页面条件渲染 -->
      <div v-if="currentGame" class="game-player-fullscreen">
        <button class="back-icon-btn" @click="handleBackToMain" title="返回主页面">
          <i class="fas fa-arrow-left"></i>
        </button>
        <iframe :src="gameUrlMap[currentGame]" frameborder="0" class="game-iframe-full" allowfullscreen></iframe>
      </div>
      <!-- 博客专属页面条件渲染 -->
      <div v-else-if="currentBlog" class="blog-player-fullscreen">
        <button class="back-icon-btn" @click="handleBackToMain" title="返回主页面">
          <i class="fas fa-arrow-left"></i>
        </button>
        <iframe :src="blogUrlMap[currentBlog]" frameborder="0" class="blog-iframe-full" allowfullscreen></iframe>
      </div>
      <!-- 资源子页面 -->
      <div v-else-if="currentPage === 'resources'" class="sub-page">
        <button class="back-icon-btn" @click="backToHome" title="返回主页">
          <i class="fas fa-arrow-left"></i>
        </button>
        <div class="container">
          <div class="page-header">
            <h1>精选资源</h1>
            <p>收集整理的高质量开发工具、学习资源和实用网站</p>
          </div>

          <!-- 资源分类标签 -->
          <div class="category-tabs">
            <button v-for="category in resourceCategories" :key="category.id"
              :class="['category-tab', { active: currentResourceCategory === category.id }]"
              @click="setResourceCategory(category.id)">
              {{ category.name }}
            </button>
          </div>

          <div class="resources-container">
            <div v-for="resource in allFilteredResources" :key="resource.id" class="resource-card">
              <div class="resource-icon">
                <i :class="resource.icon"></i>
              </div>
              <div class="resource-content">
                <h3>{{ resource.title }}</h3>
                <p>{{ resource.description }}</p>
                <a :href="resource.url" class="btn btn-outline" target="_blank">访问资源</a>
                <div class="tags">
                  <span v-for="tag in resource.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 博客子页面 -->
      <div v-else-if="currentPage === 'blogs'" class="sub-page">
        <button class="back-icon-btn" @click="backToHome" title="返回主页">
          <i class="fas fa-arrow-left"></i>
        </button>
        <div class="container">
          <div class="page-header">
            <h1>技术博客</h1>
            <p>分享开发经验、技术探索和行业见解</p>
          </div>

          <!-- 博客分类标签 -->
          <div class="category-tabs">
            <button v-for="category in blogCategories" :key="category.id"
              :class="['category-tab', { active: currentBlogCategory === category.id }]"
              @click="setBlogCategory(category.id)">
              {{ category.name }}
            </button>
          </div>

          <div class="blog-container">
            <div v-for="blog in allFilteredBlogs" :key="blog.id" class="blog-card" @click="readBlog(blog.id)">
              <div class="blog-image">
                <i :class="blog.icon"></i>
              </div>
              <div class="blog-content">
                <h3>{{ blog.title }}</h3>
                <p>{{ blog.description }}</p>
                <div class="blog-meta">
                  <span><i class="far fa-calendar"></i> {{ blog.date }}</span>
                  <span><i class="far fa-clock"></i> {{ blog.readTime }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 游戏子页面 -->
      <div v-else-if="currentPage === 'games'" class="sub-page">
        <button class="back-icon-btn" @click="backToHome" title="返回主页">
          <i class="fas fa-arrow-left"></i>
        </button>
        <div class="container">
          <div class="page-header">
            <h1>休闲游戏</h1>
            <p>轻松有趣的H5小游戏，随时随地在浏览器中体验</p>
          </div>

          <!-- 游戏分类标签 -->
          <div class="category-tabs">
            <button v-for="category in gameCategories" :key="category.id"
              :class="['category-tab', { active: currentGameCategory === category.id }]"
              @click="setGameCategory(category.id)">
              {{ category.name }}
            </button>
          </div>

          <div class="games-container">
            <div v-for="game in allFilteredGames" :key="game.id" class="game-card">
              <div class="game-image">
                <i :class="game.icon"></i>
              </div>
              <div class="game-content">
                <h3>{{ game.title }}</h3>
                <p>{{ game.description }}</p>
                <button class="btn btn-primary" @click="playGame(game.id)">开始游戏</button>
                <div class="game-meta">
                  <span v-for="meta in game.meta" :key="meta.text">
                    <i :class="meta.icon"></i> {{ meta.text }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
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
              <div v-for="resource in homeResources" :key="resource.id" class="resource-card">
                <div class="resource-icon">
                  <i :class="resource.icon"></i>
                </div>
                <div class="resource-content">
                  <h3>{{ resource.title }}</h3>
                  <p>{{ resource.description }}</p>
                  <a :href="resource.url" class="btn btn-outline" target="_blank">访问资源</a>
                  <div class="tags">
                    <span v-for="tag in resource.tags" :key="tag" class="tag">{{ tag }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 查看更多按钮 -->
            <div v-if="showMoreResources" class="view-more-container">
              <button class="btn btn-primary" @click="viewMoreResources">
                查看更多资源
              </button>
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
              <div v-for="blog in homeBlogs" :key="blog.id" class="blog-card" @click="readBlog(blog.id)">
                <div class="blog-image">
                  <i :class="blog.icon"></i>
                </div>
                <div class="blog-content">
                  <h3>{{ blog.title }}</h3>
                  <p>{{ blog.description }}</p>
                  <div class="blog-meta">
                    <span><i class="far fa-calendar"></i> {{ blog.date }}</span>
                    <span><i class="far fa-clock"></i> {{ blog.readTime }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 查看更多按钮 -->
            <div v-if="showMoreBlogs" class="view-more-container">
              <button class="btn btn-primary" @click="viewMoreBlogs">
                查看更多文章
              </button>
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
              <div v-for="game in homeGames" :key="game.id" class="game-card">
                <div class="game-image">
                  <i :class="game.icon"></i>
                </div>
                <div class="game-content">
                  <h3>{{ game.title }}</h3>
                  <p>{{ game.description }}</p>
                  <button class="btn btn-primary" @click="playGame(game.id)">开始游戏</button>
                  <div class="game-meta">
                    <span v-for="meta in game.meta" :key="meta.text">
                      <i :class="meta.icon"></i> {{ meta.text }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 查看更多按钮 -->
            <div v-if="showMoreGames" class="view-more-container">
              <button class="btn btn-primary" @click="viewMoreGames">
                查看更多游戏
              </button>
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
      currentPage: 'home', // 当前页面：home, resources, blogs, games

      // 当前选中的分类
      currentResourceCategory: 'all',
      currentBlogCategory: 'all',
      currentGameCategory: 'all',

      // 资源数据
      resourceCategories: [
        { id: 'all', name: '全部' },
        { id: 'frontend', name: '前端' },
        { id: 'backend', name: '后端' },
        { id: 'design', name: '设计' },
        { id: 'tools', name: '工具' }
      ],

      resources: [
        {
          id: 'frontend-guide',
          title: '前端开发指南',
          description: '系统化的前端技术学习路径，涵盖HTML5、CSS3、JavaScript等核心技术。',
          url: 'https://developer.mozilla.org/zh-CN/docs/Web/',
          icon: 'fas fa-globe',
          category: 'frontend',
          tags: ['前端', 'JavaScript', '教程']
        },
        {
          id: 'ui-design',
          title: 'UI设计资源',
          description: '精选的设计工具、配色方案和UI组件库，提升产品视觉体验。',
          url: 'https://collectui.com/',
          icon: 'fas fa-palette',
          category: 'design',
          tags: ['设计', 'UI/UX', '资源']
        },
        {
          id: 'backend-guide',
          title: '后端开发指南',
          description: 'Java、Spring等后端技术栈的学习路径和项目实践。',
          url: 'https://spring.io/guides',
          icon: 'fas fa-database',
          category: 'backend',
          tags: ['后端', 'Java', 'Spring']
        },
        {
          id: 'dev-tools',
          title: '开发者工具集',
          description: '提升开发效率的必备工具，包括代码编辑器、调试工具等。',
          url: 'https://github.com/topics/developer-tools',
          icon: 'fas fa-tools',
          category: 'tools',
          tags: ['工具', '开发', '效率']
        },
        {
          id: 'css-frameworks',
          title: 'CSS框架对比',
          description: '主流CSS框架的详细对比，帮助你选择最适合项目的样式解决方案。',
          url: 'https://css-tricks.com/',
          icon: 'fas fa-paint-brush',
          category: 'frontend',
          tags: ['CSS', '框架', '样式']
        },
        {
          id: 'api-design',
          title: 'API设计最佳实践',
          description: 'RESTful API设计原则和最佳实践，打造高质量的接口服务。',
          url: 'https://restfulapi.net/',
          icon: 'fas fa-code',
          category: 'backend',
          tags: ['API', '设计', '后端']
        }
      ],

      // 博客分类
      blogCategories: [
        { id: 'all', name: '全部' },
        { id: 'frontend', name: '前端' },
        { id: 'backend', name: '后端' },
        { id: 'performance', name: '性能' },
        { id: 'security', name: '安全' }
      ],

      blogs: [
        {
          id: 'web-safe',
          title: '前端安全最佳实践',
          description: '全面解析常见的前端安全漏洞及防御措施，保护你的Web应用。',
          icon: 'fas fa-lock',
          category: 'security',
          date: '2025-06-01',
          readTime: '5分钟阅读'
        },
        {
          id: 'web-perf',
          title: '性能优化实战指南',
          description: '从加载时间到运行时性能，全面提升Web应用用户体验的实用技巧。',
          icon: 'fas fa-bolt',
          category: 'performance',
          date: '2025-06-01',
          readTime: '8分钟阅读'
        }
      ],

      // 游戏分类
      gameCategories: [
        { id: 'all', name: '全部' },
        { id: 'puzzle', name: '益智解谜' },
        { id: 'action', name: '动作冒险' },
        { id: 'strategy', name: '策略游戏' },
        { id: 'casual', name: '休闲娱乐' }
      ],

      games: [
        {
          id: 'path-fragments',
          title: '路径碎片',
          description: '有趣的路径拼接游戏，通过旋转和移动碎片，将分散的路径连接成完整的通路。',
          icon: 'fas fa-puzzle-piece',
          category: 'puzzle',
          meta: [
            { icon: 'fas fa-mouse-pointer', text: '鼠标操作' },
            { icon: 'fas fa-brain', text: '益智解谜' }
          ]
        },
        {
          id: 'greedy-snake',
          title: '贪吃蛇',
          description: '经典贪吃蛇游戏，使用方向键控制蛇的移动，吃到食物后蛇身会变长，撞到墙壁或自己则游戏结束。',
          icon: 'fas fa-gamepad',
          category: 'casual',
          meta: [
            { icon: 'fas fa-keyboard', text: '方向键控制' },
            { icon: 'fas fa-trophy', text: '挑战最高分' }
          ]
        },
        {
          id: 'color-block',
          title: '多彩方块链',
          description: '连接相同颜色的方块形成链条，链条越长得分越高。寻找特殊方块触发连锁反应！',
          icon: 'fas fa-palette',
          category: 'puzzle',
          meta: [
            { icon: 'fas fa-mouse-pointer', text: '鼠标操作' },
            { icon: 'fas fa-star', text: '连击奖励' }
          ]
        }
      ],

      gameUrlMap: {
        'greedy-snake': '/games/greedy-snake.html',
        'path-fragments': '/games/path-fragments.html',
        'color-block': '/games/color-block.html',
      },
      blogUrlMap: {
        'web-safe': '/blog/web-safe.html',
        'web-perf': '/blog/web-perf.html',
      },
    }
  },
  computed: {
    // 首页显示的数据（前3个）
    homeResources() {
      return this.resources.slice(0, 3);
    },
    homeBlogs() {
      return this.blogs.slice(0, 3);
    },
    homeGames() {
      return this.games.slice(0, 3);
    },
    // 子页面过滤后的数据
    filteredResources() {
      if (this.currentResourceCategory === 'all') {
        return this.resources.slice(0, 3); // 最多显示3个
      }
      return this.resources.filter(resource => resource.category === this.currentResourceCategory).slice(0, 3);
    },
    filteredBlogs() {
      if (this.currentBlogCategory === 'all') {
        return this.blogs.slice(0, 3); // 最多显示3个
      }
      return this.blogs.filter(blog => blog.category === this.currentBlogCategory).slice(0, 3);
    },
    filteredGames() {
      if (this.currentGameCategory === 'all') {
        return this.games.slice(0, 3); // 最多显示3个
      }
      return this.games.filter(game => game.category === this.currentGameCategory).slice(0, 3);
    },
    showMoreResources() {
      return this.resources.length > 3;
    },
    showMoreBlogs() {
      return this.blogs.length > 3;
    },
    showMoreGames() {
      return this.games.length > 3;
    },
    allFilteredResources() {
      if (this.currentResourceCategory === 'all') {
        return this.resources;
      }
      return this.resources.filter(resource => resource.category === this.currentResourceCategory);
    },
    allFilteredBlogs() {
      if (this.currentBlogCategory === 'all') {
        return this.blogs;
      }
      return this.blogs.filter(blog => blog.category === this.currentBlogCategory);
    },
    allFilteredGames() {
      if (this.currentGameCategory === 'all') {
        return this.games;
      }
      return this.games.filter(game => game.category === this.currentGameCategory);
    }
  },
  methods: {
    setResourceCategory(category) {
      this.currentResourceCategory = category;
    },
    setBlogCategory(category) {
      this.currentBlogCategory = category;
    },
    setGameCategory(category) {
      this.currentGameCategory = category;
    },
    viewMoreResources() {
      this.currentPage = 'resources';
      this.$nextTick(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    },
    viewMoreBlogs() {
      this.currentPage = 'blogs';
      this.$nextTick(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    },
    viewMoreGames() {
      this.currentPage = 'games';
      this.$nextTick(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    },
    playGame(game) {
      this.currentGame = game;
    },
    readBlog(blog) {
      this.currentBlog = blog;
    },
    backToHome() {
      this.currentPage = 'home';
      this.currentGame = '';
      this.currentBlog = '';
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
      anchor.addEventListener('click', function (e) {
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
.category-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.category-tab {
  padding: 0.5rem 1.5rem;
  border: 2px solid var(--light-gray);
  background: white;
  color: var(--gray);
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.category-tab:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.category-tab.active {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

.resources-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.view-more-container {
  text-align: center;
  margin-top: 3rem;
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

  .category-tabs {
    gap: 0.5rem;
  }

  .category-tab {
    padding: 0.4rem 1rem;
    font-size: 0.9rem;
  }

  .resources-container,
  .blog-container,
  .games-container {
    grid-template-columns: 1fr;
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
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%);
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
  top: 12px;
  left: 12px;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
}

.back-icon-btn:hover {
  background: linear-gradient(135deg, #4361ee 60%, #4cc9f0 100%);
  color: #fff;
  transform: scale(1.12);
  box-shadow: 0 6px 24px rgba(67, 97, 238, 0.25);
}

/* 子页面样式 */
.sub-page {
  min-height: 100vh;
  background: var(--bg-color);
  padding-top: 60px;
}

.page-header {
  text-align: center;
  margin-bottom: 2rem;
  padding: 1.5rem 0;
}

.page-header h1 {
  font-size: 2.2rem;
  color: var(--dark);
  margin-bottom: 0.5rem;
}

.page-header p {
  font-size: 1rem;
  color: var(--gray);
  max-width: 600px;
  margin: 0 auto;
}

.sub-page .category-tabs {
  margin-bottom: 2rem;
}

.sub-page .resources-container,
.sub-page .blog-container,
.sub-page .games-container {
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .sub-page {
    padding-top: 60px;
  }
}
</style>