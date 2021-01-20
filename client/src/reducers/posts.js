// we handle the logic for action here

export default (posts = [], action) => {
  //posts = state and here we have just posts object
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      // spread prev posts and then place the new one
      return [...posts, action.payload];

    default:
      return posts;
  }
};
