import "./App.css";
import Navbar from "./components/Navbar";
import BackgroundImage from "./assets/shopBackground.jpeg";
import PlantCard from "./components/ui/PlantCard";
import { useState, useEffect } from "react";

function Shop() {
  interface Plant {
    common_name: string;
    scientific_name: string[];
    id: number;
    default_image: {
      original_url: string;
    };
  }

  const [plants, setPlants] = useState<Plant[]>([]);

  useEffect(() => {
    const key = import.meta.env.VITE_API_KEY;
    fetch(`https://perenual.com/api/v2/species-list?key=${key}&indoor=1`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error status: {response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setPlants(data.data);
        // console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(plants);
  // console.log(plants[0].id);

  return (
    <section className="relative">
      <Navbar />

      {/* background video */}
      <img src={BackgroundImage} className="z-0" />

      {/* section for information */}
      <section className="absolute top-[15%] w-full rounded-t-4xl z-10">
        {/* top information overlaying video */}
        <div className="flex justify-center items-center h-50">
          <h1 className="titleSpacing">Find your plant today</h1>
        </div>

        {/* page info starts */}
        <div className="bg-white w-full rounded-t-3xl homePadding">
          <div className="flex flex-col gap-4">
            {/* <p className="text-black"> {time} seconds have passed </p> */}
            <h3 className="text-black"> Shop for your plant below. </h3>
            <h2 className="text-black">- Nature's beauty in every leaf</h2>
          </div>

          {/* plant cards */}
          <section className="flex flex-wrap gap-8 sectionMargin">
            {plants.map((plant) => (
              <PlantCard
                key={plant.common_name}
                name={plant.common_name}
                image={
                  plant.default_image
                    ? plant.default_image.original_url
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRorjiu6kdoDf87VefRm_EPhAHK0ZpXUAq3Ew&s"
                }
                scienctific_name={
                  plant.scientific_name && plant.scientific_name.length >= 1
                    ? plant.scientific_name[0]
                    : "Unknown"
                }
              />
            ))}
          </section>
        </div>
      </section>
    </section>
  );
}

export default Shop;
