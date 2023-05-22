import { FC, useEffect, useState } from "react";
import { IListPosts, getPostFormApi } from "../api";


export const MainBlog: FC = () => {
    const [data, setData] = useState<IListPosts>();
    
    const getData = async () => {
        const postsFromApi = await getPostFormApi();
        setData(postsFromApi);
      }
      useEffect(() => {
        getData();
      }, []);  
    return (
        <>
            <div>
                {data?.posts[0].title}
            </div>
        </>
    )
}