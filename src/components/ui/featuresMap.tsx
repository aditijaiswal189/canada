import { Icon } from "@iconify/react/dist/iconify.js";

export const features = [
  {
    id: 1,
    title: "Profile Assessment",
    description:
      "Our RCIC and expert team can evaluate your qualifications, work experience, and personal circumstances to identify your potential jobs and employers in Canada.",
    icon: (
      <div className="w-full rounded-md flex justify-center items-center">
        <div className="w-[100px] h-[100px] relative">
          <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-r from-blue-100/40 to-cyan-300/40"></div>
          <img
            src="/electric.png"
            className="rounded-full w-full h-full"
            alt=""
          />
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Language Proficiency",
    description:
      "We can provide guidance on improving your language skills in English and/or French, as higher language test scores can significantly boost your CRS points.",

    icon: (
      <Icon
        icon="material-symbols-light:qr-code-2-rounded"
        className="text-6xl w-[54px]"
      />
    ),
  },
  {
    id: 3,
    title: "Educational credential assessment",
    description:
      "We can help you navigate the process of obtaining an ECA for your foreign educational credentials, which can add points to your CRS score.",
    icon: <Icon icon="oui:ml-regression-job" className="text-6xl w-[54px]" />,
  },
  {
    id: 4,
    title: "Secure a Job Offers",
    description:
      "We can assist in searching for job in Canada, which can be worth a substantial number of CRS points. We can also help you understand the requirements for a valid job offer, resume preparation and interview coaching.",
    icon: (
      <Icon
        icon="streamline:quality-education-solid"
        className="text-6xl w-[54px]"
      />
    ),
  },
  {
    id: 5,
    title: "Provincial Nominee Programs (PNPs)",
    description:
      "We can advise on PNPs and help you prepare for provincial nominations, which can add valuable points to your CRS score.",
    icon: (
      <Icon
        icon="streamline:quality-education-solid"
        className="text-6xl w-[54px]"
      />
    ),
  },
  {
    id: 6,
    title: "Claim extra score for family connection",
    description:
      "If you have a sibling in Canada who is a citizen or permanent resident, we can help you understand how to claim additional points for this family connection",
    icon: (
      <Icon
        icon="streamline:quality-education-solid"
        className="text-6xl w-[54px]"
      />
    ),
  },
];
