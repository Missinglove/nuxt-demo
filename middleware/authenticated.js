//验证是否登陆过的中间件 如果用户没有登录的话就不能访问某些页面
//以前是通过路由守卫做的现在不能这么玩儿了

//哪个页面使用就在哪个页面调用中间件即可
export default function({ store, redirect }) {
    //逻辑判断是否有登录过
    if (!store.state.user) {
        //如果没有登录直接跳转login页面
        return redirect('/login')
    }
}