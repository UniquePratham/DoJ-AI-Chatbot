import { 
  Box, 
  SimpleGrid, 
  Text, 
  Heading, 
  Flex, 
  Container,
  VStack,
  useBreakpointValue 
} from "@chakra-ui/react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useState, useRef, useMemo } from "react";

// Create motion components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionHeading = motion(Heading);

const examples = [
  {
    src: "/divorce.jpg",
    alt: "Divorce Example",
    title: "Divorce Proceedings",
    description:
      "Get comprehensive legal advice tailored to your specific situation during a divorce. Our AI-powered assistant helps you navigate the complexities of divorce, ensuring your rights are protected every step of the way.",
    color: "purple.500",
    gradient: "linear(135deg, purple.500, pink.500)",
    blob: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
  },
  {
    src: "/accident.jpg",
    alt: "Accident Example",
    title: "Car Accident",
    description:
      "Understand your rights and get the legal support you need after a car accident. From insurance claims to personal injury lawsuits, we provide the guidance to help you get the compensation you deserve.",
    color: "red.500",
    gradient: "linear(135deg, red.500, orange.500)",
    blob: "polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)"
  },
  {
    src: "/injury.jpg",
    alt: "Injury Example",
    title: "Personal Injury",
    description:
      "Seek expert legal help for personal injury cases. Our platform connects you with top legal professionals who can assist you in filing claims and receiving just compensation for your injuries.",
    color: "blue.500",
    gradient: "linear(135deg, blue.500, cyan.500)",
    blob: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)"
  },
  {
    src: "/contract.jpg",
    alt: "Contract Example",
    title: "Contract Review",
    description:
      "Ensure your contracts are airtight with our AI-driven contract review services. Get legal insights that help you understand the fine print and avoid potential legal pitfalls.",
    color: "green.500",
    gradient: "linear(135deg, green.500, teal.500)",
    blob: "polygon(35% 0%, 65% 0%, 100% 35%, 100% 65%, 65% 100%, 35% 100%, 0% 65%, 0% 35%)"
  },
  {
    src: "/business.jpg",
    alt: "Business Law",
    title: "Business Legal Advice",
    description:
      "Get the legal support you need to navigate the complex world of business law. From starting a business to managing legal risks, we provide expert advice that helps you stay compliant and protected.",
    color: "yellow.500",
    gradient: "linear(135deg, yellow.500, orange.500)",
    blob: "polygon(40% 0%, 60% 0%, 100% 40%, 100% 60%, 60% 100%, 40% 100%, 0% 60%, 0% 40%)"
  },
  {
    src: "/property.jpg",
    alt: "Property Disputes",
    title: "Property Rights",
    description:
      "Understand your rights in property disputes. Whether it's a boundary issue or a landlord-tenant disagreement, we provide the legal guidance to help you resolve the situation amicably.",
    color: "pink.500",
    gradient: "linear(135deg, pink.500, blue.500)",
    blob: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
  },
];

