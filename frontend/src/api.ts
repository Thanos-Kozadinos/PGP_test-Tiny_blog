export interface IPost {
    id: number;
    title: string;
    body: string;
    userId: number;
    tags: string[];
    reactions: number;
}
export interface IListPosts {
    posts: IPost[];
}

export const getPostFormApi = async () => {
    const postsApi: IListPosts = await fetch(
      "https://dummyjson.com/posts")
     .then((response) => response.json())
     .then((data) => data);
   return postsApi;
 };