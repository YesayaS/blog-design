"use client";

import { createContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";

import Article from "./article";
import CommentSection from "./commentSection";
import OtherArticle from "./otherArticle";
import Divider from "@/src/components/collections/lineDivider/lineDivider";

import "./page.scss";

export const PostContext = createContext(null);

export default function Post() {
  const [postData, setPostData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/post/${id}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setPostData(data.post);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="article-post">
      <PostContext.Provider value={postData}>
        <Article />
        <Divider />
        <CommentSection />
        <Divider />
        <OtherArticle />
      </PostContext.Provider>
    </div>
  );
}
