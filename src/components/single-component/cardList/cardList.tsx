import Image from "next/image";
import Link from "next/link"

import "./cardList.scss";

export default function CardList() {
  return (
    <Link href='/post/1'>
      <div className="card-list">
        <div className="card-list__img">
          <Image
            src="https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg?auto=compress&cs=tinysrgb&h=350"
            alt="Picture of a house"
            fill
            style={{ objectFit: "cover" }}
            sizes="100vw, (min-width: 768px) 33vw"
          />
        </div>
        <div className="card-list__detail">
          <p className="card-list__detail__author">Author Name</p>
          <p className="card-list__detail__header truncate">
            Article Heading : Lorem Ipsum Lorem Ipsum Lorem Ipsum
          </p>
          <p className="card-list__detail__sub-header truncate">
            Article Sub Heading : Lorem Ipsum Lorem Ipsum Lorem Ipsum{" "}
          </p>
          <p className="card-list__detail__publish-date">2 Nov 23</p>
        </div>
      </div>
    </Link>
  );
}
