import {
    Box,
    Heading,
    Text,
    Button,
    Container,
    VStack,
    HStack,
    SimpleGrid,
    Icon,
    Badge,
    Flex,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useBreakpointValue,
} from "@chakra-ui/react";
import {
    FaPlay,
    FaRocket,
    FaRobot,
    FaComments,
    FaLightbulb,
    FaChevronRight,
    FaVideo,
    FaMagic,
    FaHandPointer,
    FaArrowRight,
    FaStar,
    FaUsers,
    FaShieldAlt,
    FaMobile,
    FaClock,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useState, useRef, useMemo, useCallback } from "react";

// Create motion components
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);
const MotionFlex = motion(Flex);

const CallToAction = () => {
    const [selectedDemo, setSelectedDemo] = useState('video');
    const [isPlaying, setIsPlaying] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.1 });

    // Responsive values
    const buttonSize = useBreakpointValue({ base: "lg", md: "xl" });

    // Demo options data
    const demoOptions = useMemo(() => [
        {
            id: 'video',
            title: 'Watch Demo Video',
            description: 'See EchoJusticeAI in action with a walkthrough',
            icon: FaVideo,
            color: 'blue.500',
            gradient: 'linear(135deg, blue.500, cyan.500)',
            badge: 'Popular'
        },
        {
            id: 'interactive',
            title: 'Try Interactive Demo',
            description: 'Experience the chatbot with real legal scenarios',
            icon: FaRobot,
            color: 'teal.500',
            gradient: 'linear(135deg, teal.500, green.500)',
            badge: 'Recommended'
        },
        {
            id: 'live',
            title: 'Live Chat Preview',
            description: 'Chat with EchoJusticeAI assistant right now',
            icon: FaComments,
            color: 'purple.500',
            gradient: 'linear(135deg, purple.500, pink.500)',
            badge: 'New'
        }
    ], []);

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
        itemVariants: {
            hidden: {
                opacity: 0,
                y: 30,
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
                    duration: 0.6,
                },
            },
        },
        cardVariants: {
            hidden: {
                opacity: 0,
                x: -50,
                rotateY: -15,
            },
            visible: {
                opacity: 1,
                x: 0,
                rotateY: 0,
                transition: {
                    type: "spring",
                    stiffness: 120,
                    damping: 20,
                    duration: 0.8,
                },
            },
        },
    }), []);

    // Event handlers
    const handleDemoSelect = useCallback((demoId) => {
        setSelectedDemo(demoId);
        if (demoId === 'live') {
            onOpen();
        }
    }, [onOpen]);

    const handlePlayDemo = useCallback(() => {
        setIsPlaying(true);
        console.log('Playing demo video');
    }, []);

    const handleChatbotClick = useCallback(() => {
        console.log("Opening chatbot...");
        // Add chatbot opening logic here
    }, []);

    return (
        <Box ref={ref} position="relative" overflow="hidden">
            {/* Demo Section */}
            <Box
                py={{ base: 16, md: 20, lg: 24 }}
                position="relative"
                bg="gray.900"
            >
                {/* Background decoration */}
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    width="100%"
                    height="100%"
                    opacity={0.03}
                    background="radial-gradient(circle at 20% 80%, rgba(56,178,172,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(129,140,248,0.3) 0%, transparent 50%)"
                    zIndex={1}
                />

                <Container maxW="1400px" position="relative" zIndex={2}>
                    <MotionBox
                        variants={animationVariants.containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {/* Demo Header Section */}
                        <VStack spacing={8} mb={{ base: 12, md: 16 }} textAlign="center">
                            <MotionHeading
                                fontSize={{ base: "3xl", md: "4xl", lg: "5xl", xl: "6xl" }}
                                fontWeight="900"
                                color="white"
                                letterSpacing="tight"
                                lineHeight="shorter"
                                variants={animationVariants.itemVariants}
                            >
                                See{" "}
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
                                    EchoJusticeAI
                                </Box>{" "}
                                in Action
                            </MotionHeading>

                            <MotionText
                                fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                                color="gray.300"
                                maxW="800px"
                                fontWeight="500"
                                variants={animationVariants.itemVariants}
                            >
                                Experience the power of AI-driven legal assistance through our interactive demonstrations and live previews
                            </MotionText>
                        </VStack>

                        {/* Demo Options Grid */}
                        <SimpleGrid
                            columns={{ base: 1, md: 3 }}
                            spacing={{ base: 6, md: 8, lg: 10 }}
                            mb={{ base: 12, md: 16 }}
                        >
                            {demoOptions.map((option, index) => (
                                <MotionBox
                                    key={option.id}
                                    variants={animationVariants.cardVariants}
                                    whileHover={{
                                        y: -8,
                                        scale: 1.02,
                                        transition: {
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 25,
                                        },
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => handleDemoSelect(option.id)}
                                    cursor="pointer"
                                    position="relative"
                                >
                                    <Box
                                        bg="rgba(255, 255, 255, 0.08)"
                                        backdropFilter="blur(20px)"
                                        border="1px solid rgba(255, 255, 255, 0.1)"
                                        borderRadius="3xl"
                                        p={8}
                                        boxShadow="0 10px 40px rgba(0, 0, 0, 0.3)"
                                        position="relative"
                                        overflow="hidden"
                                        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                                        _hover={{
                                            boxShadow: "0 20px 60px rgba(56, 178, 172, 0.2)",
                                            transform: "translateY(-4px)",
                                            bg: "rgba(255, 255, 255, 0.12)",
                                        }}
                                        _before={{
                                            content: '""',
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            height: "4px",
                                            bgGradient: option.gradient,
                                        }}
                                    >
                                        {option.badge && (
                                            <Badge
                                                position="absolute"
                                                top={4}
                                                right={4}
                                                colorScheme={option.color.split('.')[0]}
                                                variant="solid"
                                                borderRadius="full"
                                                px={3}
                                                py={1}
                                                fontSize="xs"
                                                fontWeight="bold"
                                            >
                                                {option.badge}
                                            </Badge>
                                        )}

                                        <VStack spacing={6} align="stretch">
                                            <Box position="relative" alignSelf="center">
                                                <Box
                                                    position="absolute"
                                                    top="50%"
                                                    left="50%"
                                                    transform="translate(-50%, -50%)"
                                                    width="80px"
                                                    height="80px"
                                                    borderRadius="50%"
                                                    bgGradient={option.gradient}
                                                    opacity={0.2}
                                                    filter="blur(15px)"
                                                />
                                                <Icon
                                                    as={option.icon}
                                                    w={12}
                                                    h={12}
                                                    color="white"
                                                    position="relative"
                                                />
                                            </Box>

                                            <VStack spacing={3} textAlign="center">
                                                <Heading fontSize="xl" fontWeight="700" color="white">
                                                    {option.title}
                                                </Heading>
                                                <Text fontSize="md" color="gray.300" lineHeight="tall">
                                                    {option.description}
                                                </Text>
                                            </VStack>

                                            <Button
                                                bgGradient={option.gradient}
                                                color="white"
                                                size="md"
                                                borderRadius="xl"
                                                fontWeight="600"
                                                rightIcon={<FaChevronRight />}
                                                _hover={{
                                                    transform: "translateY(-1px)",
                                                    boxShadow: "0 8px 25px rgba(56, 178, 172, 0.4)",
                                                }}
                                                transition="all 0.2s ease"
                                            >
                                                Try Now
                                            </Button>
                                        </VStack>
                                    </Box>
                                </MotionBox>
                            ))}
                        </SimpleGrid>

                        {/* Main Demo Section */}
                        <MotionBox
                            variants={animationVariants.itemVariants}
                            bg="rgba(255, 255, 255, 0.08)"
                            backdropFilter="blur(20px)"
                            border="1px solid rgba(255, 255, 255, 0.1)"
                            borderRadius="3xl"
                            overflow="hidden"
                            boxShadow="0 25px 50px rgba(0, 0, 0, 0.3)"
                        >
                            <Flex
                                direction={{ base: "column", lg: "row" }}
                                minH="500px"
                            >
                                {/* Video/Demo Preview */}
                                <Box
                                    flex="1"
                                    bg="gray.800"
                                    position="relative"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    minH={{ base: "300px", lg: "500px" }}
                                >
                                    {!isPlaying ? (
                                        <VStack spacing={6} color="white" textAlign="center">
                                            <MotionBox
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={handlePlayDemo}
                                                cursor="pointer"
                                            >
                                                <Box
                                                    w={20}
                                                    h={20}
                                                    borderRadius="50%"
                                                    bg="rgba(56, 178, 172, 0.2)"
                                                    display="flex"
                                                    alignItems="center"
                                                    justifyContent="center"
                                                    border="3px solid rgba(56, 178, 172, 0.5)"
                                                    position="relative"
                                                    _before={{
                                                        content: '""',
                                                        position: "absolute",
                                                        width: "100%",
                                                        height: "100%",
                                                        borderRadius: "50%",
                                                        border: "3px solid rgba(56, 178, 172, 0.3)",
                                                        animation: "pulse 2s infinite",
                                                    }}
                                                >
                                                    <Icon as={FaPlay} w={8} h={8} color="teal.300" ml={1} />
                                                </Box>
                                            </MotionBox>

                                            <VStack spacing={2}>
                                                <Heading fontSize="2xl" fontWeight="700" color="white">
                                                    Watch EchoJusticeAI Demo
                                                </Heading>
                                                <Text color="gray.300" fontSize="lg">
                                                    See how AI transforms legal assistance
                                                </Text>
                                            </VStack>
                                        </VStack>
                                    ) : (
                                        <Box
                                            width="100%"
                                            height="100%"
                                            bg="gray.800"
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center"
                                            color="white"
                                        >
                                            <Text fontSize="xl">Demo Video Playing...</Text>
                                        </Box>
                                    )}
                                </Box>

                                {/* Features Highlight */}
                                <VStack
                                    flex="1"
                                    spacing={8}
                                    p={{ base: 8, lg: 12 }}
                                    justify="center"
                                    bg="rgba(255, 255, 255, 0.05)"
                                >
                                    <VStack spacing={6} align="stretch">
                                        <Heading
                                            fontSize="2xl"
                                            fontWeight="800"
                                            color="white"
                                            textAlign="center"
                                        >
                                            What You&apos;ll Experience
                                        </Heading>

                                        {[
                                            {
                                                icon: FaLightbulb,
                                                title: "Intelligent Responses",
                                                description: "AI that understands legal context and provides relevant answers"
                                            },
                                            {
                                                icon: FaMagic,
                                                title: "Natural Conversation",
                                                description: "Chat naturally as if speaking with a legal expert"
                                            },
                                            {
                                                icon: FaHandPointer,
                                                title: "Interactive Guidance",
                                                description: "Step-by-step assistance for your legal questions"
                                            }
                                        ].map((feature, index) => (
                                            <HStack
                                                key={index}
                                                spacing={4}
                                                p={4}
                                                borderRadius="xl"
                                                bg="rgba(255, 255, 255, 0.08)"
                                                backdropFilter="blur(10px)"
                                                border="1px solid rgba(255, 255, 255, 0.1)"
                                                boxShadow="0 4px 15px rgba(0, 0, 0, 0.2)"
                                                transition="all 0.3s ease"
                                                _hover={{
                                                    transform: "translateY(-2px)",
                                                    boxShadow: "0 8px 25px rgba(56, 178, 172, 0.2)",
                                                }}
                                            >
                                                <Box
                                                    w={12}
                                                    h={12}
                                                    borderRadius="xl"
                                                    bgGradient="linear(135deg, teal.500, cyan.500)"
                                                    display="flex"
                                                    alignItems="center"
                                                    justifyContent="center"
                                                    flexShrink={0}
                                                >
                                                    <Icon as={feature.icon} w={6} h={6} color="white" />
                                                </Box>

                                                <VStack align="start" spacing={1}>
                                                    <Text fontWeight="700" color="white" fontSize="md">
                                                        {feature.title}
                                                    </Text>
                                                    <Text fontSize="sm" color="gray.300">
                                                        {feature.description}
                                                    </Text>
                                                </VStack>
                                            </HStack>
                                        ))}
                                    </VStack>

                                    <MotionButton
                                        size="lg"
                                        bgGradient="linear(to-r, teal.500, cyan.500)"
                                        color="white"
                                        fontWeight="700"
                                        borderRadius="xl"
                                        px={8}
                                        py={6}
                                        h="auto"
                                        rightIcon={<FaRobot />}
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: "0 10px 30px rgba(56, 178, 172, 0.4)"
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={onOpen}
                                    >
                                        Start Interactive Demo
                                    </MotionButton>
                                </VStack>
                            </Flex>
                        </MotionBox>
                    </MotionBox>
                </Container>
            </Box>

            {/* Main CTA Section */}
            <Box
                py={{ base: 16, md: 20, lg: 24 }}
                position="relative"
                bg="gray.900"
            >
                <Container maxW="1200px" position="relative" zIndex={2}>
                    <MotionBox
                        variants={animationVariants.containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <VStack spacing={12} textAlign="center">
                            {/* Main CTA Header */}
                            <VStack spacing={6}>
                                <MotionBox variants={animationVariants.itemVariants}>
                                    <Box
                                        p={4}
                                        borderRadius="2xl"
                                        bgGradient="linear(135deg, teal.500, cyan.500)"
                                        color="white"
                                        display="inline-block"
                                        boxShadow="0 8px 25px rgba(56, 178, 172, 0.3)"
                                    >
                                        <Icon as={FaRocket} w={8} h={8} />
                                    </Box>
                                </MotionBox>

                                <MotionHeading
                                    fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                                    fontWeight="900"
                                    color="white"
                                    letterSpacing="tight"
                                    lineHeight="shorter"
                                    variants={animationVariants.itemVariants}
                                >
                                    Ready to Get Started?
                                </MotionHeading>

                                <Text
                                    fontSize={{ base: "lg", md: "xl" }}
                                    color="gray.300"
                                    maxW="600px"
                                    fontWeight="500"
                                >
                                    Experience the power of AI-driven legal assistance. Try our chatbot now and get instant legal guidance.
                                </Text>
                            </VStack>

                            {/* Main CTA Button */}
                            <MotionButton
                                variants={animationVariants.itemVariants}
                                size={buttonSize}
                                bgGradient="linear(to-r, teal.500, cyan.500)"
                                color="white"
                                fontWeight="700"
                                fontSize="lg"
                                px={12}
                                py={8}
                                h="auto"
                                borderRadius="2xl"
                                rightIcon={<FaArrowRight />}
                                boxShadow="0 10px 30px rgba(56, 178, 172, 0.4)"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 15px 40px rgba(56, 178, 172, 0.5)",
                                }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleChatbotClick}
                                _hover={{
                                    bgGradient: "linear(to-r, teal.600, cyan.600)",
                                    transform: "translateY(-2px)",
                                }}
                                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                            >
                                Try EchoJusticeAI Chatbot Now
                            </MotionButton>

                            {/* Trust Indicators */}
                            <MotionFlex
                                variants={animationVariants.itemVariants}
                                direction={{ base: "column", sm: "row" }}
                                gap={8}
                                justify="center"
                                align="center"
                                wrap="wrap"
                            >
                                <HStack spacing={2} color="gray.400">
                                    <Icon as={FaUsers} color="teal.400" />
                                    <Text fontSize="sm" fontWeight="600">10,000+ Users</Text>
                                </HStack>
                                <HStack spacing={2} color="gray.400">
                                    <Icon as={FaStar} color="yellow.400" />
                                    <Text fontSize="sm" fontWeight="600">4.9/5 Rating</Text>
                                </HStack>
                                <HStack spacing={2} color="gray.400">
                                    <Icon as={FaShieldAlt} color="green.400" />
                                    <Text fontSize="sm" fontWeight="600">100% Secure</Text>
                                </HStack>
                            </MotionFlex>
                        </VStack>
                    </MotionBox>
                </Container>
            </Box>

            {/* Mobile App Coming Soon Section */}
            <Box py={{ base: 16, md: 20 }} bg="gray.900" position="relative">
                <Container maxW="1200px">
                    <MotionBox
                        variants={animationVariants.containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <VStack spacing={8} textAlign="center">
                            <MotionBox variants={animationVariants.itemVariants}>
                                <Icon as={FaMobile} w={16} h={16} color="gray.500" />
                            </MotionBox>

                            <VStack spacing={4}>
                                <MotionHeading
                                    fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                                    fontWeight="800"
                                    color="white"
                                    variants={animationVariants.itemVariants}
                                >
                                    Mobile App Coming Soon
                                </MotionHeading>

                                <Text
                                    fontSize={{ base: "lg", md: "xl" }}
                                    color="gray.400"
                                    maxW="500px"
                                    lineHeight="tall"
                                >
                                    We&apos;re working hard to bring EchoJusticeAI to your mobile device. Stay tuned for updates!
                                </Text>
                            </VStack>

                            <HStack spacing={6} color="gray.500">
                                <HStack spacing={2}>
                                    <Icon as={FaClock} />
                                    <Text fontSize="sm" fontWeight="600">Coming Q2 2024</Text>
                                </HStack>
                                <HStack spacing={2}>
                                    <Icon as={FaShieldAlt} />
                                    <Text fontSize="sm" fontWeight="600">iOS & Android</Text>
                                </HStack>
                            </HStack>
                        </VStack>
                    </MotionBox>
                </Container>
            </Box>

            {/* Interactive Demo Modal */}
            <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
                <ModalOverlay backdropFilter="blur(10px)" />
                <ModalContent borderRadius="3xl" overflow="hidden">
                    <ModalHeader
                        bg="gray.900"
                        color="white"
                        fontSize="2xl"
                        fontWeight="800"
                    >
                        EchoJusticeAI Interactive Demo
                    </ModalHeader>
                    <ModalCloseButton color="white" />
                    <ModalBody p={0} bg="gray.50">
                        <Box
                            height="500px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            bg="white"
                        >
                            <VStack spacing={6}>
                                <Icon as={FaRobot} w={16} h={16} color="teal.500" />
                                <Heading fontSize="xl" color="gray.700">
                                    Interactive Demo Coming Soon
                                </Heading>
                                <Text color="gray.600" textAlign="center">
                                    Experience the full power of EchoJusticeAI with our interactive demo
                                </Text>
                            </VStack>
                        </Box>
                    </ModalBody>
                    <ModalFooter bg="gray.50">
                        <Button
                            colorScheme="teal"
                            mr={3}
                            onClick={onClose}
                            borderRadius="xl"
                        >
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            {/* CSS for pulse animation */}
            <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.7;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
        </Box>
    );
};

export default CallToAction;
