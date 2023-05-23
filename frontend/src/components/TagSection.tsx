import { FC, useState } from "react";
import { IListPosts } from "../api";
import { PostCard } from "./PostCard";

type TagSectionProps = {
    data: IListPosts; 
    uniqueTags: string[];
  }

export const TagSection: FC<TagSectionProps> = ({data, uniqueTags}) => {

    const [showTagSection, setShowTagSection] = useState(true);
    const handleButtonClick = () => {
        setShowTagSection(!showTagSection);
    };
    const [selectedOption, setSelectedOption] = useState(uniqueTags[Math.floor(Math.random() * uniqueTags.length)]);

    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
      };
    return (
        <>
            <div className="dropdownMenus">
                <select value={selectedOption} onChange={handleOptionChange}>
                    {uniqueTags.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                    ))}
                </select>
                    <button onClick={handleButtonClick}>&#8595;</button>
                </div>
            {showTagSection &&  data.posts.filter(post => post.tags.includes(selectedOption)).map(post => <PostCard post={post}/>)}
        </>
    )
}