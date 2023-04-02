
export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    accessToken: string;
    welcomeMessage: string,
}

export const login: (request: LoginRequest) => Promise<LoginResponse> = (request) => {
    return new Promise((resolve, reject) => {
        console.log('logging in with ', request);
        setTimeout(() => {
            if (request.password === 'password123')
                resolve({
                    accessToken: 'access_token',
                    welcomeMessage: `Welcome to Tedooo ${request.email}!`,
                });
            else
                reject(new Error('Invalid credentials'));
        }, 1000);
    })

}