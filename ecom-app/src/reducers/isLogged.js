const initialState = {
    isUserLogged: false,
    email: '',
    id: null,
    image: ''

}

const isLogged = (state = initialState, action) => {
    switch(action.type) {
        case 'USER_LOGIN':
            return {
            isUserLogged: true
        }
        default:
            return {
                ...state
            }
    }
}

export default isLogged;