import ArticlePost from "./post";
import CommentSection from "./commentSection";
import Divider from "@/src/components/collections/lineDivider/lineDivider";

import './page.scss'

export default function Post() {
  return (
    <div className="article-post">
      <ArticlePost />
      <Divider />
      <CommentSection/>
      <Divider />
    </div>
  );
}
