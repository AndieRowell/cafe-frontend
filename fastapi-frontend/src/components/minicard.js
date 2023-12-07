import Image from "next/image";

//props placeholder for dummy data api ---> should be {img, name, city, rating}?
function MiniCard({props}) {
    return (
        <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105">
        {/* left side of card */}
            <div>
                <Image src={img} layout="fill" classname="rounded-lg"/>
            </div>
        {/* right side of card */}
            <div>
                <h2>{name}</h2>
                <h3>{city}</h3>
            </div>
        {/* rating icons? */}
        </div>
    );
}

export default MiniCard;
