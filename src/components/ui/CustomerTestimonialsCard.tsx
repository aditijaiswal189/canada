import { CardTitle, Description } from "@/app/revamp/revamp-components/heading";
import Glass from "@/lib/helpers";
import { Icon } from "@iconify/react/dist/iconify.js";
export const CustomerTestimonialsCard = ({
  name,
  rating,
  description,
  id,
}: {
  // title?: string;
  name?: string;
  rating?: number;
  description?: string;

  id?: number; // Add `id` here to match the prop type
}) => {
  return (
    <div className="flex flex-col px-10 bg-green-600  py-12 relative ">
      <div className="flex flex-col ">
        <div className="absolute -top-7 left-10 w-14 h-14 rounded-full border-2 border-green-600 bg-white flex justify-center items-center">
          <Icon icon={"carbon:quotes"} className=" text-highlight text-3xl " />
        </div>
        <div className="flex flex-row gap-1">
          <CardTitle className="text-4xl text-left text-white pr-5">
            {name}
          </CardTitle>
          <Icon
            icon={"carbon:star-filled"}
            className="mt-1.5 text-yellow-600 shadow-xl "
          />
          <Icon
            icon={"carbon:star-filled"}
            className="mt-1.5 text-yellow-600 shadow-xl "
          />
          <Icon
            icon={"carbon:star-filled"}
            className="mt-1.5 text-yellow-600 shadow-xl "
          />
          <Icon
            icon={"carbon:star-filled"}
            className="mt-1.5 text-yellow-600 shadow-xl "
          />
          <Icon
            icon={"carbon:star-filled"}
            className="mt-1.5 text-yellow-600 shadow-xl "
          />
        </div>
        {/* <p className="text-sm text-left text-black/70">
              {truncateTextHeading(item.subtitle)}
            </p> */}
      </div>
      <Description className="text- text-left text-white">
        {description}
      </Description>
      <div className="w-full flex justify-start items-start mt-4"></div>
      <div className="absolute -bottom-6 right-10 rotate-180 w-14 h-14 rounded-full border-2 border-green-600  bg-white flex justify-center items-center">
        <Icon icon={"carbon:quotes"} className=" text-highlight text-3xl " />
      </div>
    </div>
  );
};