const Examples = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  
  const isMobile = useBreakpointValue({ base: true, lg: false });

  // Generate random blob shapes for each example
  const randomBlobs = useMemo(() => examples.map(() => {
    const points = [];
    const numPoints = 8;
    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * 2 * Math.PI;
      const radius = 35 + Math.random() * 30; // Random radius between 35-65%
      const x = 50 + radius * Math.cos(angle);
      const y = 50 + radius * Math.sin(angle);
      points.push(`${x}% ${y}%`);
    }
    return `polygon(${points.join(', ')})`;
  }), []);

  // Animation variants
  const animationVariants = useMemo(() => ({
    containerVariants: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.2,
        },
      },
    },
    cardVariants: {
      hidden: { 
        opacity: 0, 
        y: 50,
        scale: 0.95,
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15,
          duration: 0.8,
        },
      },
    },
    titleVariants: {
      hidden: {
        opacity: 0,
        y: -30,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 120,
          damping: 12,
          duration: 0.6,
        },
      },
    },
  }), []);

  return (
    <Box
      id="examples"
      ref={ref}
      py={{ base: 16, md: 20, lg: 24 }}
      position="relative"
      background="linear-gradient(135deg, rgba(15, 20, 30, 0.98), rgba(25, 35, 45, 0.95))"
      overflow="hidden"
    >
      {/* Background Effects */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bgGradient="linear(to-br, rgba(0,0,0,0.7), rgba(0,0,0,0.5), rgba(56,178,172,0.1))"
        zIndex={1}
      />

      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        opacity={0.1}
        zIndex={1}
        background="radial-gradient(circle at 25% 75%, rgba(56,178,172,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 25%, rgba(129,140,248,0.3) 0%, transparent 50%)"
      />

      <Container maxW="1400px" position="relative" zIndex={2}>
        <MotionBox
          variants={animationVariants.containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Enhanced Header */}
          <VStack spacing={8} mb={{ base: 12, md: 16 }} textAlign="center">
            <MotionHeading
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl", xl: "6xl" }}
              fontWeight="900"
              color="white"
              letterSpacing="tight"
              lineHeight="shorter"
              variants={animationVariants.titleVariants}
            >
              Real-World{" "}
              <Box
                as="span"
                bgGradient="linear(to-r, teal.300, cyan.400)"
                bgClip="text"
                position="relative"
                _after={{
                  content: '""',
                  position: "absolute",
                  bottom: "-4px",
                  left: 0,
                  width: "100%",
                  height: "4px",
                  bgGradient: "linear(to-r, teal.300, cyan.400)",
                  borderRadius: "2px",
                }}
              >
                Examples
              </Box>
            </MotionHeading>
            
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.300"
              maxW="600px"
              textShadow="1px 1px 4px rgba(0,0,0,0.7)"
              fontWeight="500"
            >
              See how JusticeAI assists with various legal scenarios and situations
            </Text>
          </VStack>

          {/* Examples Grid */}
          <VStack spacing={{ base: 12, md: 16, lg: 20 }}>
            {examples.map((example, index) => (
              <MotionFlex
                key={index}
                variants={animationVariants.cardVariants}
                direction={{ 
                  base: "column", 
                  lg: index % 2 === 0 ? "row" : "row-reverse" 
                }}
                align="center"
                justify="space-between"
                maxW="1200px"
                w="100%"
                gap={{ base: 8, lg: 12 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                position="relative"
              >
                {/* Blob Image Container */}
                <MotionBox
                  flex={{ base: "none", lg: "0 0 500px" }}
                  position="relative"
                  w={{ base: "300px", md: "400px", lg: "500px" }}
                  h={{ base: "300px", md: "400px", lg: "500px" }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: index % 2 === 0 ? 5 : -5,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    },
                  }}
                  style={{ perspective: "1000px" }}
                >
                  {/* Animated Background Blob */}
                  <Box
                    position="absolute"
                    width="100%"
                    height="100%"
                    bgGradient={example.gradient}
                    clipPath={randomBlobs[index]}
                    opacity={0.8}
                    filter="blur(1px)"
                    transition="all 0.5s ease"
                    transform={hoveredIndex === index ? "scale(1.1)" : "scale(1)"}
                    zIndex={1}
                  />

                  {/* Glow Effect */}
                  <Box
                    position="absolute"
                    width="120%"
                    height="120%"
                    top="-10%"
                    left="-10%"
                    bgGradient={example.gradient}
                    clipPath={randomBlobs[index]}
                    opacity={hoveredIndex === index ? 0.3 : 0.1}
                    filter="blur(20px)"
                    transition="opacity 0.3s ease"
                    zIndex={0}
                  />

                  {/* Image Container with Blob Clipping */}
                  <Box
                    position="relative"
                    width="100%"
                    height="100%"
                    clipPath={randomBlobs[index]}
                    overflow="hidden"
                    zIndex={2}
                    transition="all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
                    transform={hoveredIndex === index ? "scale(1.02)" : "scale(1)"}
                    _before={{
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      bgGradient: example.gradient,
                      opacity: 0.2,
                      zIndex: 1,
                      transition: "opacity 0.3s ease",
                    }}
                    _hover={{
                      _before: {
                        opacity: 0.1,
                      },
                    }}
                  >
                    <Image
                      src={example.src}
                      alt={example.alt}
                      fill
                      style={{ 
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                        transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)",
                      }}
                      quality={90}
                    />
                  </Box>

                  {/* Floating particles effect */}
                  {hoveredIndex === index && (
                    <Box
                      position="absolute"
                      top={0}
                      left={0}
                      width="100%"
                      height="100%"
                      clipPath={randomBlobs[index]}
                      background={`radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)`}
                      zIndex={3}
                      animation="float 3s ease-in-out infinite"
                    />
                  )}
                </MotionBox>

                {/* Content Section */}
                <VStack
                  flex="1"
                  align={{ base: "center", lg: index % 2 === 0 ? "flex-start" : "flex-end" }}
                  textAlign={{ base: "center", lg: index % 2 === 0 ? "left" : "right" }}
                  spacing={6}
                  maxW={{ base: "100%", lg: "500px" }}
                  p={{ base: 6, lg: 8 }}
                >
                  {/* Glass Card Background */}
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bg="rgba(255, 255, 255, 0.05)"
                    backdropFilter="blur(20px)"
                    border="1px solid rgba(255, 255, 255, 0.1)"
                    borderRadius="3xl"
                    transform={hoveredIndex === index ? "scale(1.02)" : "scale(1)"}
                    transition="all 0.3s ease"
                    zIndex={-1}
                  />

                  <Heading
                    fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                    fontWeight="800"
                    color="white"
                    textShadow="2px 2px 8px rgba(0,0,0,0.7)"
                    position="relative"
                    _after={{
                      content: '""',
                      position: "absolute",
                      bottom: "-8px",
                      left: index % 2 === 0 || isMobile ? 0 : "auto",
                      right: index % 2 !== 0 && !isMobile ? 0 : "auto",
                      width: "60px",
                      height: "4px",
                      bgGradient: example.gradient,
                      borderRadius: "2px",
                      transform: hoveredIndex === index ? "scaleX(1.2)" : "scaleX(1)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    {example.title}
                  </Heading>

                  <Text
                    fontSize={{ base: "lg", md: "xl" }}
                    color="gray.200"
                    lineHeight="tall"
                    textShadow="1px 1px 4px rgba(0,0,0,0.7)"
                    fontWeight="500"
                    letterSpacing="wide"
                  >
                    {example.description}
                  </Text>

                  {/* Action Button */}
                  <MotionBox
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Box
                      as="button"
                      px={8}
                      py={4}
                      bgGradient={example.gradient}
                      color="white"
                      fontWeight="700"
                      fontSize="md"
                      borderRadius="full"
                      boxShadow="0 8px 25px rgba(0, 0, 0, 0.3)"
                      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                      _hover={{
                        transform: "translateY(-2px)",
                        boxShadow: "0 12px 35px rgba(0, 0, 0, 0.4)",
                      }}
                      _active={{
                        transform: "translateY(0px)",
                      }}
                    >
                      Learn More →
                    </Box>
                  </MotionBox>
                </VStack>
              </MotionFlex>
            ))}
          </VStack>
        </MotionBox>
      </Container>

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-10px);
            opacity: 1;
          }
        }
      `}</style>
    </Box>
  );
};

export default Examples;
