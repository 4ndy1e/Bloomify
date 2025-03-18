import { Button, Card, Image, Text } from "@chakra-ui/react";

interface info {
  name: string;
}

const PlantCard = ({ name }: info) => {
  return (
    <Card.Root overflow="hidden" className="bg-white w-[300px]">
      <Image
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Green double couch with wooden legs"
      />
      <Card.Body gap="2" className="bg-white">
        <h2 className="text-black"> {name} </h2>
        <Card.Description>Indoor</Card.Description>
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
