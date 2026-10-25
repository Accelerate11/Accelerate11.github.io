# 姜云泽 · Yunze Jiang

个人学术与项目主页，展示无人机、机器人算法与嵌入式系统方面的学习和项目经历。

- 网站：<https://accelerate11.github.io/>
- 源码：<https://github.com/Accelerate11/Accelerate11.github.io>
- 构建：Ruby 3.2、Jekyll 4.4，使用 GitHub Actions 自动部署到 GitHub Pages。

## 内容维护

| 内容 | 文件 |
| --- | --- |
| 姓名、联系方式、头像、站点配置 | `_config.yml` |
| 首页 | `_pages/about.html` |
| 项目列表与详情 | `_data/projects.yml`、`_portfolio/` |
| 荣誉 | `_data/honors.yml` |
| 头像和项目图片 | `images/` |
| 公开简历 | `files/Yunze-Jiang-CV-public.pdf` |
| 自动构建与发布 | `.github/workflows/pages.yml` |

## 本地预览

安装 Ruby 3.2 和 Bundler 后，在仓库目录运行：

```sh
bundle install
bundle exec jekyll serve
```

打开 <http://127.0.0.1:4000/>。修改 `_config.yml` 后需重启预览服务。

## 许可与致谢

主题基于 [Academic Pages](https://github.com/academicpages/academicpages.github.io) 和 Minimal Mistakes，保留上游 [MIT 许可与版权声明](LICENSE)。
