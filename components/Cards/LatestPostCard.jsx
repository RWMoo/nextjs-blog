import React from "react";
import Badge from "../Globals/Buttons/Badge";
import Image from "next/image";

const LatestPost = (props) => {
  const { coverImage, title, excerpt } = props;
  return (
    <div className="flex items-center space-x-2 p-4 bg-secondary">
      <div>
        <div className="relative h-20 w-20 shadow-md">
          <Image
            alt=""
            layout="fill"
            className="rounded-md"
            src={coverImage.url}
            objectPosition="center"
            placeholder="blur"
            blurDataURL={coverImage.url}
            objectFit="cover"
          />
        </div>
      </div>
      <div className="px-2 w-full text-primary">
        <h3 className=" line-clamp-2 text-sm font-display font-semibold">
          {title}
        </h3>
        <p className="font-body text-xs mt-1 line-clamp-2 ">{excerpt}</p>
      </div>
    </div>
  );
};

export default LatestPost;
