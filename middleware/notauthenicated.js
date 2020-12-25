export default function({ store, redirect }) {
    //逻辑判断是否有登录过
    if (store.state.user) {
        //如果没有登录直接跳转login页面
        return redirect('/')
    }
}