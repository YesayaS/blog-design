"use client";

import { createContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";

import Article from "./article";
import CommentSection from "./commentSection";
import OtherArticle from "./otherArticle";
import Divider from "@/src/components/collections/lineDivider/lineDivider";
import NotFound from "@/src/app/not-found";
import Loading from "@/src/app/loading";
import fetchAPI from "@@/utils/fetchAPI";

import "./page.scss";

export const PostContext = createContext(null);

export default function Post() {
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("" as any);
  const { id } = useParams();

  useEffect(() => {
    const options = { method: "GET", "Content-Type": "application/json" };
    const fetchPost = async () => {
      const { response, error } = await fetchAPI(`/post/${id}`, options);
      if (error) {
        setError(error);
        setLoading(false);
      }

      if (response) {
        setPostData(response.post);
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (error) {
    return <NotFound />;
  }

  if (loading) return <Loading />;

  return (
    <div className="article-post">
      <PostContext.Provider value={postData}>
        <Article post={postData} />
        <Divider />
        <CommentSection />
      </PostContext.Provider>
    </div>
  );
}
