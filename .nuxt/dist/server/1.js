exports.ids = [1];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return delFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getComments; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
 //user

const getArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "GET",
    url: "/api/articles",
    params
  });
};
const getFeedArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "GET",
    url: "/api/articles/feed",
    params // headers: {
    //     Authorization: `Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTMwMzUzLCJ1c2VybmFtZSI6ImhhbmRzb21lMTIyIiwiZXhwIjoxNjEzODg2NTgwfQ.W9OY4mN9cUqTQ4chuKj8oT6mXQFqcmI3euEhh7Q-WBg`
    // }

  });
};
const addFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "POST",
    url: `/api/articles/${slug}/favorite`
  });
};
const delFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "DELETE",
    url: `/api/articles/${slug}/favorite`
  });
};
const getArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "GET",
    url: `/api/articles/${slug}`
  });
};
const getComments = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "GET",
    url: `/api/articles/${slug}/comments`
  });
};

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=6a5d1afb&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\" data-v-6a5d1afb>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-6a5d1afb>","</div>",[_vm._ssrNode("<h1 data-v-6a5d1afb>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('article-meta',{attrs:{"article":_vm.article}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\" data-v-6a5d1afb>","</div>",[_vm._ssrNode("<div class=\"row article-content\" data-v-6a5d1afb><div class=\"col-md-12\" data-v-6a5d1afb>"+(_vm._s(_vm.article.body))+"</div></div> <hr data-v-6a5d1afb> "),_vm._ssrNode("<div class=\"article-actions\" data-v-6a5d1afb>","</div>",[_c('article-meta',{attrs:{"article":_vm.article}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\" data-v-6a5d1afb>","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\" data-v-6a5d1afb>","</div>",[_c('ArticleComment',{attrs:{"article":_vm.article}})],1)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=6a5d1afb&scoped=true&

// EXTERNAL MODULE: ./api/articles.js
var articles = __webpack_require__(28);

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(27);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=template&id=f74b3d08&
var article_metavue_type_template_id_f74b3d08_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{attrs:{"to":{
      name: 'profile',
      params: {
        username: _vm.article.author.username,
      },
    }}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
        name: 'profile',
        params: {
          username: _vm.article.author.username,
        },
      }}},[_vm._v(_vm._s(_vm.article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.createdAt,"MMM DD, YYYY")))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{ active: _vm.article.author.flowing }))+"><i class=\"ion-plus-round\"></i>\n      Follow Eric Simons <span class=\"counter\">(10)</span></button>\n    \n  <button"+(_vm._ssrClass("btn btn-sm btn-outline-primary",{ active: _vm.article.author.favorited }))+"><i class=\"ion-heart\"></i>\n      Favorite Post <span class=\"counter\">(29)</span></button>")],2)}
var article_metavue_type_template_id_f74b3d08_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=template&id=f74b3d08&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var article_metavue_type_script_lang_js_ = ({
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  name: "articleMeta",
  components: {},

  data() {
    return {};
  },

  computed: {},
  methods: {},

  mounted() {}

});
// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_metavue_type_script_lang_js_ = (article_metavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/article/components/article-meta.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_article_metavue_type_script_lang_js_,
  article_metavue_type_template_id_f74b3d08_render,
  article_metavue_type_template_id_f74b3d08_staticRenderFns,
  false,
  injectStyles,
  null,
  "192c2262"
  
)

