import Image from "next/image";
import Link from "next/link";

import "./cardList.scss";
import { decode } from "@/src/utils/utils";

export default function CardList({ postData }: { postData: any }) {
  const { _id, title, sub_title, title_img, publication_date, author } =
    postData;

  const isValidImageUrl =
    title_img && /^(ftp|http|https):\/\/[^ "]+$/.test(decode(title_img));

  return (
    <Link href={`/post/${_id}`}>
      <div className="card-list">
        {isValidImageUrl && (
          <div className="card-list__img">
            <Image
              src={decode(title_img)}
              alt=""
              fill
              style={{ objectFit: "cover" }}
              sizes="100vw, (min-width: 768px) 33vw"
            />
          </div>
        )}
        <div className="card-list__detail">
          <p className="card-list__detail__author">{decode(author.username)}</p>
          <p className="card-list__detail__header truncate">{decode(title)}</p>
          <p className="card-list__detail__sub-header truncate">
            {decode(sub_title)}
          </p>
          <p className="card-list__detail__publish-date">{publication_date}</p>
        </div>
      </div>
    </Link>
  );
}
