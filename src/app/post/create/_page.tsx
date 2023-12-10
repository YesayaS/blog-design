"use client";

import { createContext, useEffect, useState } from "react";
import { redirect } from "next/navigation";
// import { DateTime } from "luxon";

import ArticlePreview from "@@/app/post/[id]/article";
import useAuth from "@@/hooks/useAuth";

import "./create.scss";

interface Post {
  title: string;
  sub_title: string;
  title_img: string;
  content: string;
  author: { username: string };
  publication_date: string;
}

// function getCurrentDateISO(): string {
//   return new Date().toISOString();
// }

export default function CreatePost() {
  // const router = useRouter();
  const { token, user } = useAuth();

  const [textareaHeight, setTextareaHeight] = useState("auto");

  const [title, setTitle] = useState<string>("");
  const [subTitle, setSubTitle] = useState<string>("");
  const [titleImg, setTitleImg] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [isPublish, setisPublish] = useState<boolean>(true);

  // const [currentDate, setCurrentDate] = useState<string>(
  //   now.toFormat("MMM dd, yyyy"),
  // );

  // if (!user) {
  //   return redirect("/signin");
  // }

  const postPreview = {
    title: title,
    sub_title: subTitle,
    title_img: titleImg,
    content: content,
    author: { username: user.username },
    publication_date: "zzz", // CHANGE HERE
  };

  if (!postPreview) return <></>;

  const handleInputChange = (e: any, setStateFunction: Function) => {
    setTextareaHeight("auto");
    setTextareaHeight(`${e.target.scrollHeight}px`);

    if (e.target.tagName.toLowerCase() === "textarea") {
      // Calculate the number of rows based on the content
      const rows = e.target.value.split("\n").length;
      // Set the rows attribute of the textarea
      e.target.rows = rows;
    }

    if (e.target.type === "checkbox") {
      setisPublish(e.target.checked);
      console.log(isPublish);
      return;
    }
    setStateFunction(e.target.value);
  };

  async function submitPost(e: any) {
    e.preventDefault();

    const body = {
      title: title,
      sub_title: subTitle,
      title_img: titleImg,
      content: content,
      ispublished: isPublish,
    };

    const requestOptions: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token},`,
      },
      body: JSON.stringify(body),
    };

    try {
      const response = await fetch("http://localhost:3000/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Handle successful response here
      const result = await response.json();
      console.log(result);
    } catch (error) {
      // Handle fetch errors or response errors here
      console.error("Fetch error:", error);
    }
  }

  return (
    <div className="create-post">
      <div className="create-post__creator">
        <h1 className="create-post__creator__header">Write article</h1>
        <form
          onSubmit={(e) => submitPost(e)}
          className="create-post__creator__form container-border"
        >
          <label htmlFor="title">
            Title* :
            <textarea
              name="title"
              id=""
              cols={30}
              rows={1}
              onChange={(e) => handleInputChange(e, setTitle)}
              required
            ></textarea>
          </label>
          <label htmlFor="subTitle">
            Sub Title :
            <textarea
              name="subTitle"
              id=""
              cols={30}
              rows={1}
              onChange={(e) => handleInputChange(e, setSubTitle)}
            ></textarea>
          </label>
          <label htmlFor="titleImg">
            Image URL :
            <textarea
              name="titleImg"
              id=""
              cols={30}
              rows={1}
              onChange={(e) => handleInputChange(e, setTitleImg)}
            ></textarea>
          </label>
          <label htmlFor="content">
            Article* :
            <textarea
              name="content"
              id=""
              cols={30}
              rows={1}
              onChange={(e) => handleInputChange(e, setContent)}
              required
            ></textarea>
          </label>
          <label htmlFor="isPublished">
            publish
            <input
              type="checkbox"
              name="isPublished"
              id=""
              checked={isPublish}
              onChange={(e) => handleInputChange(e, setisPublish)}
            ></input>
          </label>
          <button>Submit</button>
        </form>
      </div>
      <div className="create-post__border"></div>
      <div className="create-post__preview-wrapper">
        <h1 className="create-post__preview-wrapper__header">Preview</h1>
        <div className="create-post__preview-wrapper container-border">
          <ArticlePreview post={postPreview} />
        </div>
      </div>
    </div>
  );
}
