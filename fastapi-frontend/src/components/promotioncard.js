import React from "react";
import Image from "next/image";
import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants";

function PromotionCard({ id, img, title, description, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w[300px]">
        <Image
          src="/assets/pexels-polina-tankilevitch-4109745.jpg"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button className="text-sm text-white bg-yellow-900 px-4 py-2 rounded-lg mt-5">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default PromotionCard;
