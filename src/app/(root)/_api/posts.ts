import axios from "axios";

export const getPostsData = async (id: number) => {
  const apiUrl = "http://localhost:3000";
  const {data} = await axios.get(`${apiUrl}/api/posts/${id}`);
  return data;
};