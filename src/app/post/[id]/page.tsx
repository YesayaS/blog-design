import ArticlePost from "./post";
import CommentSection from "./commentSection";
import Divider from "@/src/components/collections/lineDivider/lineDivider";

export default function Post() {
  return (
    <div>
      <ArticlePost />
      <Divider />
      <CommentSection/>
      <Divider />
    </div>
  );
}
