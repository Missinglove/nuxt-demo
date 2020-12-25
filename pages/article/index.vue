<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>

        <article-meta :article="article"></article-meta>
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12" v-html="article.body"></div>
      </div>

      <hr />

      <div class="article-actions">
        <article-meta :article="article"></article-meta>
      </div>

      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <ArticleComment :article="article"></ArticleComment>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticle } from "../../api/articles";
import Markdown from "markdown-it";
import ArticleMeta from "../article/components/article-meta";
import ArticleComment from "./components/article-comment";
export default {
  components: { ArticleMeta, ArticleComment },
  head() {
    //此处是为了做meta SEO优化
    return {
      title: `${this.article.title} - Realword`,
      meta: [
        {
          hid: "description", //每个当前页面添加唯一标识
          name: "description",
          content: this.article.description, //文章摘要
        },
      ],
    };
  },
  name: "articleIndex",
  async asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error,
  }) {
    const { slug } = params;

    const { data } = await getArticle(slug);

    const { article } = data;

    const md = new Markdown();

    article.body = md.render(article.body);

    return { article };
  },
};
</script>

<style scoped>
</style>

