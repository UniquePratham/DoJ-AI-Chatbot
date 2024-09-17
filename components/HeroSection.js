import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Button,
  keyframes,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const spin = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

const HeroSection = () => {
  return (
    <Box
      position="relative"
      py={20}
      px={10}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      minHeight="100vh"
      backgroundImage="url('/bg.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
    >
      {/* Transparent Blue Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.7)"
      />

      {/* Left Section - Hero Image with Floating Effect */}
      <Flex
        direction="column"
        align="flex-start"
        maxW="300px"
        zIndex={2}
        position="relative"
      >
        <Box position="relative" display="inline-block">
          {/* Ellipse Shadow */}
          <Box
            position="absolute"
            bottom="-10px"
            left="50%"
            transform="translateX(-50%)"
            width="70%"
            height="20px"
            bg="rgba(0, 0, 0, 0.3)"
            borderRadius="50%"
            filter="blur(10px)"
            zIndex={1}
          />

          <Image
            src="/hero.png"
            alt="EchoJusticeAI Hero Icon"
            width={300}
            height={300}
            quality={90}
            as={motion.img}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            zIndex={2}
            animation={`${spin} 10s linear infinite`}
            // Test without hover effects first
            whileHover={{ y: -10, rotateY: 15 }}
          />
        </Box>
      </Flex>

      {/* Center Section - Title and Text */}
      <Flex
        direction="column"
        align="center"
        textAlign="left"
        maxW="600px"
        zIndex={2}
        position="relative"
      >
        <Stack
          spacing={4}
          as={Box}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          component={motion.div}
        >
          <Heading
            fontSize="5xl"
            color="white"
            as={motion.h1}
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            textShadow="2px 2px 5px rgba(0,0,0,0.3)"
          >
            Navigate Your Legal Path with EchoJusticeAI
          </Heading>
          <Text
            color="gray.200"
            fontSize="xl"
            as={motion.p}
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            textShadow="2px 2px 5px rgba(0,0,0,0.3)"
          >
            Your AI-powered companion for legal guidance.
          </Text>
          <Text
            color="gray.300"
            fontSize="lg"
            mt={5}
            maxW="500px"
            as={motion.p}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            textShadow="2px 2px 5px rgba(0,0,0,0.3)"
          >
            Discover efficient solutions to your legal inquiries with ease and
            confidence. Let JusticeBot guide you every step of the way.
          </Text>
          <Button
            colorScheme="teal"
            size="md"
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            boxShadow="lg"
            bg="white"
            color="teal.500"
            transition="background-color 0.3s ease"
            _hover={{ bg: "teal.500", color: "white" }}
            width="200px"
            mt={6}
          >
            Explore Now
          </Button>
        </Stack>
      </Flex>

      {/* Right Section - Chatbot Interface */}
      <Box
        mt={10}
        ml={10}
        as={motion.div}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        position="relative"
        display="flex"
        flexDirection="column"
        alignItems="center"
        zIndex={2}
      >
        <Box
          as={motion.div}
          whileHover={{
            rotate: [0, 5, -5, 5, 0],
            transition: { duration: 0.5 },
          }}
          transition="transform 0.3s ease-in-out"
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d",
            transform: "rotateY(-20deg) rotateX(15deg)",
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <Image
            src="/chatbot_interface.png"
            alt="JusticeBot Chat Interface"
            zIndex={2}
            width={300}
            height={600}
            quality={90}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
