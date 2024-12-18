import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
// import { Link } from "react-router-dom";

export function truncateTextHeading(text, count = 2) {
  const words = text.split(" ");
  return words.slice(0, count).join(" ");
}

export const NewsFeedCard = ({
  image,
  title,
  subTitle,
  date,
  author,
  description,
  id,
}: {
  image?: string;
  title?: string;
  subTitle?: string;
  date?: string;
  author?: string;
  description?: string;
  id?: string;
}) => {
  return (
    <div className="">
      <div className="flex flex-col gap-10 rounded-xl hover:shadow-xl transition-all duration-150 ease-in-out border border-slate-400 cursor-pointer">
        <div className="relative ">
          <img
            src={image ? image : getRandomImage()}
            className="object-cover w-full h-52 rounded-t-xl"
          />

          <span className="bg-red-600 text-slate-50 h-14 w-14 flex flex-col justify-center items-center rounded-full text-wrap absolute right-4 top-4 text-sm font-bold">
            <span>14</span>
            <span className="">AUG</span>
          </span>
        </div>
        <div className="px-10 h-[220px] bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border-slate-400 rounded-b-2xl ">
          <p className="text-2xl text-black/60 font-semibold text-left">
            {truncateTextHeading(title)}
          </p>
          {subTitle && (
            <h5 className="text-lg font-normal text-red-600 text-left pb-3">
              {subTitle}
            </h5>
          )}
          {description && (
            <p className="text-sm font-normal text-left pb-5 h-[100px] text-stone-700">
              {truncateTextHeading(description, 18)}...
            </p>
          )}
          <div className="flex gap-5 text-stone-500 pb-4 text-xs">
            <div className="flex gap-1 ">
              <Icon
                icon={"carbon:time"}
                className="text-center text-black/60 mt-0.5"
              />
              <span className="text-black/60">{date}</span>
            </div>
            <div className="flex gap-1">
              <Icon
                icon={"carbon:chat"}
                className="text-center text-black/60 mt-0.5"
              />
              <span className="text-black/60">Author : {author}</span>
            </div>
          </div>
          <div className="pb-6">
            <Link
              href={`/news/${id}`}
              className="bg-highlight flex justify-center items-center text-slate-50 px-3 py-1 text-sm text-left w-[50%] rounded-lg "
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

function getRandomImage() {
  const images = [
    "/aaa.jpg",
    "/about.png",
    "/alberta.jpg",
    "/british.jpg",
    "/canada.jpg",
    "/cost.jpg",
    "/business.jpg",
    "/experince.jpg",
    "/expressEntry.png",
    "/family.jpg",
    "/federalSkill.png",
    "/foru1.png",
    "/foru2.png",
    "immigrate.jpg",
    "immigration.png",
  ];
  return images[Math.floor(Math.random() * images.length)];
}
