<!-- 组件说明 -->
<template>
  <div class="">
    <form class="card comment-form">
      <div class="card-block">
        <textarea
          class="form-control"
          placeholder="Write a comment..."
          rows="3"
        ></textarea>
      </div>
      <div class="card-footer">
        <img :src="article.author.image" class="comment-author-img" />
        <button class="btn btn-sm btn-primary">Post Comment</button>
      </div>
    </form>
    <template v-if="comments.length">
      <div class="card" v-for="(comment, index) in comments" :key="index">
        <div class="card-block">
          <p class="card-text">
            {{ comment.body }}
          </p>
        </div>
        <div class="card-footer">
          <nuxt-link
            :to="{
              name: 'profile',
              params: {
                username: comment.author.username,
              },
            }"
            class="comment-author"
          >
            <img :src="comment.author.image" class="comment-author-img" />
          </nuxt-link>
          &nbsp;
          <nuxt-link
            :to="{
              name: 'profile',
              params: {
                username: comment.author.username,
              },
            }"
            class="comment-author"
          >
            {{ comment.author.username }}
          </nuxt-link>
          <span class="date-posted">{{
            comment.author.createedAt | date("MMM DD,YYYY")
          }}</span>
        </div>
      </div>
    </template>

    <div v-else class="card">
      <div class="card-block">
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
      </div>
      <div class="card-footer">
        <a href="" class="comment-author">
          <img
            src="http://i.imgur.com/Qr71crq.jpg"
            class="comment-author-img"
          />
        </a>
        &nbsp;
        <a href="" class="comment-author">Jacob Schmidt</a>
        <span class="date-posted">Dec 29th</span>
        <span class="mod-options">
          <i class="ion-edit"></i>
          <i class="ion-trash-a"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { getComments } from "../../../api/articles";
export default {
  name: "ArticleComments",
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  components: {},
  data() {
    return {
      comments: [], //文章列表
    };
  },
  computed: {},
  methods: {},
  async mounted() {
    const { data } = await getComments(this.article.slug);
    this.comments = data.comments;
  },
};
</script>

<style lang='css' scoped>
</style>