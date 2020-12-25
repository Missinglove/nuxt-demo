exports.ids = [5];
exports.modules = {

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=70da4659&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\" data-v-70da4659>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-70da4659>","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\" data-v-70da4659>","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\" data-v-70da4659>"+_vm._ssrEscape(_vm._s(_vm.isLogin ? "Sign in" : "Sign up"))+"</h1> "),_vm._ssrNode("<p class=\"text-xs-center\" data-v-70da4659>","</p>",[(_vm.isLogin)?_c('nuxt-link',{attrs:{"to":"/register"}},[_vm._v("Need an account?")]):_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("Have an account?")])],1),_vm._ssrNode(" <ul class=\"error-messages\" data-v-70da4659>"+(_vm._ssrList((_vm.errors),function(messages,filed){return ((_vm._ssrList((messages),function(message,index){return ("<li data-v-70da4659>"+_vm._ssrEscape("\n              "+_vm._s(filed)+" "+_vm._s(message)+"\n            ")+"</li>")})))}))+"</ul> <form data-v-70da4659>"+((!_vm.isLogin)?("<fieldset class=\"form-group\" data-v-70da4659><input type=\"text\" placeholder=\"Your Name\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\" data-v-70da4659></fieldset>"):"<!---->")+" <fieldset class=\"form-group\" data-v-70da4659><input type=\"Email\" placeholder=\"Email\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\" data-v-70da4659></fieldset> <fieldset class=\"form-group\" data-v-70da4659><input type=\"password\" placeholder=\"Password\" minlength=\"8\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\" data-v-70da4659></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\" data-v-70da4659>"+_vm._ssrEscape("\n            "+_vm._s(_vm.isLogin ? "Sign in" : "Sign up")+"\n          ")+"</button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=70da4659&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(8);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./utils/request.js

const request = external_axios_default.a.create({
  baseURL: "https://conduit.productionready.io"
}); // request.interceptors.request.use(function(config) {
//     // Do something before request is sent
//     console.log(233641)
//         //设置token
//     config.headers.Authorization = `Token `
//     return config;
// }, function(error) {
//     // Do something with request error
//     return Promise.reject(error);
// });

/* harmony default export */ var utils_request = (request);
// EXTERNAL MODULE: ./plugins/request.js
var plugins_request = __webpack_require__(6);

// CONCATENATED MODULE: ./api/user.js

 //user

const login = data => {
  return Object(plugins_request["b" /* request */])({
    method: "POST",
    url: "/api/users/login",
    data
  });
};
const register = data => {
  return Object(plugins_request["b" /* request */])({
    method: "POST",
    url: "/api/users",
    data
  });
};
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
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

 //仅在客户端加载这个js第三方包

const Cookie =  false ? undefined : undefined;
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  name: "loginIndex",
  middleware: ["notauthenicated"],
  components: {},

  data() {
    return {
      user: {
        userbane: "",
        email: "",
        password: ""
      },
      errors: {}
    };
  },

  computed: {
    isLogin() {
      return this.$route.name === "login";
    }

  },
  methods: {
    async onSubmit() {
      try {
        const {
          data
        } = this.isLogin ? await login({
          user: this.user
        }) : register({
          user: this.user
        }); // console.log(data);
        //保存用户状态 仅仅是存放在内存中

        this.$store.commit("setUser", data.user);
        Cookie.set("user", data.user); //跳转路由到首页

        this.$router.push("/");
      } catch (error) {
        this.errors = error.response.data.errors;
      } //保存用户状态

    }

  },

  mounted() {}

});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "70da4659",
  "69b5e836"
  
)

/* harmony default export */ var pages_login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=5.js.map