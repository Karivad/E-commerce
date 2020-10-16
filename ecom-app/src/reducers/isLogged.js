const initialState = {
    isUserLogged: false,
    email: '',
    id: null,
    image: '',
    token: ''

}

const isLogged = (state = initialState, action) => {
    switch(action.type) {
        case 'USER_LOGIN':
            return {
            isUserLogged: true,
            email: action.email, //On récupère ça dans le jwt.decode
            id: action.id,          //On récupère ça dans le jwt.decode
            image: action.image,//On récupère ça dans le jwt.decode
            token: action.token,
            
        }
        default:
            return state
    
    }
}

export default isLogged;