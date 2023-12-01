import "./post.scss";

import Image from "next/image";

export default function Post() {
  return (
    <div className="post">
      <div className="post__header">Post Header</div>
      <div className="post__sub-header">Post sub Header</div>
      <div className="post__author">Post author</div>
      <div className="post__publish-date">2 Nov 23</div>
      <div className="post__img">
        <Image
          src="https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg?auto=compress&cs=tinysrgb&h=350"
          alt="Picture of a house"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
      </div>
      <div className="post__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
        scelerisque ante in enim efficitur fringilla. Proin ullamcorper erat vel
        metus hendrerit, ut bibendum velit varius. Integer sed risus nec nunc
        tincidunt ultrices. Sed sed risus ac lacus facilisis sodales eu in sem.
        Vivamus consequat turpis eu ex pharetra, in varius lectus fermentum.
        Mauris accumsan leo eu velit vestibulum, id vehicula justo commodo.
        Quisque sed velit at ligula suscipit tincidunt. Nulla facilisi. Etiam
        quis justo eget quam malesuada consequat. Nunc eget justo ac quam
        vulputate mattis. Suspendisse potenti. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas. Ut
        lacinia enim in quam euismod, vel sollicitudin justo fermentum. Duis vel
        nunc sed metus tincidunt fermentum id a est. Vestibulum fermentum arcu
        id quam accumsan, eu euismod leo varius. In hac habitasse platea
        dictumst. Curabitur vehicula, nunc vel fringilla venenatis, justo felis
        cursus lacus, id aliquet sem eros vel sapien. Aenean aliquam, felis non
        euismod tempus, ligula odio cursus tortor, vitae cursus tortor mi vel
        elit. Aenean fringilla dapibus sagittis. Sed fermentum risus ac odio
        feugiat, ut luctus justo tincidunt.
      </div>
    </div>
  );
}
