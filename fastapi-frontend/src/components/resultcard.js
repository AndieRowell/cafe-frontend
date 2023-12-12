import React from "react";
import Image from "next/image";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

//this component will take in props for search results - businesses
//destructuring props - {}

function ResultCard({ id, img, city, name, rating, description, tags }) {
  return (
    <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      {/* div for image */}
      <div className="relative h-24 w-40  md:h-52 md:w-80 flex-shrink-0">
        {/* //image size inside is relative to the container that is wrapped around it */}
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          {/* flex puts it into a row - justify-between spaces out in between */}
          <p>{city}</p>
          <OutlineHeartIcon className="h-7 cursor-pointer" />
        </div>

        <h4 className="text-xl">{name}</h4>

        <div className="border-b w-10 pt-2" />
        {/* little line to show separation */}

        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-yellow-400" />
            {rating}
          </p>

          {/* place in more props here */}
          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2"></p>
            <p className="text-right font-extralight"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
