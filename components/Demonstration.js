import { Box, Heading, Text, Button } from "@chakra-ui/react";

const Demonstration = () => {
  return (
    <Box id="demonstration" py={20} bg="white" textAlign="center">
      <Heading mb={10}>See JusticeAI in Action</Heading>
      <Text mb={10}>Watch a demonstration or try the chatbot yourself.</Text>
      <Button colorScheme="teal" size="lg">Start Demonstration</Button>
    </Box>
  );
};

export default Demonstration;
