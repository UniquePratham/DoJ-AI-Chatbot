import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Image,
  Text,
  Button,
  useDisclosure,
  keyframes,
} from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons from react-icons
import { useState } from "react";

// Animation Keyframes
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hovering, setHovering] = useState(false); // For hover state of logo

  return (
    <Box
      bgGradient="linear(to-r, teal.500, blue.400)"
      px={4}
      py={2}
      shadow="lg"
      position="fixed"
      width="100%"
      zIndex="10"
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Logo with bounce animation */}
        <HStack spacing={4} alignItems="center">
          <Image
            src="/logo.png"
            alt="EchoJustice Logo"
            cursor="pointer"
            boxSize="80px"
            objectFit="cover"
            animation={`${bounce} 2s ease-in-out infinite`} // Bounce effect
          />
          <Text
            fontSize="2xl"
            fontWeight="bold"
            letterSpacing="widest"
            color="white"
            textShadow="2px 2px 5px rgba(0,0,0,0.3)" // 3D text shadow
            cursor="pointer"
            _hover={{
              color: "cyan.400",
              textShadow: "3px 3px 10px rgba(0,255,255,0.6)",
              transition: "all 0.3s ease-in-out",
            }}
          >
            EchoJustice AI
          </Text>
        </HStack>

        {/* Hamburger menu for mobile */}
        <IconButton
          size="lg"
          icon={isOpen ? <FaTimes /> : <FaBars />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          color="white"
          bg="transparent"
          _hover={{ bg: "teal.600", transform: "scale(1.1)" }}
          transition="all 0.2s ease-in-out"
        />

        {/* Navigation links */}
        <HStack
          spacing={8}
          alignItems="center"
          as="nav"
          display={{ base: "none", md: "flex" }}
        >
          <Link
            href="#features"
            _hover={{
              textDecoration: "none",
              color: "cyan.400",
              transform: "scale(1.1)",
              transition: "all 0.2s ease-in-out",
            }}
            fontSize="lg"
            color="white"
            textShadow="1px 1px 3px rgba(0,0,0,0.3)" // Slight shadow for 3D text effect
          >
            Features
          </Link>
          <Link
            href="#examples"
            _hover={{
              textDecoration: "none",
              color: "cyan.400",
              transform: "scale(1.1)",
              transition: "all 0.2s ease-in-out",
            }}
            fontSize="lg"
            color="white"
            textShadow="1px 1px 3px rgba(0,0,0,0.3)"
          >
            Examples
          </Link>
          <Link
            href="#faq"
            _hover={{
              textDecoration: "none",
              color: "cyan.400",
              transform: "scale(1.1)",
              transition: "all 0.2s ease-in-out",
            }}
            fontSize="lg"
            color="white"
            textShadow="1px 1px 3px rgba(0,0,0,0.3)"
          >
            FAQ
          </Link>
          <Link
            href="#contact"
            _hover={{
              textDecoration: "none",
              color: "cyan.400",
              transform: "scale(1.1)",
              transition: "all 0.2s ease-in-out",
            }}
            fontSize="lg"
            color="white"
            textShadow="1px 1px 3px rgba(0,0,0,0.3)"
          >
            Contact
          </Link>

          {/* Call to action button */}
          <Button
            bg="white"
            color="teal.500"
            fontWeight="bold"
            px={6}
            py={4}
            borderRadius="xl"
            boxShadow="lg"
            _hover={{
              bg: "cyan.400",
              color: "white",
              transform: "scale(1.05)",
              boxShadow: "0 0 15px rgba(0,255,255,0.6)",
            }}
            transition="all 0.3s ease-in-out"
          >
            Get Started
          </Button>
        </HStack>
      </Flex>

      {/* Mobile menu */}
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <HStack as="nav" spacing={4}>
            <Link
              href="#features"
              _hover={{
                textDecoration: "none",
                color: "cyan.400",
                transform: "scale(1.1)",
                transition: "all 0.2s ease-in-out",
              }}
              fontSize="lg"
              color="white"
              textShadow="1px 1px 3px rgba(0,0,0,0.3)"
            >
              Features
            </Link>
            <Link
              href="#examples"
              _hover={{
                textDecoration: "none",
                color: "cyan.400",
                transform: "scale(1.1)",
                transition: "all 0.2s ease-in-out",
              }}
              fontSize="lg"
              color="white"
              textShadow="1px 1px 3px rgba(0,0,0,0.3)"
            >
              Examples
            </Link>
            <Link
              href="#faq"
              _hover={{
                textDecoration: "none",
                color: "cyan.400",
                transform: "scale(1.1)",
                transition: "all 0.2s ease-in-out",
              }}
              fontSize="lg"
              color="white"
              textShadow="1px 1px 3px rgba(0,0,0,0.3)"
            >
              FAQ
            </Link>
            <Link
              href="#contact"
              _hover={{
                textDecoration: "none",
                color: "cyan.400",
                transform: "scale(1.1)",
                transition: "all 0.2s ease-in-out",
              }}
              fontSize="lg"
              color="white"
              textShadow="1px 1px 3px rgba(0,0,0,0.3)"
            >
              Contact
            </Link>
          </HStack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
