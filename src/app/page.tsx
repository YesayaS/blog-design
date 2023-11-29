import Hero from "@/src/components/collections/trending/trending";
import Divider from "@/src/components/collections/lineDivider/lineDivider";

import './home.scss'

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <Divider />
    </div>
  );
}
