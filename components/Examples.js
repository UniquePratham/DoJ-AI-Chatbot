import { Box, SimpleGrid, Text, Heading, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { motion } from "framer-motion";
import styled from "styled-components";

// Define random blob shapes using clip-path
const Blob = styled.div`
  width: 1000px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0a9396, #005f73);
  clip-path: polygon(
    50% 0%,
    70% 10%,
    90% 25%,
    100% 50%,
    85% 75%,
    70% 85%,
    50% 100%,
    30% 85%,
    15% 75%,
    0% 50%,
    10% 25%,
    30% 10%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;
/*  Git error comment */
const examples = [
  {
    src: "/divorce.jpg",
    alt: "Divorce Example",
    title: "Divorce Proceedings",
    description:
      "Get comprehensive legal advice tailored to your specific situation during a divorce. Our AI-powered assistant helps you navigate the complexities of divorce, ensuring your rights are protected every step of the way.",
  },
  {
    src: "/accident.jpg",
    alt: "Accident Example",
    title: "Car Accident",
    description:
      "Understand your rights and get the legal support you need after a car accident. From insurance claims to personal injury lawsuits, we provide the guidance to help you get the compensation you deserve.",
  },
  {
    src: "/injury.jpg",
    alt: "Injury Example",
    title: "Personal Injury",
    description:
      "Seek expert legal help for personal injury cases. Our platform connects you with top legal professionals who can assist you in filing claims and receiving just compensation for your injuries.",
  },
  {
    src: "/contract.jpg",
    alt: "Contract Example",
    title: "Contract Review",
    description:
      "Ensure your contracts are airtight with our AI-driven contract review services. Get legal insights that help you understand the fine print and avoid potential legal pitfalls.",
  },
  {
    src: "/business.jpg",
    alt: "Business Law",
    title: "Business Legal Advice",
    description:
      "Get the legal support you need to navigate the complex world of business law. From starting a business to managing legal risks, we provide expert advice that helps you stay compliant and protected.",
  },
  {
    src: "/property.jpg",
    alt: "Property Disputes",
    title: "Property Rights",
    description:
      "Understand your rights in property disputes. Whether it's a boundary issue or a landlord-tenant disagreement, we provide the legal guidance to help you resolve the situation amicably.",
  },
];

const Examples = () => {
  return (
    <Box
      id="examples"
      py={20}
      bg="rgba(255, 255, 255, 0.25)"
      backdropFilter="blur(15px)"
      borderRadius="20px"
      mx={10}
      textAlign="center"
      boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
    >
      <Heading mb={10} fontSize="4xl" color="cyan.300" textShadow="2px 2px #023e8a">
        Examples of Use
      </Heading>
      <SimpleGrid columns={[1, 1, 1]} spacing={14}>
        {examples.map((example, index) => (
          <Flex
            as={motion.div}
            key={index}
            direction={index % 2 === 0 ? "row" : "row-reverse"}
            align="center"
            p={6}
            bg="rgba(255, 255, 255, 0.1)"
            borderRadius="xl"
            boxShadow="0 10px 40px rgba(0, 0, 0, 0.2)"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            maxW="600px"
            mx="auto"
          >
            <Blob>
              <Box
                as={motion.div}
                width="80%" // Slightly reduce the image size inside the blob
                height="50%"
                position="relative"
                overflow="hidden"
              >
                <Image
                  src={example.src}
                  alt={example.alt}
                  layout="fill"
                  objectFit="cover" // Cover to fill the blob area
                  quality={100}
                />
              </Box>
            </Blob>
            <Box textAlign={index % 2 === 0 ? "left" : "right"}>
              <Heading fontSize="2xl" color="teal.400" mb={4}>
                {example.title}
              </Heading>
              <Text fontSize="lg" color="white" textShadow="1px 1px #023e8a">
                {example.description}
              </Text>
            </Box>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Examples;
