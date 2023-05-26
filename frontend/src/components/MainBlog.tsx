import { FC, useEffect, useState } from "react";
import { IListPosts, getPostFormApi } from "../api";
import { TagSection } from "./TagSection";
import '../css/MainBlog.css'

export const MainBlog: FC = () => {
    const defaulData:IListPosts = {
        posts: [{id: 0,
            title: "a",
            body: "a",
            userId: 0,
            tags: ["history","fiction", "crime"],
            reactions: 0}]
        } 
    const [data, setData] = useState<IListPosts>(defaulData);
   
    const getData = async () => {
        const postsFromApi = await getPostFormApi();
        setData(postsFromApi);
    }

    const uniqueTags = Array.from(new Set(data.posts.flatMap(post => post.tags)));  
    const initialOptions = uniqueTags.slice(5);

      useEffect(() => {
          getData();
        }, []);  
        
    return (
        <>
        <div className="gallery">
        {initialOptions.map(option => 
            <div className="tagSection">       
                {<TagSection data={data} uniqueTags={uniqueTags} option={option}/>}
            </div>)}
        </div>    
        </>
    )
}
