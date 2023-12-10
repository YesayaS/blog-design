"use client";

import { createContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";

import Article from "./article";
import CommentSection from "./commentSection";
import OtherArticle from "./otherArticle";
import Divider from "@/src/components/collections/lineDivider/lineDivider";
import NotFound from "@/src/app/not-found";
import Loading from "@/src/app/loading";

import "./page.scss";

export const PostContext = createContext(null);

export default function Post() {
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("" as any);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/post/${id}`);

        if (!response.ok) {
          setError(response.status);
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setPostData(data.post);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (error === 404) {
    return <NotFound />;
  }

  if (loading) return <Loading />;

  return (
    <div className="article-post">
      <PostContext.Provider value={postData}>
        <Article post={postData} />
        <Divider />
        <CommentSection />
        <Divider />
        <OtherArticle />
      </PostContext.Provider>
    </div>
  );
}
