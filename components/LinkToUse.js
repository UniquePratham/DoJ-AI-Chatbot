// components/LinkToUse.js
import { Box, Heading, Button, Stack } from "@chakra-ui/react";
import Image from "next/image";

const LinkToUse = () => {
  return (
    <>
      <Box id="linktouse" py={20} textAlign="center">
        <Heading as="h2" size="xl" mb={8}>
          Try the AI Chatbot Now
        </Heading>
        <Button size="lg" colorScheme="teal">
          Use the EchoJusticeAI Chatbot
        </Button>
      </Box>
      <Box id="use-link" py={20} bg="gray.100" textAlign="center">
        <Stack
          direction={["column", "row"]}
          spacing={4}
          justify="center"
          align="center"
        >
          <Button
            colorScheme="teal"
            leftIcon={
              <Image
                src="/app-store.png"
                alt="App Store"
                width={500}
                height={300}
              />
            }
          >
            Download on the App Store
          </Button>
          <Button
            colorScheme="teal"
            leftIcon={
              <Image
                src="/play-store.png"
                alt="Google Play"
                width={500}
                height={300}
              />
            }
          >
            Get it on Google Play
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default LinkToUse;
