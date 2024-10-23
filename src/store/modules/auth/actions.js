export default {
    async login(context, payload) {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAU66ZABSrO2mt8ZK4hFhufy0xasD7HAL8', {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        });
        const responseData = await response.json();
        if (!response.ok) {
            console.log(responseData); // In chi tiết lỗi từ API
            const error = new Error(responseData.error.message || 'Fail to authenticate');
            throw error;
        }

        console.log('>>> check authentication login', responseData);
        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn
        });
    },
    async signup(context, payload) {

        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAU66ZABSrO2mt8ZK4hFhufy0xasD7HAL8', {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        });
        const responseData = await response.json();
        if (!response.ok) {
            console.log(responseData); // In chi tiết lỗi từ API
            const error = new Error(responseData.error.message || 'Fail to authenticate');
            throw error;
        }


        console.log('>>> check authentication', responseData);
        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn
        });

    },
};