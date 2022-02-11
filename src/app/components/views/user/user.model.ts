export interface User {
    id: string
    login: string
}

export interface UserDetails {
    id: string
    login: string
    html_url: string
    created_at: Date
}

export interface UserRepos {
    id: string
    name: string
    html_url: string
}
