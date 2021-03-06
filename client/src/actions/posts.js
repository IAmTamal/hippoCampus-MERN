// these are the actions that will be called in the reducers

//import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getPosts = () => async (dispatch) => {

    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: '', payload: data });

    } catch (error) {
        console.log(error.message);
    }
};


// making a new post
// the await is making a request to the backend to add the post to the server
// then we dispatch the 'CREATE' action
export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

// export const updatePost = (id, post) => async (dispatch) => {
//     try {
//         const { data } = await api.updatePost(id, post);

//         dispatch({ type: UPDATE, payload: data });
//     } catch (error) {
//         console.log(error.message);
//     }
// };

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);

        dispatch({ type: 'LIKE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
        console.log(error.message);
    }
};