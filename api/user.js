import axios from "axios";

import { request } from "../plugins/request"
//user
export const login = (data) => {
    return request({
        method: "POST",
        url: "/api/users/login",
        data
    })
}

export const register = (data) => {
    return request({
        method: "POST",
        url: "/api/users",
        data
    })
}