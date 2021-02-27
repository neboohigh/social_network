import * as axios from "axios";

import API_KEY from '../apikey.js'


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": API_KEY}
})


export const userAPI = {
    getUsers(selectedPage = 1, pageSize = 10) {
        return instance.get(`users?page=${selectedPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },

}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatusMessage(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatusMessage(status) {
        return instance.put(`profile/status`, {status})
    }
}

export const authAPI = {
    checkAuth() {
        return instance.get('auth/me')
            .then(response => response.data)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}
