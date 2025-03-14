import { Button, Card, Image, Text } from "@chakra-ui/react";

interface info {
  name: string;
  description: string;
}

function CardImage({ name, description }: info) {
  return (
    <Card.Root maxW="sm" overflow="hidden" className="bg-white">
      {/* <Image
        {image}
      /> */}
      <div className="bg-green-100 w-full h-64"></div>
      <Card.Body gap="2" className="bg-white text4xl">
        <h4 className="text-black">{name}</h4>
        <Card.Description>{description}</Card.Description>
      </Card.Body>
    </Card.Root>
  );
}

export default CardImage;
