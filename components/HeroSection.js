import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  Button,
  useBreakpointValue,
  Container,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useMemo, useCallback } from "react";

// Create motion components
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);
const MotionContainer = motion(Container);

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  // Memoized responsive values for better performance
  const responsiveValues = useBreakpointValue({
    base: {
      direction: "column",
      spacing: 8,
      textAlign: "center",
      maxW: "100%",
      fontSize: "2xl",
      imageSize: 180,
      chatSize: 0,
      padding: 4,
      showChat: false,
    },
    md: {
      direction: "column",
      spacing: 10,
      textAlign: "center",
      maxW: "100%",
      fontSize: "3xl",
      imageSize: 220,
      chatSize: 0,
      padding: 6,
      showChat: false,
    },
    lg: {
      direction: "row",
      spacing: 12,
      textAlign: "left",
      maxW: "500px",
      fontSize: "4xl",
      imageSize: 280,
      chatSize: 280,
      padding: 8,
      showChat: true,
    },
    xl: {
      direction: "row",
      spacing: 16,
      textAlign: "left",
      maxW: "550px",
      fontSize: "5xl",
      imageSize: 320,
      chatSize: 320,
      padding: 10,
      showChat: true,
    },
  });

  // Memoized animation variants for better performance
  const animationVariants = useMemo(
    () => ({
      containerVariants: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.2,
            staggerChildren: 0.15,
            duration: 0.6,
            ease: "easeOut",
          },
        },
      },

      itemVariants: {
        hidden: {
          y: 30,
          opacity: 0,
          scale: 0.95,
        },
        visible: {
          y: 0,
          opacity: 1,
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 120,
            damping: 15,
            duration: 0.6,
          },
        },
      },

      heroImageVariants: {
        hidden: {
          opacity: 0,
          x: -60,
          rotateY: -15,
        },
        visible: {
          opacity: 1,
          x: 0,
          rotateY: 0,
          transition: {
            duration: 1.2,
            type: "spring",
            stiffness: 80,
            damping: 20,
          },
        },
        float: {
          y: [-8, 12, -8],
          rotateY: [-2, 3, -2],
          rotateX: [-1, 2, -1],
          transition: {
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        },
      },

      chatInterfaceVariants: {
        hidden: {
          opacity: 0,
          x: 60,
          rotateY: 15,
        },
        visible: {
          opacity: 1,
          x: 0,
          rotateY: -5,
          transition: {
            duration: 1.2,
            type: "spring",
            stiffness: 80,
            damping: 20,
            delay: 0.3,
          },
        },
      },

      buttonVariants: {
        hidden: {
          opacity: 0,
          y: 20,
          scale: 0.9,
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 150,
            damping: 12,
            delay: 0.8,
          },
        },
        hover: {
          scale: 1.05,
          y: -2,
          boxShadow: "0 12px 30px rgba(56, 178, 172, 0.4)",
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 10,
          },
        },
        tap: {
          scale: 0.98,
          y: 0,
        },
      },
    }),
    []
  );

  // Memoized event handlers
  const handleExploreClick = useCallback(() => {
    // Add your navigation logic here
    console.log("Explore button clicked");
  }, []);

  return (
    <Box
      ref={ref}
      position="relative"
      py={{ base: 12, md: 16, lg: 20 }}
      minHeight="100vh"
      bg="gray.900"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
    >
      {/* Consistent dark overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bg="gray.900"
        zIndex={1}
      />

      {/* Subtle animated background particles */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        opacity={0.03}
        zIndex={2}
        background="radial-gradient(circle at 20% 50%, rgba(56,178,172,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(129,140,248,0.2) 0%, transparent 50%)"
      />

      {/* Main Content Container - Three Column Layout */}
      <MotionContainer
        maxW="1600px"
        zIndex={3}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={animationVariants.containerVariants}
      >
        <Flex
          direction={responsiveValues?.direction}
          align="center"
          justify="space-between"
          gap={responsiveValues?.spacing}
          px={responsiveValues?.padding}
          minH={{ lg: "70vh" }}
        >
          {/* Left Column - Hero Image */}
          <MotionBox
            flex={{ base: "none", lg: "0 0 320px" }}
            variants={animationVariants.itemVariants}
            display="flex"
            justifyContent="center"
            alignItems="center"
            order={{ base: 2, lg: 1 }}
            w={{ base: "100%", lg: "320px" }}
          >
            <Box position="relative" display="inline-block">
              {/* Enhanced shadow with consistent dark theme */}
              <Box
                position="absolute"
                bottom="-25px"
                left="50%"
                transform="translateX(-50%)"
                width="95%"
                height="35px"
                bgGradient="radial(rgba(56,178,172,0.4), transparent)"
                borderRadius="50%"
                filter="blur(25px)"
                zIndex={1}
              />

              <MotionBox
                variants={animationVariants.heroImageVariants}
                animate={isInView ? ["visible", "float"] : "visible"}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: -2,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  },
                }}
                style={{
                  perspective: "1000px",
                  transformStyle: "preserve-3d",
                }}
                role="img"
                aria-label="EchoJusticeAI Hero Image"
              >
                <Image
                  src="/hero.png"
                  alt="EchoJusticeAI - AI-powered legal assistance platform with modern interface"
                  width={responsiveValues?.imageSize}
                  height={responsiveValues?.imageSize}
                  priority
                  quality={90}
                  style={{
                    borderRadius: "20px",
                    filter: "drop-shadow(0 20px 40px rgba(56,178,172,0.3))",
                    background:
                      "linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                    backdropFilter: "blur(10px)",
                  }}
                />
              </MotionBox>
            </Box>
          </MotionBox>

          {/* Center Column - Main Content */}
          <MotionBox
            flex="1"
            textAlign={responsiveValues?.textAlign}
            maxW={responsiveValues?.maxW}
            variants={animationVariants.itemVariants}
            order={{ base: 1, lg: 2 }}
            mx={{ base: "auto", lg: "0" }}
            px={{ base: 4, lg: 8 }}
          >
            <Stack spacing={{ base: 6, md: 8, lg: 6 }} role="main">
              <MotionHeading
                as="h1"
                fontSize={responsiveValues?.fontSize}
                color="white"
                variants={animationVariants.itemVariants}
                fontWeight="800"
                lineHeight="1.1"
                letterSpacing="tight"
                mb={4}
                textShadow="2px 2px 4px rgba(0,0,0,0.5)"
              >
                Navigate Your Legal Path with{" "}
                <Box
                  as="span"
                  bgGradient="linear(to-r, teal.300, cyan.400)"
                  bgClip="text"
                  position="relative"
                  display="inline-block"
                  _after={{
                    content: '""',
                    position: "absolute",
                    bottom: "-4px",
                    left: 0,
                    width: "100%",
                    height: "3px",
                    bgGradient: "linear(to-r, teal.300, cyan.400)",
                    borderRadius: "2px",
                  }}
                >
                  EchoJusticeAI
                </Box>
              </MotionHeading>

              <MotionText
                color="gray.200"
                fontSize={{ base: "lg", md: "xl", lg: "xl" }}
                variants={animationVariants.itemVariants}
                fontWeight="500"
                letterSpacing="normal"
                mb={4}
              >
                Your AI-powered companion for legal guidance and justice.
              </MotionText>

              <MotionText
                color="gray.400"
                fontSize={{ base: "md", md: "lg" }}
                maxW={{ base: "100%", lg: "480px" }}
                mx={responsiveValues?.textAlign === "center" ? "auto" : "0"}
                variants={animationVariants.itemVariants}
                lineHeight="1.6"
                opacity={0.9}
                mb={6}
              >
                Discover efficient solutions to your legal inquiries with ease and
                confidence. Let EchoJusticeAI guide you every step of the way through
                complex legal landscapes with cutting-edge AI technology.
              </MotionText>

              <MotionButton
                colorScheme="teal"
                size="lg"
                variants={animationVariants.buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={handleExploreClick}
                bgGradient="linear(to-r, teal.500, cyan.500)"
                color="white"
                _hover={{
                  bgGradient: "linear(to-r, teal.600, cyan.600)",
                  _before: {
                    left: "100%",
                  },
                }}
                width={{ base: "100%", sm: "200px", lg: "180px" }}
                height="50px"
                fontSize="md"
                fontWeight="bold"
                borderRadius="full"
                boxShadow="0 8px 25px rgba(56, 178, 172, 0.4)"
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                position="relative"
                overflow="hidden"
                _before={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "-100%",
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                  transition: "left 0.5s",
                }}
                aria-label="Explore EchoJusticeAI features"
              >
                Explore Now
              </MotionButton>
            </Stack>
          </MotionBox>

          {/* Right Column - Chatbot Interface */}
          <MotionBox
            flex={{ base: "none", lg: "0 0 320px" }}
            variants={animationVariants.itemVariants}
            display={{ base: "none", lg: "flex" }}
            justifyContent="center"
            alignItems="center"
            order={3}
            w="320px"
          >
            <MotionBox
              variants={animationVariants.chatInterfaceVariants}
              whileHover={{
                rotateY: 2,
                rotateX: 1,
                scale: 1.02,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
              style={{
                perspective: "1200px",
                transformStyle: "preserve-3d",
              }}
              role="img"
              aria-label="Chat Interface Preview"
            >
              <Box
                borderRadius="20px"
                overflow="hidden"
                boxShadow="0 20px 60px rgba(0, 0, 0, 0.8)"
                transform="rotateY(-3deg) rotateX(2deg)"
                transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                position="relative"
                _hover={{
                  transform: "rotateY(-1deg) rotateX(1deg)",
                }}
                _before={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "linear-gradient(145deg, rgba(56,178,172,0.1), rgba(56,178,172,0.05))",
                  borderRadius: "20px",
                  zIndex: 1,
                  pointerEvents: "none",
                }}
              >
                <Image
                  src="/chatbot_interface-without-bg.png"
                  alt="EchoJusticeAI Interactive Chat Interface - Experience seamless legal assistance"
                  width={responsiveValues?.chatSize}
                  height={responsiveValues?.chatSize * 2}
                  quality={90}
                  style={{
                    display: "block",
                    borderRadius: "20px",
                  }}
                />
              </Box>
            </MotionBox>
          </MotionBox>
        </Flex>
      </MotionContainer>
    </Box>
  );
};

export default HeroSection;
