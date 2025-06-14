<template>
  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-column">
          <h3>关于本站</h3>
          <p>一个专注于技术分享和资源整理的开发者空间，致力于帮助开发者提升技能和效率。在这里，你可以找到高质量的技术文章、实用的开发工具和有趣的项目实践。</p>
          <div class="social-links">
            <a href="https://github.com" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
            <a href="https://juejin.cn" target="_blank" title="掘金"><i class="fas fa-book"></i></a>
            <a href="https://www.zhihu.com" target="_blank" title="知乎"><i class="fab fa-zhihu"></i></a>
            <a href="https://www.infoq.cn" target="_blank" title="InfoQ"><i class="fas fa-newspaper"></i></a>
          </div>
        </div>
        
        <div class="footer-column">
          <h3>资源导航</h3>
          <ul class="footer-links">
            <li><a href="#resources">开发资源</a></li>
            <li><a href="#tools">实用工具</a></li>
            <li><a href="#tutorials">教程文档</a></li>
            <li><a href="#books">推荐书籍</a></li>
          </ul>
        </div>
        
        <div class="footer-column">
          <h3>技术分类</h3>
          <ul class="footer-links">
            <li><a href="#">前端开发</a></li>
            <li><a href="#">后端架构</a></li>
            <li><a href="#">移动开发</a></li>
            <li><a href="#">人工智能</a></li>
            <li><a href="#">云原生</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h3>联系方式</h3>
          <ul class="footer-links">
            <li><a href="mailto:hzmook@126.com"><i class="fas fa-envelope"></i> hzmook@126.com</a></li>
            <li><a href="https://github.com/hzmok" target="_blank"><i class="fab fa-github"></i> GitHub</a></li>
          </ul>
        </div>
      </div>
      
      <div class="copyright">
        <p>&copy; 2025 Hzmook. 保留所有权利。 | <a href="#">隐私政策</a> | <a href="#">使用条款</a></p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
footer {
  background: var(--dark);
  padding: 4rem 0 2rem;
  color: white;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-column h3 {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  color: white;
}

.footer-column p {
  color: #adb5bd;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 1rem;
}

.footer-links a {
  color: #adb5bd;
  text-decoration: none;
  transition: var(--transition);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-links a i {
  font-size: 1.1rem;
  width: 20px;
}

.footer-links a:hover {
  color: var(--primary);
  padding-left: 5px;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  transition: var(--transition);
  font-size: 1.2rem;
}

.social-links a:hover {
  background: var(--primary);
  transform: translateY(-5px);
}

.copyright {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #adb5bd;
  font-size: 0.9rem;
}

.copyright a {
  color: #adb5bd;
  text-decoration: none;
  transition: var(--transition);
}

.copyright a:hover {
  color: var(--primary);
}

@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
  }
}
</style> 