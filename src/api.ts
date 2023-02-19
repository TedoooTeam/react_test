export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
    accessToken: string;
}

export const login: (request: LoginRequest) => Promise<LoginResponse> = (request) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (request.password === '123')
                resolve({ accessToken: 'access_token' });
            else
                reject(new Error('Invalid credentials'));
        }, 1000);
    })

}