"use client";

import { ROUTES } from "@@/utils/routes";
import fetchAPI from "@@/utils/fetchAPI";
import useAuth from "@@/hooks/useAuth";
import useRedirectProtectedRoutes from "@@/hooks/useRedirectProtectedRoutes";
import { useEffect, useState } from "react";
import Link from "next/link";
import he from "he";

import "./myPost.scss";

export default function MyPost() {
  const decode = (text: string) => he.decode(text);

  useRedirectProtectedRoutes(false, ROUTES.SIGNIN);
  const { user, loadjwt } = useAuth();

  const [posts, setPosts] = useState<Array<any> | null>(null);

  useEffect(() => {
    const jwt = loadjwt();
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      };
      const { response, error } = await fetchAPI("/mypost", options);

      if (response) setPosts(response.posts);
    };
    fetchData();
  }, [loadjwt]);

  const deletePost = async (id: string) => {
    const jwt = loadjwt();
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    };
    const { response, error } = await fetchAPI(`/post/${id}`, options);
    if (response) {
      window.location.reload();
    }
  };

  if (!posts) return <p>load</p>;

  return (
    <div className="my-post">
      <p className="my-post__header">My Posts</p>
      {posts.map((post: any, i: number) => {
        return (
          <div
            key={i}
            className={`my-post__card button-hover ${
              post.is_published ? "" : "not-publish"
            }`}
          >
            <Link href={`/post/${post._id}`}>
              <div className="my-post__data truncate">
                <p className="my-post__data__title truncate">
                  {decode(post.title)}
                </p>
                <p className="my-post__data__sub-title truncate">
                  {decode(post.sub_title)}
                </p>
                <p className="my-post__data__publish-date truncate">
                  {post.publication_date}
                </p>
                <p className="my-post__data__is-publish truncate">
                  {post.is_published ? "Publish" : "Not Publish"}
                </p>
              </div>
            </Link>
            <div className="my-post__modifier">
              <Link
                href={`/post/edit/${post._id}`}
                className="my-post__modifier__button"
              >
                Edit
              </Link>
              <Link href={``} className="my-post__modifier__button">
                <button onClick={() => deletePost(post._id)}>Delete</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
