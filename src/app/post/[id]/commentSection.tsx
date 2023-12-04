import { useContext } from "react";

import CommentPost from "@/src/components/single-component/comment/comment";
import { PostContext } from "./page";

import "./commentSection.scss";

export default function Comment() {
  const post = useContext(PostContext);
  if (!post) return null;

  const postComments = post.comments;

  return (
    <div className="comment-section" id="comment-section">
      <div className="comment-section__header">Comments</div>
      <div className="comment-section__comments">
        {postComments.map((comment, i: number) => {
          return <CommentPost key={i} comment={comment} />;
        })}
      </div>
    </div>
  );
}
