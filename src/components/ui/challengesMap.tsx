import Glass from "@/lib/helpers";
import { Icon } from "@iconify/react/dist/iconify.js";

export const InfoCard = ({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) => {
  return (
    <Glass className="flex flex-col px-10 gap-3  ">
      <div className="flex flex-col ">
        <h5 className="text-4xl text-left text-highlight">{title}</h5>
      </div>
      <p className="text-xs text-left text-black/80">
        {description}
        <span className="pl-1 text-highlight">Read More ...</span>
      </p>
      <div className="w-full flex justify-start items-start mt-4">
        <div className=" flex flex-row gap-2 bg-highlight text-white py-1 shadow-xl px-4 rounded-md text-sm w-max">
          Find Out More
          <Icon icon={"carbon:arrow-right"} className="mt-1" />
        </div>
      </div>
    </Glass>
  );
};

export const challengesList = [
  {
    id: 1,
    title: "Criminality",
    description:
      "If someone has a criminal record or have committed certain offenses, he/she may be deemed inadmissible to Canada. In such cases, it&aposs important to determine if he/she is eligible for criminal rehabilitation, which can allow him/her to overcome past criminal convictions and gain entry into the country",
  },
  {
    id: 2,
    title: "Security",
    description:
      "National security and criminality-related issues can result in inadmissibility. Background checks and security screenings are conducted for all visa applicants",
  },
  {
    id: 3,
    title: "Financial",
    description:
      "If someone does not have the financial means to support himself/ herself during your stay in Canada, he/she may be deemed inadmissible. Demonstrating financial stability through proof of funds, a job offer, or sponsorship can help address this concern",
  },
  {
    id: 4,
    title: "Misrepresenting",
    description:
      "Providing false information or misrepresenting facts on a visa application can lead to inadmissibility. Honesty and transparency are key when applying to visit or immigrate to Canada",
  },
];
