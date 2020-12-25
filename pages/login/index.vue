<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{ isLogin ? "Sign in" : "Sign up" }}</h1>
          <p class="text-xs-center">
            <nuxt-link to="/register" v-if="isLogin"
              >Need an account?</nuxt-link
            >
            <nuxt-link to="/login" v-else>Have an account?</nuxt-link>
          </p>

          <ul class="error-messages">
            <template v-for="(messages, filed) in errors">
              <li v-for="(message, index) in messages" :key="index">
                {{ filed }} {{ message }}
              </li>
            </template>
          </ul>

          <form @submit.prevent="onSubmit">
            <fieldset v-if="!isLogin" class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Your Name"
                required
                v-model="user.username"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="Email"
                placeholder="Email"
                v-model="user.email"
                required
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
                v-model="user.password"
                minlength="8"
                required
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              {{ isLogin ? "Sign in" : "Sign up" }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "../../utils/request";
import { login, register } from "../../api/user";
//仅在客户端加载这个js第三方包
const Cookie = process.client ? require("js-cookie") : undefined;
export default {
  name: "loginIndex",
  middleware: ["notauthenicated"],
  components: {},
  data() {
    return {
      user: { userbane: "", email: "", password: "" },
      errors: {},
    };
  },
  computed: {
    isLogin() {
      return this.$route.name === "login";
    },
  },
  methods: {
    async onSubmit() {
      try {
        const { data } = this.isLogin
          ? await login({
              user: this.user,
            })
          : register({ user: this.user });
        // console.log(data);
        //保存用户状态 仅仅是存放在内存中
        this.$store.commit("setUser", data.user);

        Cookie.set("user", data.user);

        //跳转路由到首页
        this.$router.push("/");
      } catch (error) {
        this.errors = error.response.data.errors;
      }

      //保存用户状态
    },
  },
  mounted() {},
};
</script>

<style lang='css' scoped>
</style>