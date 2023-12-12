import Image from "next/image";

function Hero() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lr:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      {/* <Image
        src="/assets/5644214.jpg"
        alt="Image by storyset on Freepik"
        layout="fill"
        objectFit="cover"
      /> */}

      <Image
        src="/assets/pexels-jason-villanueva-851555.jpg"
        alt="latte image from pexels"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left">
        <h1 className="text-left text-4xl sm:text-5xl text-white font-bold mb-4">
          Don&apos;t know what to get?
        </h1>
        <button className="text-yellow-800 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150 ">
          Try Me!
        </button>
      </div>

      {/* <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Don't know what to get?</p>
        <button className="text-green-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150 ">
          Try Me!
        </button>
      </div> */}
    </div>
  );
}

export default Hero;

//attribute --- <a href="https://www.freepik.com/free-vector/coffee-shop-concept-illustration_15635881.htm#query=cafe%20illustration&position=17&from_view=keyword&track=ais&uuid=d84551b3-ff38-430c-a8a4-01042397054a">Image by storyset</a> on Freepik
