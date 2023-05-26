import { FC, useState } from "react";
import { IListPosts } from "../api";
import { PostCard } from "./PostCard";
import '../css/TagSections.css'

type TagSectionProps = {
    data: IListPosts; 
    uniqueTags: string[];
    option: string;
  }

export const TagSection  = ({data,uniqueTags, option}:TagSectionProps) => {

    const [showTagSection, setShowTagSection] = useState(true);
    const handleButtonClick = () => {
        setShowTagSection(!showTagSection);
    };
    const [selectedOption, setSelectedOption] = useState(option);
    // const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //     setSelectedOption(event.target.value);
    //   };
    
    
    return (
        <>
            <div className="dropdownMenus">
                <select value={selectedOption} onChange={(event) => setSelectedOption(event.target.value)}>
                    {uniqueTags.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                    ))}
                </select>
                    <button onClick={handleButtonClick}>&#8681;</button>
            </div>
            <div className="cards">
                {showTagSection &&  data.posts.filter(post => post.tags.includes(selectedOption)).map(post => <PostCard post={post}/>)}
            </div>
        </>
    )
}