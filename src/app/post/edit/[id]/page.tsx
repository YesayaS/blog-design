"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import he from "he";

import useRedirectUserExist from "@/src/hooks/useRedirectProtectedRoutes";
import ArticlePreview from "@@/app/post/[id]/article";
import useAuth from "@@/hooks/useAuth";
import fetchAPI from "@@/utils/fetchAPI";
import { ROUTES } from "@@/utils/routes";
import TextareaAutosize from "react-textarea-autosize";
import NotFound from "@/src/app/not-found";
import ToggleSwitch from "@@/components/single-component/toggleSwitch/toggleSwitch";

import "./edit.scss";

interface Post {
  title: string;
  sub_title: string;
  title_img: string;
  content: string;
  author: { username: string };
  publication_date: string;
}

export default function CreatePost() {
  const decode = (text: string) => he.decode(text);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("" as any);

  useRedirectUserExist(false, ROUTES.SIGNIN);

  const router = useRouter();
  const { user, loadjwt } = useAuth();

  const { id } = useParams();

  const [title, setTitle] = useState<string>("");
  const [subTitle, setSubTitle] = useState<string>("");
  const [titleImg, setTitleImg] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [isPublish, setisPublish] = useState<boolean>(true);

  const [author, setAuthor] = useState(user || { username: "" });
  const [currentDate, setCurrentDate] = useState(new Date().toISOString());

  useEffect(() => {
    const options = { method: "GET", "Content-Type": "application/json" };
    const fetchPost = async () => {
      const { response, error } = await fetchAPI(`/post/${id}`, options);
      if (error) {
        setError(error);
        setLoading(false);
      }

      if (response) {
        const post = response.post;
        setTitle(post.title);
        setSubTitle(post.sub_title);
        setContent(post.content);
        setisPublish(post.is_published);
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

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
      is_published: isPublish,
    };

    const apiPath = `/post/${id}`;
    const jwt = loadjwt();
    const requestOptions: RequestInit = {
      method: "PUT",
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

  if (error) {
    return <NotFound />;
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
              value={decode(title)}
              onChange={(e) => handleInputChange(e, setTitle)}
              required
            />
          </label>
          <label htmlFor="subTitle">
            Sub Title :
            <TextareaAutosize
              name="subTitle"
              value={decode(subTitle)}
              onChange={(e) => handleInputChange(e, setSubTitle)}
            />
          </label>
          <label htmlFor="titleImg">
            Image URL :
            <TextareaAutosize
              name="titleImg"
              value={decode(titleImg)}
              onChange={(e) => handleInputChange(e, setTitleImg)}
            />
          </label>
          <label htmlFor="content">
            Article* :
            <TextareaAutosize
              name="content"
              value={decode(content)}
              onChange={(e) => handleInputChange(e, setContent)}
              minRows={3}
              required
            />
          </label>

          <label htmlFor="publish">
            Publish :
            <ToggleSwitch
              checked={isPublish}
              onChange={(e: any) => handleInputChange(e, setisPublish)}
            />
          </label>
          <button className="button-hover">Update</button>
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
