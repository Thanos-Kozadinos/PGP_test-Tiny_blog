import { FC } from "react";
import { IListPosts, IPost } from "../api";
import '../css/PostCard.css'

// type PostCardProps = {
//     data: IListPosts; 
//   }
type PostCardProps = {
  post: IPost;
}

  export const PostCard: FC<PostCardProps> = ({post}) => {
    return (
        <>
        <div className="card">
          <h2>{post.title}</h2>
          <div>{post.body}</div>
          <div>Reactions: {post.reactions}</div>
          <div>{post.tags.map(tag => <p>{tag}</p>)}</div>
        </div>
        </>
    )
}