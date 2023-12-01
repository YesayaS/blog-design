import Link from "next/link";
import Image from "next/image";

import "./beAuthor.scss";

export default function BeAuthor() {
  return (
    <div className="be-author">
      <h1 className="be-author__detail">
        <p className="be-author__detail__head">Want to be an author?</p>
        <p className="be-author__detail__sub-head">
          Lorem Ipsum Lorem impsum Lorem Ipsum lorem ipsum
        </p>
        <button className="be-author__detail__button button-hover">
          Click Here
        </button>
      </h1>
      <div className="be-author__img">
        <Image
          src="https://images.pexels.com/photos/753695/pexels-photo-753695.jpeg"
          alt="pen writting on paper"
          fill
          style={{ objectFit: "cover" }}
          sizes="50vw"
        />
      </div>
    </div>
  );
}
