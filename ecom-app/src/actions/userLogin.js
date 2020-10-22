
export const userLogin = (data) => {
    return {
        type: 'USER_LOGIN',
        email: data.email,
        id: data.id,
        image: data.image,
        token: data.token,
    }

}
export const userSignOut = () => {
    return {type: 'USER_SIGNOUT'}
}

export const updateUser = (data) => {
    return {
        type: 'UPDATE_USER',
        image: data.image,
        email: data.email
    }
}