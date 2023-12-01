import Image from "next/image";

import './hero.scss'

export default function HeroPreview() {
    return (
      <div className="hero-preview">
          <div className="hero-preview__img">
              <Image
                src="https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg?auto=compress&cs=tinysrgb&h=350"
                alt="Picture of a house"
                fill
                style={{objectFit:"cover"}}
                sizes="100vw, (min-width: 768px) 33vw"
                priority={true}
              />
          </div>
          <div className="hero-preview__detail">
              <div className="hero-preview__detail__author">Author Name</div>
              <div className="hero-preview__detail__header truncate">Article Heading : Lorem Ipsum Lorem Ipsum Lorem Ipsum</div>
              <div className="hero-preview__detail__sub-header truncate">Article Sub Heading : Lorem Ipsum Lorem Ipsum Lorem Ipsum</div>
              <div className="hero-preview__detail__publish-date">2 Nov 23</div>
          </div>
      </div>
    )
  }
  