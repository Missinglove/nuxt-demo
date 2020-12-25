const cookieParser = process.server ? require("cookieparser") : undefined

//在服务端渲染期间运行都是同一个实例
//防止数据冲突，必须把state定义陈一个函数，返回数据对象
export const state = () => {
    return {
        //当前用户的登陆状态
        user: null
    }
};
export const mutations = {
    setUser(state, user) {
        state.user = user
    }
}
export const actions = {
    //nuxtServerInit服务端渲染自动调用
    //作用;初始化容器数据，传递数据给客户端使用
    nuxtServerInit({ commit }, { req }) {
        //定义初始用户
        let user = null
            //逻辑判断请求头中中是否有cookie
        if (req.headers.cookie) {
            //将请求头中的cookie解析处理
            const parsed = cookieParser.parse(req.headers.cookie);
            try {
                //通常cookie是JSON对象 继续解析处理
                user = JSON.parse(parsed.user)
            } catch (err) {}
        };
        //调用commit方法保存用户cookie
        commit('setUser', user)
    }
}

export const getters = {}