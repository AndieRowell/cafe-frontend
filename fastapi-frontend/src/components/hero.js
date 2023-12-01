import Image from "next/image";

function Hero() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lr:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="/assets/5644214.jpg"
        alt="Image by storyset on Freepik"
        layout="fill"
        objectFit="cover"
      />
      <h1>hero test</h1>
    </div>
  );
}

export default Hero;

//attribute --- <a href="https://www.freepik.com/free-vector/coffee-shop-concept-illustration_15635881.htm#query=cafe%20illustration&position=17&from_view=keyword&track=ais&uuid=d84551b3-ff38-430c-a8a4-01042397054a">Image by storyset</a> on Freepik
