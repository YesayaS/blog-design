import Trending from "@/src/components/collections/trending/trending";
import Latest from "@/src/components/collections/latest/latest";
import Divider from "@/src/components/collections/lineDivider/lineDivider";

import './home.scss'

export default function Home() {
  return (
    <div className="home">
      <Trending />
      <Divider />
      <Latest/>
      <Divider />
    </div>
  );
}
