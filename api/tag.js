//获取文章标签列表
import { request } from "../plugins/request"
export const getTags = () => {
    return request({
        method: "GET",
        url: "/api/tags",

    })
}