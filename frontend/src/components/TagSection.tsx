import { FC } from "react";
import { IListPosts } from "../api";
import { PostCard } from "./PostCard";

type TagSectionProps = {
    data: IListPosts; 
    tag: string;
  }


export const TagSection: FC<TagSectionProps> = ({data, tag}) => {
    return (
        <>

            {data.posts.filter(post => post.tags.includes(tag)).map(post => <PostCard post={post}/>)}
        </>
    )
}