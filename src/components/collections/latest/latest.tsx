import Link from "next/link"

import CardList from "@/src/components/single-component/cardList/cardList";

import './latest.scss'

export default function Latest() {
  return (
    <div className="latest">
        <h1 className="latest__title">Latest</h1>
        <div className="latest__card-list">
          <Link href='/'><CardList/></Link>
          <Link href='/'><CardList/></Link>
          <Link href='/'><CardList/></Link>
          <Link href='/'><CardList/></Link>
        </div>
        <Link href='/'><button className="button__see-more button-hover">See More Articles</button></Link>
    </div>
  );
}
