import "./App.css";
import Navbar from "./components/Navbar";
import homeVideo from "./assets/homeVideo.mp4";
import { Button, HStack } from "@chakra-ui/react";
import { LuShoppingCart } from "react-icons/lu";
import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);

    return () => {
      clearInterval(key);
    };
  }, []);

  return (
    <section className="relative">
      <Navbar />

      {/* background video */}
      <video loop autoPlay muted className="w-full z-0 static">
        <source src={homeVideo} />
      </video>

      {/* section for information */}
      <section className="absolute top-[15%] w-full h-[3000px] rounded-t-4xl">
        {/* top information overlaying video */}
        <div className="homeMargin flex flex-col gap-8">
          <h1 className="titleSpacing">
            Green is the New Black <br />– Let’s Plant Together{" "}
          </h1>
          <h2>
            Discover the Magic of Plants and Learn <br /> with Bloomify.
          </h2>
          <div className="flex justify-between">
            <HStack>
              <Button colorPalette="gray" size="xl" rounded="xl">
                <LuShoppingCart />
                Shop Now
              </Button>
              <Button
                colorPalette="gray"
                variant="outline"
                size="xl"
                rounded="xl"
              >
                Learn More
              </Button>
            </HStack>
          </div>
        </div>

        {/* page info starts */}
        <div className="bg-white w-full rounded-t-3xl homePadding">
          <div className="flex flex-col gap-4">
            <p className="text-black"> {time} seconds have passed </p>
            <h3 className="text-black">
              {" "}
              Plants benefit the environment in numerous ways.{" "}
            </h3>
            <h3 className="text-zinc-300">
              Improve Air Quality. Prevent Soil Erosion. Combat Climate Change.
              Enhance Water Quality. Support Biodiversity
            </h3>
          </div>
        </div>
      </section>
    </section>
  );
}

export default App;
