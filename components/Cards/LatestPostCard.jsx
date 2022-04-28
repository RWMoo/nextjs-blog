import React from "react";
import Badge from "../Globals/Buttons/Badge";
import Image from "next/image";
import Link from "next/link";

const LatestPost = (props) => {
  const { coverImage, title, excerpt, slug } = props;
  return (
    <Link href={`/blog/posts/${slug}`} passHref>
      <button>
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
          <div className="px-3 w-full text-body text-left">
            <h3 className=" line-clamp-2 text-sm font-display font-semibold">
              {title}
            </h3>
            <p className="font-body text-xs mt-1 line-clamp-2 ">{excerpt}</p>
          </div>
        </div>
      </button>
    </Link>
  );
};

export default LatestPost;
