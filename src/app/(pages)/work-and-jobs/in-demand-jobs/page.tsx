"use client";
import React from "react";
import Container from "@/components/ui/container";
import Title from "@/components/ui/Title";
import HoverCard from "@/components/ui/hover-card";
import CallToAction from "@/app/revamp/revamp-components/cta";
import TreeViewList from "@/app/revamp/revamp-components/tree-view-list";

export default function InDemandJobs() {
  return (
    <>
      <Container>
        <Title
          title="We are hiring - JAL/LMIA available"
          subtitle="GREENTECH RESOURCES WORLDWIDECANADA"
          description={[
            `  GreenTech Resources Worldwide Canada&aposs partners currently
                have a demand for hiring foreign workers for the following
                positions. Please contact us to submit your application and
                arrange for interviews`,
          ]}
        />
        <div className="flex gap-2">
          {data.map((item, index) => (
            <div
              className="flex-1 flex flex-col gap-2 border rounded-md py-2"
              key={index}
            >
              <div
                key={index}
                className="flex flex-col gap-0 w-full px-6 relative z-10"
              >
                <h5 className="text-4xl text-left text-highlight">
                  {item.title}
                </h5>
              </div>
              <div className="flex gap-1.5 flex-col justify-start items-start w-full px-6 relative z-10">
                <TreeViewList items={item.list} />
              </div>
            </div>
          ))}
        </div>
      </Container>
      <Container>
        <Title subtitle="Jobs in high demand in Canada" title="Jobs" />
        <div className="grid lg:grid-cols-3 justify-center items-center md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full gap-10">
          {jobsConfig.map((item, index) => (
            <HoverCard
              key={index}
              className="h-80"
              color={item.color}
              icon={
                "streamline:entertainment-control-button-record-3-button-television-buttons-movies-record-tv-video-controls"
              }
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Container>
      <CallToAction />
    </>
  );
}

const data = [
  {
    id: 1,
    title: " Saskatchewan",
    image: "/aaa.jpg",
    list: [
      {
        id: 1,
        title: "Pharmacy technical assistant",
      },
      {
        id: 2,
        title: "Retail store supervisor",
      },
      {
        id: 3,
        title: "Retail store stocker",
      },
      {
        id: 4,
        title: "Admin assistant",
      },
      {
        id: 5,
        title: "Book keeper",
      },
      {
        id: 6,
        title: "Cooks and chefs",
      },
      {
        id: 7,
        title: "Food service supervisor",
      },
      {
        id: 8,
        title: "Restaurant manager",
      },
      {
        id: 9,
        title: "Shipper receiver",
      },
      {
        id: 10,
        title: "Sales professionals",
      },
    ],
  },
  {
    id: 2,
    title: " LMIA",
    image: "/aaa.jpg",

    list: [
      {
        id: 1,
        title: "Post office clerk",
      },
      {
        id: 2,
        title: "Beauty products sale professional",
      },
      {
        id: 3,
        title: "Cashiers",
      },
    ],
  },
  {
    id: 3,
    title: "Others",
    image: "/aaa.jpg",

    list: [
      {
        id: 1,
        title: "Truck drivers",
      },
      {
        id: 2,
        title: "Meat cutters",
      },
      {
        id: 3,
        title: "Meat processing plant worker",
      },
      {
        id: 4,
        title: "Welders",
      },
      {
        id: 5,
        title: "Construction helper",
      },
    ],
  },
];
const jobsConfig = [
  {
    id: 1,
    color: "bg-sky-400",
    title: "Hospitality and Tourism",
    description:
      "Chefs and Cooks, Hotel staffs, Tour guides, Travel agents and Event planners",
  },
  {
    id: 2,
    color: "bg-yellow-400",
    title: "Transportation and Logistics",
    description: "Truck drivers, Logistic staffs and Warehouse workers",
  },
  {
    id: 3,
    color: "bg-red-400",
    title: "Business and Management",
    description:
      "Business analysts, Management consultants, Project managers and Marketing specialist",
  },
  {
    id: 4,
    color: "bg-green-400",
    title: "Healthcare",
    description:
      "Doctors, Nurses, Pharmacists, Healthcare technicians and Medical laboratory technologists",
  },
  {
    id: 5,
    color: "bg-sky-400",
    title: "IT ",

    description:
      "Software developers, Data analysts, Cybersecurity experts, IT managers and Network engineers, ",
  },
  {
    id: 6,
    color: "bg-yellow-400",
    title: "Skilled Trades",
    description:
      "Electricians, Plumbers, Carpenters, Welders and Construction workers",
  },
  {
    id: 7,
    color: "bg-red-400",
    title: "Engineering",
    description:
      "Civil engineers, Mechanical engineers, Electrical engineers and Environmental engineers",
  },
  {
    id: 8,
    color: "bg-green-400",
    title: "Agriculture/ Agri-food",
    description:
      "Farm workers, Food processors, Agricultural inspectors and Farm managers",
  },
  {
    id: 9,
    color: "bg-sky-400",
    title: "Education",
    description:
      "Teachers, Professors, Educational administrators and School education professionals ",
  },
];
