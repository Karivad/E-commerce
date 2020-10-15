export const userLogin = (data) => {
    return {
        type: 'USER_LOGIN',
        email: data.email,
        id: data.id,
        image: data.image,
        token: data.token,
    }
}