// make use index.js API (data fetched from DB)
// import everything from actions in API
import * as api from "../api/index.js";

// actions creators (function that returns actions )
// a function that returns another function(async) to do an asynchronous call
export const getPosts = () => async (dispatch) => {
  try {
    // a fetch action
    const { data } = await api.fetchPosts();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    // make POST api request to our backend
    const { data } = await api.createPost(post);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    // response
    const { data } = await api.updatePost(id, post);
    // that returns the updated post

    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
