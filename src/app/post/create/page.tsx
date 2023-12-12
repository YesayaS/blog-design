"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import useRedirectUserExist from "@/src/hooks/useRedirectProtectedRoutes";
import ArticlePreview from "@@/app/post/[id]/article";
import useAuth from "@@/hooks/useAuth";
import fetchAPI from "@@/utils/fetchAPI";
import { ROUTES } from "@@/utils/routes";
import TextareaAutosize from "react-textarea-autosize";
import ToggleSwitch from "@@/components/single-component/toggleSwitch/toggleSwitch";

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

  const [author, setAuthor] = useState(user || { username: "" });
  const [currentDate, setCurrentDate] = useState(new Date().toISOString());

  const [postPreview, setPostPreview] = useState({
    title: title,
    sub_title: subTitle,
    title_img: titleImg,
    content: content,
    author: author,
    publication_date: currentDate,
  });

  useEffect(() => {
    setPostPreview({
      title: title,
      sub_title: subTitle,
      title_img: titleImg,
      content: content,
      author: author,
      publication_date: currentDate,
    });
  }, [title, subTitle, titleImg, content, author, currentDate]);

  const handleInputChange = (e: any, setStateFunction: Function) => {
    if (e.target.type === "checkbox") {
      setStateFunction(e.target.checked as any);
    } else {
      setStateFunction(e.target.value as any);
    }
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
            />
          </label>
          <label htmlFor="titleImg">
            Image URL :
            <TextareaAutosize
              name="title"
              onChange={(e) => handleInputChange(e, setTitleImg)}
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

          <label htmlFor="content">
            {" "}
            Publish :
            <ToggleSwitch
              checked={isPublish}
              onChange={(e: any) => handleInputChange(e, setisPublish)}
            />
          </label>
          <button className="button-hover">Submit</button>
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
