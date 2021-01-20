// we handle the logic for action here

export default (posts = [], action) => {
  //posts = state and here we have just posts object
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return posts;

    default:
      return posts;
  }
};
