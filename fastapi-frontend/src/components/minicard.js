import Image from "next/image";

//props placeholder for dummy data api ---> should be {img, name, city, rating}?
function MiniCard({ img, name, city }) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      {/* left side of card */}
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      {/* right side of card */}
      <div>
        <h2>{name}</h2>
        <h3 className="text-gray-500">{city}</h3>
      </div>
      {/* rating icons? */}
    </div>
  );
}

export default MiniCard;
