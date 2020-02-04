import { addPosts, seePost } from './actions';

export const getPosts = (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => dispatch(addPosts(json)))
};

export const getPost = (dispatch, id) => {
    fetch('https://jsonplaceholder.typicode.com/posts/'+id).then(
        response => response.json()
    ).then(json => dispatch(seePost(json)))
};

export const addPost = (dispatch, data) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'This it title',
            body: 'This is body',
            userId: 1,
            id: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => console.log(json))
};

export const editPost = (dispatch, data, id) => {
    fetch('https://jsonplaceholder.typicode.com/posts/'+id, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(response => response.json())
        .then(json => console.log(json))
};