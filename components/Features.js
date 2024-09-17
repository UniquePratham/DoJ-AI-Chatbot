import { useState } from "react";
import { Box, SimpleGrid, Text, Heading, Icon } from "@chakra-ui/react";
import {
  FaBrain,
  FaShieldAlt,
  FaHandsHelping,
  FaBalanceScale,
  FaGavel,
  FaGlobe,
} from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: FaBrain,
    title: "Intelligent Legal Assistance",
    description:
      "Leverage advanced AI to receive personalized legal guidance. Our system understands your unique needs and provides expert advice tailored to your specific situation, ensuring you have the best possible legal support at your fingertips.",
  },
  {
    icon: FaShieldAlt,
    title: "Secure and Private",
    description:
      "Your privacy is our top priority. We use industry-leading encryption protocols to protect your data, ensuring that all your interactions remain confidential and secure. Trust that your personal information is safeguarded with the highest level of security.",
  },
  {
    icon: FaHandsHelping,
    title: "Always Available",
    description:
      "Access legal support anytime, anywhere. Our service is available 24/7, providing you with round-the-clock assistance. Whether it’s a late-night legal question or an urgent need for advice, we’re here to help, day or night.",
  },
  {
    icon: FaBalanceScale,
    title: "Equal Justice",
    description:
      "We believe in promoting fairness and equality in legal services. Our platform ensures that everyone, regardless of background or circumstances, has access to the same high-quality legal resources and advice, leveling the playing field for all.",
  },
  {
    icon: FaGavel,
    title: "Expert Advice",
    description:
      "Benefit from insights provided by experienced legal professionals. Our platform connects you with top-tier legal experts who offer reliable, accurate advice, helping you navigate even the most complex legal challenges with confidence.",
  },
  {
    icon: FaGlobe,
    title: "Global Reach",
    description:
      "No matter where you are in the world, our platform ensures you can access the legal help you need. With a global network of legal resources and professionals, we provide assistance that transcends borders, offering you the support you need wherever you may be.",
  },
];

const Features = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Box
      id="features"
      py={5}
      textAlign="center"
      backgroundImage="url('/features_bg.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Heading
        mb={5}
        fontSize="5xl"
        color="teal.200"
        textShadow="2px 2px 5px rgba(0,0,0,0.3)"
      >
        Our Features
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10} p={3}>
        {features.map((feature, index) => (
          <Box
            as={motion.div}
            key={index}
            bg="rgba(255, 255, 255, 0.9)"
            backdropFilter="blur(10px)"
            borderRadius="lg"
            boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)"
            p={8}
            cursor="pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            position="relative"
            width="full"
            height="200px"
          >
            {/* Front Side of the Card */}
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              bg="teal.500"
              color="white"
              borderRadius="lg"
              transform={
                hoveredIndex === index ? "rotateY(180deg)" : "rotateY(0)"
              }
              display={hoveredIndex === index ? "none" : "flex"}
              backfaceVisibility="hidden"
              transition="transform 0.8s ease"
              p={4}
              fontWeight="bold"
            >
              <Icon as={feature.icon} w={20} h={20} mb={4} color="cyan.300" />
              <Text fontSize="2xl">{feature.title}</Text>
            </Box>
            {/* Back Side of the Card */}
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              bg="white.500"
              color="teal.700"
              borderRadius="lg"
              transform={
                hoveredIndex === index ? "rotateY(0)" : "rotateY(-180deg)"
              }
              display={hoveredIndex === index ? "flex" : "none"}
              backfaceVisibility="hidden"
              transition="transform 0.8s ease"
              p={4}
              fontWeight="bold"
            >
              <Text fontSize="lg">{feature.description}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Features;
