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
            tags: ["history","fiction"],
            reactions: 0}]
        } 
    const [data, setData] = useState<IListPosts>(defaulData);
    const [showTagSection, setShowTagSection] = useState(true);
    
    const getData = async () => {
        const postsFromApi = await getPostFormApi();
        setData(postsFromApi);
    }
    
    const handleButtonClick = () => {
        setShowTagSection(!showTagSection);
    };
    const uniqueTags = Array.from(new Set(data.posts.flatMap(post => post.tags)));  

    const [selectedOption, setSelectedOption] = useState(uniqueTags[Math.floor(Math.random() * uniqueTags.length)]);
    
    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
      };
    
      
      useEffect(() => {
          getData();
        }, []);  
        
    return (
        <>
            <div>
                <div className="dropdownMenus">
                <select value={selectedOption} onChange={handleOptionChange}>
                    {uniqueTags.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                    ))}
                </select>
                    <button onClick={handleButtonClick}>Show Tag Section</button>
                </div>
                {showTagSection && <TagSection data={data} tag={selectedOption}/>}
            </div>
            
        </>
    )
}
