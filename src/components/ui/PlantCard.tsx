import { Button, Card, Image, Text } from "@chakra-ui/react";

interface info {
  name: string;
  image: string;
  scienctific_name: string;
}

const PlantCard = ({ name, image, scienctific_name }: info) => {
  return (
    <Card.Root overflow="hidden" className="bg-white w-[300px]">
      <Image
        src={image}
        alt="Green double couch with wooden legs"
        className="w-full aspect-square"
      />
      <Card.Body gap="2" className="bg-white">
        <h2 className="text-black"> {name} </h2>
        <Card.Description>{scienctific_name}</Card.Description>
        <Text
          textStyle="2xl"
          fontWeight="medium"
          letterSpacing="tight"
          mt="2"
          className="text-black"
        >
          $450
        </Text>
      </Card.Body>
    </Card.Root>
  );
};

export default PlantCard;