/* harmony default export */ var article_meta = (component.exports);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./pages/article/components/article-comment.vue?vue&type=template&id=11d12dd0&scoped=true&
var article_commentvue_type_template_id_11d12dd0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{},[_vm._ssrNode("<form class=\"card comment-form\" data-v-11d12dd0><div class=\"card-block\" data-v-11d12dd0><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\" data-v-11d12dd0></textarea></div> <div class=\"card-footer\" data-v-11d12dd0><img"+(_vm._ssrAttr("src",_vm.article.author.image))+" class=\"comment-author-img\" data-v-11d12dd0> <button class=\"btn btn-sm btn-primary\" data-v-11d12dd0>Post Comment</button></div></form> "),(_vm.comments.length)?_vm._l((_vm.comments),function(comment,index){return _vm._ssrNode("<div class=\"card\" data-v-11d12dd0>","</div>",[_vm._ssrNode("<div class=\"card-block\" data-v-11d12dd0><p class=\"card-text\" data-v-11d12dd0>"+_vm._ssrEscape("\n          "+_vm._s(comment.body)+"\n        ")+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\" data-v-11d12dd0>","</div>",[_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
            name: 'profile',
            params: {
              username: comment.author.username,
            },
          }}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":comment.author.image}})]),_vm._ssrNode("\n         \n        "),_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
            name: 'profile',
            params: {
              username: comment.author.username,
            },
          }}},[_vm._v("\n          "+_vm._s(comment.author.username)+"\n        ")]),_vm._ssrNode(" <span class=\"date-posted\" data-v-11d12dd0>"+_vm._ssrEscape(_vm._s(_vm._f("date")(comment.author.createedAt,"MMM DD,YYYY")))+"</span>")],2)],2)}):_vm._ssrNode(("<div class=\"card\" data-v-11d12dd0><div class=\"card-block\" data-v-11d12dd0><p class=\"card-text\" data-v-11d12dd0>\n        With supporting text below as a natural lead-in to additional content.\n      </p></div> <div class=\"card-footer\" data-v-11d12dd0><a href class=\"comment-author\" data-v-11d12dd0><img src=\"http://i.imgur.com/Qr71crq.jpg\" class=\"comment-author-img\" data-v-11d12dd0></a>\n       \n      <a href class=\"comment-author\" data-v-11d12dd0>Jacob Schmidt</a> <span class=\"date-posted\" data-v-11d12dd0>Dec 29th</span> <span class=\"mod-options\" data-v-11d12dd0><i class=\"ion-edit\" data-v-11d12dd0></i> <i class=\"ion-trash-a\" data-v-11d12dd0></i></span></div></div>"))],2)}
var article_commentvue_type_template_id_11d12dd0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-comment.vue?vue&type=template&id=11d12dd0&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./pages/article/components/article-comment.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var article_commentvue_type_script_lang_js_ = ({
  name: "ArticleComments",
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  components: {},

  data() {
    return {
      comments: [] //文章列表

    };
  },

  computed: {},
  methods: {},

  async mounted() {
    const {
      data
    } = await Object(articles["e" /* getComments */])(this.article.slug);
    this.comments = data.comments;
  }

});
// CONCATENATED MODULE: ./pages/article/components/article-comment.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_commentvue_type_script_lang_js_ = (article_commentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/components/article-comment.vue



function article_comment_injectStyles (context) {
  
  
}

/* normalize component */

var article_comment_component = Object(componentNormalizer["a" /* default */])(
  components_article_commentvue_type_script_lang_js_,
  article_commentvue_type_template_id_11d12dd0_scoped_true_render,
  article_commentvue_type_template_id_11d12dd0_scoped_true_staticRenderFns,
  false,
  article_comment_injectStyles,
  "11d12dd0",
  "313e5312"
  
)

/* harmony default export */ var article_comment = (article_comment_component.exports);
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  components: {
    ArticleMeta: article_meta,
    ArticleComment: article_comment
  },

  head() {
    //此处是为了做meta SEO优化
    return {
      title: `${this.article.title} - Realword`,
      meta: [{
        hid: "description",
        //每个当前页面添加唯一标识
        name: "description",
        content: this.article.description //文章摘要

      }]
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
    error
  }) {
    const {
      slug
    } = params;
    const {
      data
    } = await Object(articles["c" /* getArticle */])(slug);
    const {
      article
    } = data;
    const md = new external_markdown_it_default.a();
    article.body = md.render(article.body);
    return {
      article
    };
  }

});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue



function article_injectStyles (context) {
  
  
}

/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  article_injectStyles,
  "6a5d1afb",
  "53136c9c"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map