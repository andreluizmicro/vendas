const initialState = {
    name: '',
    email: ''
};

const UserReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_NAME':
            return { ...state, name: action.payload.name };
        case 'SET_EMAIL':
            return { ...state, email: action.payload.email }; 
        default:
            break;     
    }

    return state;
};

export default UserReducer;