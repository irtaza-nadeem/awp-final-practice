export const addPosts = (data) => {
    return {
        type: 'ADD_POSTS',
        data
    }
};

export const seePost = (data) => {
    return {
        type: 'SEE_POSTS',
        data
    }
};

export const editPost = (data) => {
    return {
        type: 'EDIT_POST',
        data
    }
};