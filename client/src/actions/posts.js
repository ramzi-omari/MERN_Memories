// make use index.js API (data fetched from DB)
// import everything from actions in API
import * as api from "../api/index.js";

// actions creators (function that returns actions )
// a function that returns another function(async) to do an asynchronous call
export const getPosts = () => async (dispatch) => {
  try {
    // an action
    const { data } = await api.fetchPosts();

    dispatch({ type: "FETCH_ALL", payload: [] });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    // make POST api request to our backend
    const { data } = await api.createPost(post);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
