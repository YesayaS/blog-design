import HeroPreview from "@/src/components/preview/heroPreview";
import Link from 'next/link'

import './trending.scss'

export default function Trending() {
  return (
    <div className="trending">
        <h1 className="trending__title">Trending</h1>
        <div className="trending__hero">
          <Link href='/'><HeroPreview /></Link>
          <Link href='/'><HeroPreview /></Link>
          <Link href='/'><HeroPreview /></Link>
        </div>
    </div>
  );
}
