"use client";

import Link from "next/link";

import CardList from "@/src/components/single-component/cardList/cardList";

import "./latest.scss";
import { useEffect, useState } from "react";
import fetchAPI from "@/src/utils/fetchAPI";

export default function Latest() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("" as any);

  useEffect(() => {
    const options = { method: "GET", "Content-Type": "application/json" };
    const fetchPost = async () => {
      const { response, error } = await fetchAPI(`/posts`, options);
      if (error) {
        setError(error);
        setLoading(false);
      }

      if (response) {
        setPosts(response.posts);
        setLoading(false);
      }
    };
    fetchPost();
  }, []);

  if (!posts) return <p>load</p>;

  return (
    <div className="latest">
      <h1 className="latest__title">Latest</h1>
      <div className="latest__card-list">
        {posts.map((post: any, i: number) => {
          return <CardList key={i} postData={post} />;
        })}
      </div>
      <Link href="/">
        <button className="button__see-more button-hover">
          See More Articles
        </button>
      </Link>
    </div>
  );
}
