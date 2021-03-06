import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '31316700-fce6-4988-8e2d-112759371390'
    },
    withCredentials: true
})

export const UsersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    }
}

export const HeaderAPI = {
    AuthMe() {
        return instance.get('auth/me')
            .then(response => response.data)
    }
}

export const ProfileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    }
}
