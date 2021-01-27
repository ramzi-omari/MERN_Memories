// we handle(implement) the logic for actions here

export default (posts = [], action) => {
  //posts = state and here we have just posts object
  switch (action.type) {
    case "DELETE":
      // keep all the post except the one where the _id == action.payload
      return posts.filter((post) => post._id !== action.payload);
    case "UPDATE":
    case "LIKE":
      // return action.payload is the updated post (check with === id)
      // or return post without update
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      // spread prev posts and then place the new one
      return [...posts, action.payload];

    default:
      return posts;
  }
};
