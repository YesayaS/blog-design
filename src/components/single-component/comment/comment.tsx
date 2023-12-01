import { IoEllipsisVertical } from "react-icons/io5";

import "./comment.scss";

export default function Comment() {
  return (
    <div className="comment">
      <div className="comment__detail">
        <div className="comment__author">author</div>
        <div className="comment__date">2 Nov 23</div>
        <div className="comment__content">Much wow</div>
      </div>
      <div className="comment__setting">
        <button>
          <IoEllipsisVertical />
        </button>
      </div>
    </div>
  );
}
