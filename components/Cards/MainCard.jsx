import Image from "next/image";
import FabButton from "../Globals/Buttons/FabButton";
import { FaShare, FaHeart } from "react-icons/fa";
import Badge from "../Globals/Buttons/Badge";
import { formatGraphCMSDate } from "../../utils";
const MainCard = (props) => {
  const { coverImage, minutes, date, title, excerpt } = props;
  return (
    <div className="p-4 pb-6 bg-secondary mt-14 rounded-sm">
      <div className="relative w-full h-44 shadow-md">
        <Image
          alt={coverImage.alt}
          layout="fill"
          className="rounded-sm"
          objectPosition="center"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={coverImage.url}
          src={coverImage.url}
        />
      </div>
      <div className="px-2 text-body">
        <div className="flex space-x-3 mt-4 text-sm font-semibold">
          <p>{formatGraphCMSDate(date)}</p>
          <p>{minutes} minute read</p>
        </div>
        <h3 className="mt-3 text-xl line-clamp-2 font-display font-semibold">
          {title}
        </h3>
        <p className="font-body text-sm mt-3 line-clamp-2 ">{excerpt}</p>
      </div>
    </div>
  );
};

export default MainCard;
