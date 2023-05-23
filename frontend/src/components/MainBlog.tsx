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

    // const [selectedOption, setSelectedOption] = useState(uniqueTags[Math.floor(Math.random() * uniqueTags.length)]);

      useEffect(() => {
          getData();
        }, []);  
        
    return (
        <>
            <div>       
                {<TagSection data={data} uniqueTags={uniqueTags}/>}
            </div>
            <div>       
                {<TagSection data={data} uniqueTags={uniqueTags}/>}
            </div>
            <div>       
                {<TagSection data={data} uniqueTags={uniqueTags}/>}
            </div>
            <div>       
                {<TagSection data={data} uniqueTags={uniqueTags}/>}
            </div>
            <div>       
                {<TagSection data={data} uniqueTags={uniqueTags}/>}
            </div>
            
        </>
    )
}
