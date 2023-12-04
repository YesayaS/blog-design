import { IoEllipsisVertical } from "react-icons/io5";
import he from "he";

import "./comment.scss";

export default function Comment({ comment }) {
  const { author, date, content } = comment;
  const decodedComment = he.decode(content);

  return (
    <div className="comment">
      <div className="comment__detail">
        <div className="comment__author">{author.username}</div>
        <div className="comment__date">{date}</div>
        <div className="comment__content">{decodedComment}</div>
      </div>
      <div className="comment__setting">
        <button>
          <IoEllipsisVertical />
        </button>
      </div>
    </div>
  );
}
