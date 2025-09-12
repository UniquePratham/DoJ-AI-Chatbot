import { useState, useMemo, useRef } from "react";
import {
  Box,
  SimpleGrid,
  Text,
  Heading,
  Icon,
  Container,
  VStack,
} from "@chakra-ui/react";
import {
  FaBrain,
  FaShieldAlt,
  FaHandsHelping,
  FaBalanceScale,
  FaGavel,
  FaGlobe,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";

// Create motion components
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const features = [
  {
    icon: FaBrain,
    title: "Intelligent Legal Assistance",
    description:
      "Leverage advanced AI to receive personalized legal guidance. Our system understands your unique needs and provides expert advice tailored to your specific situation, ensuring you have the best possible legal support at your fingertips.",
    color: "purple.500",
    gradient: "linear(135deg, purple.500, pink.500)",
    accentColor: "rgba(147, 51, 234, 0.2)",
  },
  {
    icon: FaShieldAlt,
    title: "Secure and Private",
    description:
      "Your privacy is our top priority. We use industry-leading encryption protocols to protect your data, ensuring that all your interactions remain confidential and secure. Trust that your personal information is safeguarded with the highest level of security.",
    color: "green.500",
    gradient: "linear(135deg, green.500, teal.500)",
    accentColor: "rgba(34, 197, 94, 0.2)",
  },
  {
    icon: FaHandsHelping,
    title: "Always Available",
    description:
      "Access legal support anytime, anywhere. Our service is available 24/7, providing you with round-the-clock assistance. Whether it's a late-night legal question or an urgent need for advice, we're here to help, day or night.",
    color: "blue.500",
    gradient: "linear(135deg, blue.500, cyan.500)",
    accentColor: "rgba(6, 182, 212, 0.2)",
  },
  {
    icon: FaBalanceScale,
    title: "Equal Justice",
    description:
      "We believe in promoting fairness and equality in legal services. Our platform ensures that everyone, regardless of background or circumstances, has access to the same high-quality legal resources and advice, leveling the playing field for all.",
    color: "orange.500",
    gradient: "linear(135deg, orange.500, red.500)",
    accentColor: "rgba(239, 68, 68, 0.2)",
  },
  {
    icon: FaGavel,
    title: "Expert Advice",
    description:
      "Benefit from insights provided by experienced legal professionals. Our platform connects you with top-tier legal experts who offer reliable, accurate advice, helping you navigate even the most complex legal challenges with confidence.",
    color: "teal.500",
    gradient: "linear(135deg, teal.500, green.500)",
    accentColor: "rgba(6, 214, 160, 0.2)",
  },
  {
    icon: FaGlobe,
    title: "Global Reach",
    description:
      "No matter where you are in the world, our platform ensures you can access the legal help you need. With a global network of legal resources and professionals, we provide assistance that transcends borders, offering you the support you need wherever you may be.",
    color: "indigo.500",
    gradient: "linear(135deg, indigo.500, purple.500)",
    accentColor: "rgba(99, 102, 241, 0.2)",
  },
];

const Features = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  // Enhanced animation variants with better 3D effects
  const animationVariants = useMemo(
    () => ({
      containerVariants: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.15,
          },
        },
      },
      cardVariants: {
        hidden: {
          opacity: 0,
          y: 50,
          scale: 0.9,
          rotateX: -15,
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.8,
          },
        },
        hover: {
          y: -10,
          scale: 1.02,
          rotateX: 5,
          rotateY: 5,
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 25,
          },
        },
      },
      frontVariants: {
        default: {
          rotateY: 0,
          scale: 1,
        },
        hover: {
          rotateY: -15,
          scale: 0.95,
          transition: {
            duration: 0.6,
            ease: "easeOut",
          },
        },
      },
      backVariants: {
        default: {
          rotateY: 90,
          scale: 0.8,
          opacity: 0,
        },
        hover: {
          rotateY: 0,
          scale: 1,
          opacity: 1,
          transition: {
            duration: 0.6,
            ease: "easeOut",
            delay: 0.1,
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
            stiffness: 100,
            damping: 12,
            duration: 0.8,
          },
        },
      },
    }),
    []
  );

  return (
    <Box
      id="features"
      ref={ref}
      py={{ base: 16, md: 20, lg: 24 }}
      position="relative"
      background="linear-gradient(135deg, rgba(15, 20, 30, 0.98), rgba(25, 35, 45, 0.95)), url('/features_bg.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundAttachment={{ base: "scroll", lg: "fixed" }}
      overflow="hidden"
    >
      {/* Enhanced Background Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bgGradient="linear(to-br, rgba(0,0,0,0.8), rgba(0,0,0,0.6), rgba(56,178,172,0.1))"
        zIndex={1}
      />

      {/* Animated Background Particles */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        opacity={0.1}
        zIndex={1}
        background="radial-gradient(circle at 30% 70%, rgba(56,178,172,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(129,140,248,0.3) 0%, transparent 50%)"
      />

      <Container maxW="1400px" zIndex={2} position="relative">
        {/* Enhanced Title Section */}
        <VStack spacing={8} mb={{ base: 12, md: 16 }} textAlign="center">
          <MotionHeading
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl", xl: "6xl" }}
            fontWeight="900"
            color="white"
            letterSpacing="tight"
            lineHeight="shorter"
            variants={animationVariants.titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Powerful{" "}
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
              Features
            </Box>
          </MotionHeading>

          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="gray.300"
            maxW="600px"
            textShadow="1px 1px 4px rgba(0,0,0,0.7)"
            fontWeight="500"
          >
            Discover the cutting-edge capabilities that make EchoJusticeAI your
            ultimate legal companion
          </Text>
        </VStack>

        {/* Enhanced Features Grid with Fixed 3D Animation */}
        <MotionBox
          variants={animationVariants.containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={{ base: 8, md: 10, lg: 12 }}
            px={{ base: 4, md: 0 }}
          >
            {features.map((feature, index) => (
              <MotionBox
                key={index}
                variants={animationVariants.cardVariants}
                whileHover="hover"
                position="relative"
                height="350px"
                cursor="pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  perspective: "1200px",
                  transformStyle: "preserve-3d",
                }}
                role="button"
                tabIndex={0}
                aria-label={`Feature: ${feature.title}`}
                _focus={{
                  outline: "3px solid",
                  outlineColor: "cyan.400",
                  outlineOffset: "4px",
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setHoveredIndex(hoveredIndex === index ? null : index);
                  }
                }}
              >
                {/* Enhanced Card Container */}
                <Box
                  width="100%"
                  height="100%"
                  position="relative"
                  transformStyle="preserve-3d"
                >
                  {/* Front Card - Always Visible */}
                  <MotionBox
                    position="absolute"
                    width="100%"
                    height="100%"
                    borderRadius="3xl"
                    overflow="hidden"
                    variants={animationVariants.frontVariants}
                    animate={hoveredIndex === index ? "hover" : "default"}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Glass morphism background */}
                    <Box
                      position="absolute"
                      top={0}
                      left={0}
                      right={0}
                      bottom={0}
                      bg="rgba(255, 255, 255, 0.08)"
                      backdropFilter="blur(20px)"
                      border="1px solid rgba(255, 255, 255, 0.1)"
                      borderRadius="3xl"
                    />

                    {/* Gradient overlay */}
                    <Box
                      position="absolute"
                      top={0}
                      left={0}
                      right={0}
                      bottom={0}
                      bgGradient={feature.gradient}
                      opacity={0.1}
                      borderRadius="3xl"
                    />

                    {/* Content */}
                    <VStack
                      height="100%"
                      justify="center"
                      spacing={6}
                      p={8}
                      position="relative"
                      zIndex={2}
                    >
                      {/* Animated icon with floating effect */}
                      <MotionBox
                        position="relative"
                        animate={{
                          y: hoveredIndex === index ? [-5, 5, -5] : 0,
                          rotate: hoveredIndex === index ? [0, 5, 0] : 0,
                        }}
                        transition={{
                          duration: 2,
                          repeat: hoveredIndex === index ? Infinity : 0,
                          repeatType: "reverse",
                          ease: "easeInOut",
                        }}
                      >
                        {/* Glowing background */}
                        <Box
                          position="absolute"
                          top="50%"
                          left="50%"
                          transform="translate(-50%, -50%)"
                          width="100px"
                          height="100px"
                          borderRadius="50%"
                          bgGradient={feature.gradient}
                          opacity={hoveredIndex === index ? 0.3 : 0.15}
                          filter="blur(25px)"
                          transition="opacity 0.3s ease"
                        />
                        <Icon
                          as={feature.icon}
                          w={20}
                          h={20}
                          color="white"
                          filter="drop-shadow(0 8px 16px rgba(0,0,0,0.4))"
                          position="relative"
                        />
                      </MotionBox>

                      <Text
                        fontSize="2xl"
                        fontWeight="800"
                        color="white"
                        textAlign="center"
                        textShadow="2px 2px 12px rgba(0,0,0,0.7)"
                        lineHeight="shorter"
                      >
                        {feature.title}
                      </Text>

                      {/* Animated underline */}
                      <MotionBox
                        width={hoveredIndex === index ? "60px" : "40px"}
                        height="3px"
                        bgGradient={feature.gradient}
                        borderRadius="full"
                        transition={{ duration: 0.3 }}
                      />
                    </VStack>
                  </MotionBox>

                  {/* Back Card - Slides in from right */}
                  <MotionBox
                    position="absolute"
                    width="100%"
                    height="100%"
                    borderRadius="3xl"
                    overflow="hidden"
                    variants={animationVariants.backVariants}
                    animate={hoveredIndex === index ? "hover" : "default"}
                    style={{
                      transformOrigin: "left center",
                    }}
                  >
                    {/* Background with enhanced glass effect */}
                    <Box
                      position="absolute"
                      top={0}
                      left={0}
                      right={0}
                      bottom={0}
                      bg="rgba(255, 255, 255, 0.95)"
                      backdropFilter="blur(25px)"
                      border="2px solid rgba(255, 255, 255, 0.3)"
                      borderRadius="3xl"
                      boxShadow="0 25px 50px rgba(0, 0, 0, 0.4)"
                    />

                    {/* Subtle gradient overlay */}
                    <Box
                      position="absolute"
                      top={0}
                      left={0}
                      right={0}
                      bottom={0}
                      bgGradient={feature.gradient}
                      opacity={0.03}
                      borderRadius="3xl"
                    />

                    {/* Content with better spacing */}
                    <VStack
                      height="100%"
                      justify="center"
                      spacing={6}
                      p={8}
                      position="relative"
                      zIndex={2}
                    >
                      {/* Smaller icon for back card */}
                      <Icon
                        as={feature.icon}
                        w={10}
                        h={10}
                        color={feature.color}
                        filter="drop-shadow(0 2px 8px rgba(0,0,0,0.2))"
                      />

                      <Text
                        fontSize="lg"
                        fontWeight="600"
                        color="gray.800"
                        textAlign="center"
                        lineHeight="relaxed"
                        letterSpacing="tight"
                      >
                        {feature.description}
                      </Text>

                      {/* Call to action hint */}
                      <Text
                        fontSize="sm"
                        color={feature.color}
                        fontWeight="700"
                        textTransform="uppercase"
                        letterSpacing="wide"
                      >
                        Learn More →
                      </Text>
                    </VStack>
                  </MotionBox>
                </Box>

                {/* Enhanced ambient glow effect */}
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  width="140%"
                  height="140%"
                  borderRadius="3xl"
                  bgGradient={feature.gradient}
                  opacity={hoveredIndex === index ? 0.25 : 0}
                  filter="blur(40px)"
                  transition="opacity 0.5s ease"
                  zIndex={-1}
                  pointerEvents="none"
                />

                {/* Particle effect overlay */}
                {hoveredIndex === index && (
                  <MotionBox
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    borderRadius="3xl"
                    background={`radial-gradient(circle at 30% 30%, ${feature.accentColor} 0%, transparent 50%), 
                                 radial-gradient(circle at 70% 70%, ${feature.accentColor} 0%, transparent 50%)`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    pointerEvents="none"
                    zIndex={1}
                  />
                )}
              </MotionBox>
            ))}
          </SimpleGrid>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Features;
