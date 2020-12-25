import { request } from "../plugins/request"
//user
export const getArticles = params => {
    return request({
        method: "GET",
        url: "/api/articles",
        params
    })
}

export const getFeedArticles = params => {
    return request({
        method: "GET",
        url: "/api/articles/feed",
        params,
        // headers: {
        //     Authorization: `Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTMwMzUzLCJ1c2VybmFtZSI6ImhhbmRzb21lMTIyIiwiZXhwIjoxNjEzODg2NTgwfQ.W9OY4mN9cUqTQ4chuKj8oT6mXQFqcmI3euEhh7Q-WBg`
        // }
    })
}

export const addFavorite = (slug) => {
    return request({
        method: "POST",
        url: `/api/articles/${slug}/favorite`,
    })
}

export const delFavorite = (slug) => {
    return request({
        method: "DELETE",
        url: `/api/articles/${slug}/favorite`,
    })
}

export const getArticle = (slug) => {
    return request({
        method: "GET",
        url: `/api/articles/${slug}`,
    })
}

export const getComments = (slug) => {
    return request({
        method: "GET",
        url: `/api/articles/${slug}/comments`,
    })
}