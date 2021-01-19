import axios from "axios";
// axios is to make a easy way to use API Making HTTP requests to fetch or save data
const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
