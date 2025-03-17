import "./App.css";
import Navbar from "./components/Navbar";
import homeVideo from "./assets/homeVideo.mp4";
import { Button, HStack } from "@chakra-ui/react";
import { LuShoppingCart } from "react-icons/lu";
import { useEffect } from "react";
import CardImage from "./components/CardImage";

function App() {
  useEffect(() => {
    const key = import.meta.env.VITE_API_KEY;
    fetch(`https://perenual.com/api/v2/species-list?key=${key}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error status: {response.status}`);
        }
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="relative">
      <Navbar />

      {/* background video */}
      <video loop autoPlay muted className="w-full z-0 static">
        <source src={homeVideo} />
      </video>

      {/* section for information */}
      <section className="absolute top-[15%] w-full h-[6000px] rounded-t-4xl">
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
            {/* <p className="text-black"> {time} seconds have passed </p> */}
            <h3 className="text-black">
              {" "}
              Plants benefit the environment in numerous ways.{" "}
            </h3>
            <h3 className="text-zinc-300">
              Improve Air Quality. Prevent Soil Erosion. Combat Climate Change.
              Enhance Water Quality. Support Biodiversity
            </h3>

            {/* image section */}
            <div className="flex gap-4 imageMargin">
              <div className="bg-green-300 h-50 w-1/5 rounded-2xl"> </div>
              <div className="bg-green-400 h-50 w-2/5 rounded-2xl"> </div>
              <div className="bg-green-500 h-50 w-2/5 rounded-2xl"> </div>
            </div>

            <section className="sectionMargin">
              <div className="flex justify-between">
                <h3 className="text-black">
                  {" "}
                  Bring nature home <br />- discover your perfect plant today
                </h3>
                <p className="text-black text-right">
                  {" "}
                  hundreds of plants to choose from <br /> of all shapes, sizes,
                  and colors
                </p>
              </div>
              <div className="flex gap-8 justify-center imageMargin">
                <CardImage
                  name="Indoor Plants"
                  description="Plants suited for low light and controlled environments. Examples: Snake Plant, Peace Lily, Spider Plant, Monstera."
                />
                <CardImage
                  name="Outdoor Plants"
                  description="Hardy plants that thrive in open spaces. Examples: Bird of Paradise, Jade Plant, Cat Palm, English Ivy."
                />
                <CardImage
                  name="Succlents/Cacti"
                  description="Water-storing plants ideal for dry conditions. Examples: Echeveria, Jade Plant."
                />
              </div>
              <div className="flex justify-center">
                <Button
                  colorPalette="gray"
                  variant="surface"
                  size="xl"
                  rounded="full"
                >
                  Pick a plant that fits
                </Button>
              </div>
            </section>
          </div>

          <div>
            <h3 className="text-black"> Connect with Nature </h3>
            <section className="imageMargin flex flex-col gap-8">
              <div className="w-full bg-green-900 h-[500px] rounded-2xl"> </div>
              <div className="flex gap-8">
                <div className="w-1/3 bg-green-500 h-50 rounded-2xl"></div>
                <div className="w-1/3 bg-green-400 h-50 rounded-2xl"></div>
                <div className="w-1/3 bg-green-300 h-50 rounded-2xl"></div>
              </div>
            </section>
          </div>
        </div>

        {/* Connect with nature */}
      </section>
    </section>
  );
}

export default App;
