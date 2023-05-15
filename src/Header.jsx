import { Button, Flex, Heading, Image } from "@chakra-ui/react";
import picture from "./assets/domina_el_terreno.jpg";

export default function () {
  const header = (
    <Flex
      width="90%"
      height="90%"
      flexDirection="column"
      justifyContent="center"
      gap="30px"
      backgroundColor="rgba(0, 0, 0, 0.356)"
      backgroundSize="cover"
    >
      <Heading
        textAlign="center"
        width="100%"
        letterSpacing="10px"
        fontSize={{ base: "7xl", lg: "7xl", sm: "5xl" }}
        fontWeight="300"
        color="white"
      >
        DOMINA EL TERRENO
      </Heading>
      <Flex
        width="100%"
        display="flex"
        flexDirection={{ base: "row", lg: "row", sm: "column" }}
        alignItems="center"
        justifyContent="center"
        gap="10px"
      >
        <Button
          width={{ base: "30%", lg: "30%", sm: "80%" }}
          size="lg"
          letterSpacing="5px"
          fontWeight="400"
          variant="outline"
          color="white"
          borderRadius="0px"
          _hover={{ color: "black", backgroundColor: "white" }}
        >
          VER DETALLES
        </Button>

        <Button
          margin="0px"
          width={{ base: "30%", lg: "30%", sm: "80%" }}
          size="lg"
          letterSpacing="5px"
          fontWeight="400"
          variant="outline"
          color="white"
          borderRadius="0px"
          _hover={{ color: "black", backgroundColor: "white" }}
        >
          VER VIDEO
        </Button>
      </Flex>
    </Flex>
  );
  return (
    <Flex
      width="100%"
      height="400px"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      {header}
      <Image
        src={picture}
        width="90%"
        height="90%"
        position="absolute"
        zIndex="-1"
      />
    </Flex>
  );
}
