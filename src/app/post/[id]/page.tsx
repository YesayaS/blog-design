import Article from "./article";
import CommentSection from "./commentSection";
import OtherArticle from "./otherArticle";
import Divider from "@/src/components/collections/lineDivider/lineDivider";

import "./page.scss";

export default function Post() {
  return (
    <div className="article-post">
      <Article />
      <Divider />
      <CommentSection />
      <Divider />
      <OtherArticle />
    </div>
  );
}
