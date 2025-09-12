// components/Footer.js
import { 
  Box, 
  Text, 
  Stack, 
  Container,
  VStack,
  HStack,
  Flex,
  Heading,
  Link,
  Icon,
  Divider,
  SimpleGrid,
  Button,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { 
  FaTwitter, 
  FaFacebook, 
  FaLinkedin, 
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGavel,
  FaShieldAlt,
  FaUsers,
  FaChevronUp,
  FaHeart,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import NextLink from "next/link";

// Create motion components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const isMobile = useBreakpointValue({ base: true, md: false });

  // Footer links data
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Examples", href: "#examples" },
        { label: "Demonstration", href: "#demonstration" },
        { label: "Pricing", href: "#pricing" },
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Our Mission", href: "#mission" },
        { label: "Legal Team", href: "#team" },
        { label: "Careers", href: "#careers" },
      ]
    },
    {
      title: "Support",
      links: [
        { label: "FAQ", href: "#faq" },
        { label: "Contact", href: "#contact" },
        { label: "Help Center", href: "#help" },
        { label: "Documentation", href: "#docs" },
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#privacy" },
        { label: "Terms of Service", href: "#terms" },
        { label: "Cookie Policy", href: "#cookies" },
        { label: "Disclaimer", href: "#disclaimer" },
      ]
    }
  ];

  const socialLinks = [
    { icon: FaTwitter, href: "#twitter", label: "Twitter", color: "twitter" },
    { icon: FaFacebook, href: "#facebook", label: "Facebook", color: "facebook" },
    { icon: FaLinkedin, href: "#linkedin", label: "LinkedIn", color: "linkedin" },
    { icon: FaInstagram, href: "#instagram", label: "Instagram", color: "pink" },
  ];

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Box as="footer" position="relative" overflow="hidden">
      {/* Main Footer Section */}
      <Box
        py={{ base: 12, md: 16, lg: 20 }}
        bgGradient="linear(135deg, gray.900, gray.800)"
        color="white"
        position="relative"
      >
        {/* Background Effects */}
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

        <Container maxW="1200px" position="relative" zIndex={2}>
          <VStack spacing={{ base: 12, md: 16 }}>
            {/* Top Section */}
            <MotionFlex
              direction={{ base: "column", lg: "row" }}
              justify="space-between"
              align={{ base: "center", lg: "flex-start" }}
              w="100%"
              gap={{ base: 8, lg: 12 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Brand Section */}
              <VStack
                spacing={6}
                align={{ base: "center", lg: "flex-start" }}
                maxW="400px"
              >
                <HStack spacing={3}>
                  <Box
                    p={3}
                    borderRadius="xl"
                    bgGradient="linear(135deg, teal.500, cyan.500)"
                  >
                    <Icon as={FaGavel} w={8} h={8} />
                  </Box>
                  <Heading
                    fontSize="2xl"
                    fontWeight="800"
                    bgGradient="linear(to-r, teal.300, cyan.300)"
                    bgClip="text"
                  >
                    EchoJusticeAI
                  </Heading>
                </HStack>

                <Text
                  color="gray.300"
                  lineHeight="tall"
                  textAlign={{ base: "center", lg: "left" }}
                  fontSize="md"
                >
                  Empowering justice through artificial intelligence. Making legal assistance accessible, affordable, and available to everyone, everywhere.
                </Text>

                {/* Social Links */}
                <HStack spacing={4}>
                  {socialLinks.map((social, index) => (
                    <IconButton
                      key={index}
                      as={NextLink}
                      href={social.href}
                      aria-label={social.label}
                      icon={<Icon as={social.icon} />}
                      size="lg"
                      borderRadius="xl"
                      bg="rgba(255, 255, 255, 0.1)"
                      color="gray.300"
                      _hover={{
                        bg: `${social.color}.500`,
                        color: "white",
                        transform: "translateY(-2px)",
                      }}
                      transition="all 0.2s ease"
                    />
                  ))}
                </HStack>

                {/* Contact Info */}
                <VStack spacing={3} align={{ base: "center", lg: "flex-start" }}>
                  <HStack spacing={3} color="gray.300">
                    <Icon as={FaEnvelope} />
                    <Text fontSize="sm">support@echojusticeai.gov.in</Text>
                  </HStack>
                  <HStack spacing={3} color="gray.300">
                    <Icon as={FaPhone} />
                    <Text fontSize="sm">+91 1800-XXX-XXXX</Text>
                  </HStack>
                  <HStack spacing={3} color="gray.300">
                    <Icon as={FaMapMarkerAlt} />
                    <Text fontSize="sm">New Delhi, India</Text>
                  </HStack>
                </VStack>
              </VStack>

              {/* Links Section */}
              <SimpleGrid
                columns={{ base: 2, md: 4 }}
                spacing={{ base: 8, md: 12 }}
                flex="1"
                w="100%"
              >
                {footerSections.map((section, sectionIndex) => (
                  <VStack
                    key={sectionIndex}
                    spacing={4}
                    align={{ base: "center", lg: "flex-start" }}
                  >
                    <Heading
                      fontSize="lg"
                      fontWeight="700"
                      color="white"
                      textAlign={{ base: "center", lg: "left" }}
                    >
                      {section.title}
                    </Heading>
                    <VStack spacing={3} align={{ base: "center", lg: "flex-start" }}>
                      {section.links.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          as={NextLink}
                          href={link.href}
                          color="gray.400"
                          fontSize="md"
                          fontWeight="500"
                          textAlign={{ base: "center", lg: "left" }}
                          onMouseEnter={() => setHoveredLink(`${sectionIndex}-${linkIndex}`)}
                          onMouseLeave={() => setHoveredLink(null)}
                          _hover={{
                            color: "teal.300",
                            textDecoration: "none",
                            transform: "translateX(4px)",
                          }}
                          transition="all 0.2s ease"
                          position="relative"
                          _before={hoveredLink === `${sectionIndex}-${linkIndex}` ? {
                            content: '""',
                            position: "absolute",
                            left: "-8px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            width: "4px",
                            height: "4px",
                            bg: "teal.400",
                            borderRadius: "full",
                          } : {}}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </VStack>
                  </VStack>
                ))}
              </SimpleGrid>
            </MotionFlex>

            <Divider borderColor="gray.600" />

            {/* Newsletter Section */}
            <MotionBox
              w="100%"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <VStack spacing={6} textAlign="center">
                <VStack spacing={3}>
                  <Heading fontSize="xl" color="white">
                    Stay Updated
                  </Heading>
                  <Text color="gray.400" maxW="500px">
                    Get the latest updates on legal technology and AI advancements in the justice system.
                  </Text>
                </VStack>
                
                <HStack spacing={4} maxW="400px" w="100%">
                  <Box
                    flex="1"
                    bg="rgba(255, 255, 255, 0.1)"
                    borderRadius="xl"
                    border="1px solid rgba(255, 255, 255, 0.2)"
                    p={3}
                    _focus={{
                      borderColor: "teal.400",
                      boxShadow: "0 0 0 1px teal.400",
                    }}
                  >
                    <Text color="gray.400" fontSize="sm">
                      Enter your email
                    </Text>
                  </Box>
                  <Button
                    bgGradient="linear(to-r, teal.500, cyan.500)"
                    color="white"
                    borderRadius="xl"
                    px={6}
                    _hover={{
                      bgGradient: "linear(to-r, teal.600, cyan.600)",
                      transform: "translateY(-1px)",
                    }}
                    transition="all 0.2s ease"
                  >
                    Subscribe
                  </Button>
                </HStack>
              </VStack>
            </MotionBox>
          </VStack>
        </Container>
      </Box>

      {/* Bottom Copyright Section */}
      <Box
        py={6}
        bg="gray.900"
        borderTop="1px solid"
        borderColor="gray.700"
        position="relative"
      >
        <Container maxW="1200px">
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
            gap={4}
          >
            <VStack spacing={2} align={{ base: "center", md: "flex-start" }}>
              <HStack spacing={2} color="gray.400" fontSize="sm">
                <Icon as={FaGavel} />
                <Text>Department of Justice, India</Text>
              </HStack>
              <HStack spacing={1} color="gray.500" fontSize="sm">
                <Text>© 2024 EchoJusticeAI. Made with</Text>
                <Icon as={FaHeart} color="red.400" />
                <Text>for justice. All rights reserved.</Text>
              </HStack>
            </VStack>

            <HStack spacing={6} color="gray.400" fontSize="sm">
              <HStack spacing={2}>
                <Icon as={FaShieldAlt} color="green.400" />
                <Text>Secure & Private</Text>
              </HStack>
              <HStack spacing={2}>
                <Icon as={FaUsers} color="blue.400" />
                <Text>10,000+ Users</Text>
              </HStack>
            </HStack>

            {/* Scroll to Top Button */}
            <IconButton
              aria-label="Scroll to top"
              icon={<Icon as={FaChevronUp} />}
              size="md"
              borderRadius="xl"
              bg="rgba(56, 178, 172, 0.2)"
              color="teal.300"
              _hover={{
                bg: "teal.500",
                color: "white",
                transform: "translateY(-2px)",
              }}
              onClick={scrollToTop}
              transition="all 0.2s ease"
            />
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
