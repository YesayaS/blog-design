import Trending from "@/src/components/collections/trending/trending";
import Latest from "@/src/components/collections/latest/latest";
import Divider from "@/src/components/collections/lineDivider/lineDivider";
import BeAuthor from "@/src/components/collections/beAuthor/beAuthor";
import FollowSocials from "@/src/components/collections/followSocials/followSocials";

import "./home.scss";

export default function Home() {
  return (
    <div className="home">
      <Trending />
      <Divider />
      <Latest />
      <Divider />
      <BeAuthor />
      <Divider />
      <FollowSocials />
    </div>
  );
}
