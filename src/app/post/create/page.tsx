"use client";

import { ChangeEvent, createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import useRedirectUserExist from "@/src/hooks/useRedirectProtectedRoutes";
import ArticlePreview from "@@/app/post/[id]/article";
import useAuth from "@@/hooks/useAuth";
import { API_ENDPOINT } from "@@/utils/apis";
import fetchAPI from "@@/utils/fetchAPI";
import { ROUTES } from "@@/utils/routes";
import useRedirect from "@@/hooks/useRedirect";
import TextareaAutosize from "react-textarea-autosize";

import "./create.scss";

interface Post {
  title: string;
  sub_title: string;
  title_img: string;
  content: string;
  author: { username: string };
  publication_date: string;
}

export default function CreatePost() {
  useRedirectUserExist(false, ROUTES.SIGNIN);
  const router = useRouter();
  const { user, loadjwt } = useAuth();

  const [title, setTitle] = useState<string>("");
  const [subTitle, setSubTitle] = useState<string>("");
  const [titleImg, setTitleImg] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [isPublish, setisPublish] = useState<boolean>(true);

  const [author, setAuthor] = useState(user);
  const [currentDate, setCurrentDate] = useState(new Date().toISOString());

  const handleInputChange = (
    e: ChangeEvent<HTMLTextAreaElement>,
    setStateFunction: Function,
  ) => {
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

    const apiPath = "/post";
    const jwt = loadjwt();
    const requestOptions: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify(body),
    };

    const { response, error } = await fetchAPI(apiPath, requestOptions);
    if (error) console.error(error);
    if (response) {
      const id = response.id;
      router.push(`${ROUTES.POST}/${id}`);
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
            <TextareaAutosize
              name="title"
              onChange={(e) => handleInputChange(e, setTitle)}
              required
            />
          </label>
          <label htmlFor="subTitle">
            Sub Title :
            <TextareaAutosize
              name="title"
              onChange={(e) => handleInputChange(e, setSubTitle)}
              required
            />
          </label>
          <label htmlFor="titleImg">
            Image URL :
            <TextareaAutosize
              name="title"
              onChange={(e) => handleInputChange(e, setTitleImg)}
              required
            />
          </label>
          <label htmlFor="content">
            Article* :
            <TextareaAutosize
              name="content"
              onChange={(e) => handleInputChange(e, setContent)}
              minRows={3}
              required
            />
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
          {/* <ArticlePreview post={postPreview} /> */}
        </div>
      </div>
    </div>
  );
}
