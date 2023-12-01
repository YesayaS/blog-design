import Hero from "@/src/components/single-component/hero/hero";

import "./otherArticle.scss";

export default function OtherArticle() {
  return (
    <div className="o-article" id="other-article">
      <div className="o-article__header">Other Article</div>
      <div className="o-article__heros">
        <Hero />
        <Hero />
      </div>
    </div>
  );
}
