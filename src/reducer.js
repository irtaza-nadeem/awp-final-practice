export const INITIAL_STATE = {
    posts: [],
    post: []
};

export const rootReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_POSTS':
            return {
                ...state,
                posts: action.data
            };
        case 'SEE_POSTS':
            return{
                ...state,
                posts: action.data
            };
        case 'EDIT_POST':
            return{
                ...state,
                posts: action.data
            };
        default:
            return state
    }
};