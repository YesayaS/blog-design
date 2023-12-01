import CommentPost from "@/src/components/single-component/comment/comment";

import './commentSection.scss'

export default function Comment() {
    return (
        <div className="comment-section" id="comment-section" >
            <div className="comment-section__header">Comments</div>
            <div className="comment-section__comments">
                <CommentPost/>
                <CommentPost/>
            </div>
        </div>
    )
}