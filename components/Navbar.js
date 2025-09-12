import {
  Box,
  Flex,
  HStack,
  VStack,
  Link,
  IconButton,
  Image,
  Text,
  Button,
  useDisclosure,
  Container,
  Badge,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { keyframes } from "@emotion/react";
import {
  FaBars,
  FaTimes,
  FaRocket,
  FaChevronDown,
  FaBolt,
  FaGem,
  FaFire,
} from "react-icons/fa";
import { useState, useCallback, useMemo, useEffect } from "react";

// Create motion components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionHStack = motion(HStack);

// Modern pulse animation
const modernPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(56, 178, 172, 0.4);
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(56, 178, 172, 0);
    transform: scale(1.05);
  }
`;

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Modern navigation items with icons
  const navigationItems = useMemo(
    () => [
      { href: "#features", label: "Features", icon: FaBolt },
      { href: "#examples", label: "Examples", icon: FaGem },
      { href: "#faq", label: "FAQ", icon: FaFire },
      { href: "#contact", label: "Contact", icon: FaRocket },
    ],
    []
  );

  const handleGetStarted = useCallback(() => {
    console.log("Get Started clicked");
  }, []);

  return (
    <MotionBox
      as="nav"
      position="fixed"
      top={0}
      width="100%"
      zIndex={1000}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Ultra-modern glassmorphism background */}
      <Box
        bg={scrolled
          ? "rgba(17, 25, 40, 0.95)"
          : "rgba(17, 25, 40, 0.8)"}
        backdropFilter="blur(16px)"
        borderBottom="1px solid rgba(255, 255, 255, 0.08)"
        boxShadow={scrolled
          ? "0 8px 32px rgba(0, 0, 0, 0.3)"
          : "0 4px 20px rgba(0, 0, 0, 0.1)"}
        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        position="relative"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          bgGradient: "linear(to-r, transparent, rgba(56,178,172,0.5), transparent)",
        }}
      >
        <Container maxW="1400px">
          <Flex
            h={scrolled ? 16 : 20}
            alignItems="center"
            justifyContent="space-between"
            px={6}
            transition="all 0.3s ease"
          >
            {/* Futuristic Logo Section */}
            <MotionHStack
              spacing={3}
              alignItems="center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Box
                position="relative"
                cursor="pointer"
                _hover={{
                  transform: "rotate(2deg) scale(1.05)",
                }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                <Image
                  src="/logo.png"
                  alt="EchoJustice AI Logo"
                  boxSize="50px"
                  objectFit="contain"
                  filter="drop-shadow(0 4px 12px rgba(56,178,172,0.3))"
                  transition="all 0.3s ease"
                  _hover={{
                    filter: "drop-shadow(0 6px 20px rgba(56,178,172,0.6))",
                  }}
                  borderRadius="lg"
                  p={1}
                  bg="rgba(56, 178, 172, 0.1)"
                  border="1px solid rgba(56, 178, 172, 0.2)"
                />
                
                {/* Animated glow ring */}
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  width="60px"
                  height="60px"
                  borderRadius="lg"
                  border="2px solid rgba(56,178,172,0.3)"
                  opacity={0}
                  _groupHover={{ opacity: 1 }}
                  transition="opacity 0.3s ease"
                  animation={`${modernPulse} 2s infinite`}
                />
              </Box>

              <Box>
                <Text
                  fontSize="xl"
                  fontWeight="800"
                  color="white"
                  letterSpacing="tight"
                  lineHeight="shorter"
                >
                  EchoJustice
                </Text>
                <Text
                  fontSize="xs"
                  color="teal.300"
                  fontWeight="600"
                  letterSpacing="widest"
                  textTransform="uppercase"
                >
                  AI Powered
                </Text>
              </Box>
            </MotionHStack>

            {/* Sleek Mobile Menu Button */}
            <IconButton
              size="md"
              icon={
                <Box
                  as={isOpen ? FaTimes : FaBars}
                  transition="all 0.3s ease"
                  transform={isOpen ? "rotate(180deg)" : "rotate(0deg)"}
                />
              }
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              display={{ lg: "none" }}
              onClick={isOpen ? onClose : onOpen}
              variant="ghost"
              color="white"
              bg="rgba(255,255,255,0.05)"
              border="1px solid rgba(255,255,255,0.1)"
              borderRadius="xl"
              _hover={{
                bg: "rgba(56,178,172,0.2)",
                borderColor: "rgba(56,178,172,0.4)",
                transform: "scale(1.05)",
              }}
              _active={{
                transform: "scale(0.95)",
              }}
              transition="all 0.2s ease"
            />

            {/* Modern Desktop Navigation */}
            <MotionHStack
              spacing={1}
              alignItems="center"
              as="nav"
              display={{ base: "none", lg: "flex" }}
              bg="rgba(255, 255, 255, 0.05)"
              borderRadius="full"
              p={1}
              border="1px solid rgba(255, 255, 255, 0.1)"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {navigationItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  px={4}
                  py={2}
                  borderRadius="full"
                  fontSize="sm"
                  fontWeight="600"
                  color="gray.300"
                  textDecoration="none"
                  position="relative"
                  transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  _hover={{
                    textDecoration: "none",
                    color: "white",
                    bg: "rgba(56,178,172,0.2)",
                    transform: "translateY(-1px)",
                  }}
                  display="flex"
                  alignItems="center"
                  gap={2}
                >
                  <Box as={item.icon} size="14px" />
                  {item.label}
                </Link>
              ))}
            </MotionHStack>

            {/* Futuristic CTA Section */}
            <HStack spacing={4} display={{ base: "none", lg: "flex" }}>
              <Button
                onClick={handleGetStarted}
                size="sm"
                variant="ghost"
                color="gray.300"
                fontWeight="600"
                _hover={{
                  color: "white",
                  bg: "rgba(255,255,255,0.05)",
                }}
              >
                Sign In
              </Button>

              <Button
                onClick={handleGetStarted}
                size="sm"
                bgGradient="linear(135deg, teal.500, cyan.400)"
                color="white"
                fontWeight="700"
                px={6}
                borderRadius="full"
                boxShadow="0 4px 12px rgba(56, 178, 172, 0.4)"
                position="relative"
                overflow="hidden"
                _hover={{
                  transform: "translateY(-1px)",
                  boxShadow: "0 6px 20px rgba(56, 178, 172, 0.6)",
                  _before: {
                    transform: "translateX(100%)",
                  },
                }}
                _active={{
                  transform: "scale(0.98)",
                }}
                _before={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  bgGradient: "linear(135deg, cyan.400, teal.300)",
                  transform: "translateX(-100%)",
                  transition: "transform 0.3s ease",
                }}
                zIndex={1}
              >
                <Text position="relative" zIndex={2}>
                  Get Started
                </Text>
              </Button>
            </HStack>
          </Flex>

          {/* Ultra-modern Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <MotionBox
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                display={{ lg: "none" }}
                bg="rgba(17, 25, 40, 0.95)"
                backdropFilter="blur(20px)"
                borderTop="1px solid rgba(255,255,255,0.1)"
                overflow="hidden"
              >
                <VStack spacing={1} align="stretch" p={6}>
                  {navigationItems.map((item, index) => (
                    <MotionBox
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        display="flex"
                        alignItems="center"
                        gap={3}
                        py={3}
                        px={4}
                        fontSize="md"
                        fontWeight="600"
                        color="gray.300"
                        textDecoration="none"
                        borderRadius="xl"
                        transition="all 0.2s ease"
                        _hover={{
                          textDecoration: "none",
                          color: "white",
                          bg: "rgba(56,178,172,0.1)",
                          transform: "translateX(8px)",
                        }}
                        onClick={onClose}
                      >
                        <Box
                          as={item.icon}
                          size="16px"
                          color="teal.400"
                        />
                        {item.label}
                      </Link>
                    </MotionBox>
                  ))}

                  <Box pt={4} borderTop="1px solid rgba(255,255,255,0.1)" mt={4}>
                    <VStack spacing={3}>
                      <Button
                        onClick={() => {
                          handleGetStarted();
                          onClose();
                        }}
                        w="full"
                        variant="ghost"
                        color="gray.300"
                        fontWeight="600"
                        _hover={{
                          color: "white",
                          bg: "rgba(255,255,255,0.05)",
                        }}
                      >
                        Sign In
                      </Button>

                      <Button
                        onClick={() => {
                          handleGetStarted();
                          onClose();
                        }}
                        w="full"
                        bgGradient="linear(135deg, teal.500, cyan.400)"
                        color="white"
                        fontWeight="700"
                        borderRadius="xl"
                        boxShadow="0 4px 12px rgba(56, 178, 172, 0.4)"
                        _hover={{
                          transform: "translateY(-1px)",
                          boxShadow: "0 6px 20px rgba(56, 178, 172, 0.6)",
                        }}
                        _active={{
                          transform: "scale(0.98)",
                        }}
                      >
                        Get Started
                      </Button>
                    </VStack>
                  </Box>
                </VStack>
              </MotionBox>
            )}
          </AnimatePresence>
        </Container>
      </Box>
    </MotionBox>
  );
};
export default Navbar;
