"use client"
import { Projects } from "@/type";
import Image from "next/image";
import { useState } from "react";

interface ProjectListProps {
  data: Projects[];
}

const ProjectList: React.FC<ProjectListProps> = ({ data }) => {
  const [showDetails, setShowDetails] = useState<number | null>(null);

  const toggleShow = (index: number) => {
    setShowDetails((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      {data.map((item, index) => (
        <div
          className="flex flex-col justify-between items-center bg-slate-600 p-2 rounded-xl"
          key={index}
        >
          <Image src={item.img} alt="Project Image" width={100} height={100} className="w-full" />
          <h3 className="font-bold text-xl">{item.title}</h3>
          <p className="text-justify">{item.subtitle}</p>

          <button
            className=" bg-slate-800 text-yellow-300 rounded-xl p-1"
            onClick={() => toggleShow(index)}
          >
            <p className="animate-pulse">{showDetails === index ? "Hide" : "See Details..."}</p>
          </button>

          {showDetails === index && (
            <>
              <p>{item.details}</p>
              <p className="">
                <b>Status: </b>
                {item.status}
              </p>
              <div className="">
                <b>Gallery: </b>
                <div className="grid grid-cols-2">
                  {item.photoSlider.map((photoUrl, index) => (
                    <Image src={photoUrl} alt="Slider" width={100} height={100} key={index} className="w-max" />
                  ))}
                </div>
              </div>
              <b>Unnecessary Details</b>
              <div className="justify-center text-justify items-center">
                <p>
                  <b>Id: </b>
                  {item._id}
                </p>
                <p>
                  <b>Created At: </b>
                  {item.createdAt}
                </p>
                <p>
                  <b>Updated At: </b>
                  {item.updatedAt}
                </p>
                <p>
                  <b>Source: </b>
                  {item.urls}
                </p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
