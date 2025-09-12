import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Container,
  VStack,
  Text,
  Icon,
  InputGroup,
  Input,
  InputLeftElement,
  Flex,
  HStack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Badge,
  Button,
} from "@chakra-ui/react";
import {
  FaSearch,
  FaRobot,
  FaShieldAlt,
  FaClock,
  FaMoneyBillWave,
  FaUserShield,
  FaGavel,
  FaQuestionCircle,
  FaLightbulb,
  FaChevronDown,
  FaChevronUp,
  FaUsers,
  FaCog,
  FaGraduationCap,
} from "react-icons/fa";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useState, useRef, useMemo } from "react";

// Create motion components
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionTabs = motion(Tabs);

// Enhanced FAQ data with more comprehensive questions and icons
const faqData = [
  {
    category: "General",
    icon: FaQuestionCircle,
    color: "blue.500",
    gradient: "linear(135deg, blue.500, cyan.500)",
    questions: [
      {
        question: "What is EchoJusticeAI?",
        icon: FaRobot,
        answer:
          "EchoJusticeAI is an advanced AI-powered virtual legal assistant designed to provide accessible, reliable, and comprehensive legal guidance. Our platform leverages cutting-edge artificial intelligence to help users navigate complex legal situations, understand their rights, and make informed decisions about legal matters.",
      },
      {
        question: "How does EchoJusticeAI work?",
        icon: FaCog,
        answer:
          "Our AI system analyzes your legal questions using natural language processing and machine learning algorithms trained on extensive legal databases. It provides personalized responses based on your specific situation, relevant laws, and legal precedents, offering step-by-step guidance and actionable advice.",
      },
      {
        question: "Is EchoJusticeAI available 24/7?",
        icon: FaClock,
        answer:
          "Yes! EchoJusticeAI is available round the clock, providing instant legal assistance whenever you need it. Whether it's a late-night legal question or an urgent matter that requires immediate guidance, our AI assistant is always ready to help.",
      },
      {
        question: "What makes EchoJusticeAI different from other legal services?",
        icon: FaLightbulb,
        answer:
          "EchoJusticeAI combines cutting-edge AI technology with comprehensive legal knowledge, offering instant, personalized, and affordable legal guidance. Unlike traditional legal services, we provide 24/7 availability, transparent pricing, and the ability to handle multiple legal areas simultaneously.",
      },
      {
        question: "Can EchoJusticeAI help with legal documents?",
        icon: FaGraduationCap,
        answer:
          "Absolutely! Our AI can review, analyze, and help draft various legal documents including contracts, agreements, wills, and more. We provide detailed explanations of legal terms and highlight potential issues or areas that need attention.",
      },
      {
        question: "How do I get started with EchoJusticeAI?",
        icon: FaUsers,
        answer:
          "Getting started is simple! Just create a free account, describe your legal situation or question, and our AI will provide immediate assistance. You can ask follow-up questions, request document reviews, or explore our legal resources library.",
      },
      {
        question: "Does EchoJusticeAI support multiple languages?",
        icon: FaQuestionCircle,
        answer:
          "Currently, EchoJusticeAI primarily operates in English, but we're actively expanding to support Spanish, French, and other major languages. Our multilingual support will help make legal assistance accessible to diverse communities.",
      },
    ],
  },
  {
    category: "Privacy & Security",
    icon: FaShieldAlt,
    color: "green.500",
    gradient: "linear(135deg, green.500, teal.500)",
    questions: [
      {
        question: "How secure is my personal information?",
        icon: FaShieldAlt,
        answer:
          "We prioritize your privacy and security above all else. All interactions are protected by industry-leading encryption protocols (AES-256), and we follow strict data protection regulations including GDPR and CCPA. Your personal information is never shared with third parties without your explicit consent.",
      },
      {
        question: "Are my conversations confidential?",
        icon: FaUserShield,
        answer:
          "Absolutely. All conversations with EchoJusticeAI are treated with the highest level of confidentiality. We employ end-to-end encryption and secure data storage practices to ensure your legal discussions remain private and protected.",
      },
      {
        question: "Do you store my legal queries?",
        icon: FaCog,
        answer:
          "We temporarily store encrypted versions of your queries to improve our AI's performance and provide better assistance. However, all personally identifiable information is anonymized, and you can request deletion of your data at any time through your account settings.",
      },
      {
        question: "What data protection standards do you follow?",
        icon: FaGavel,
        answer:
          "We comply with international data protection standards including GDPR, CCPA, and PIPEDA. Our security infrastructure includes regular security audits, penetration testing, and compliance certifications to ensure the highest level of data protection.",
      },
      {
        question: "Can I delete my conversation history?",
        icon: FaUsers,
        answer:
          "Yes, you have full control over your data. You can delete individual conversations, your entire chat history, or request complete account deletion at any time through your privacy settings or by contacting our support team.",
      },
    ],
  },
  {
    category: "Pricing & Plans",
    icon: FaMoneyBillWave,
    color: "purple.500",
    gradient: "linear(135deg, purple.500, pink.500)",
    questions: [
      {
        question: "Is EchoJusticeAI free to use?",
        icon: FaMoneyBillWave,
        answer:
          "We offer a comprehensive free tier that includes basic legal consultations, document reviews, and general legal guidance. For advanced features like unlimited consultations, priority support, and specialized legal areas, we offer affordable premium plans starting at $9.99/month.",
      },
      {
        question: "What's included in the premium plans?",
        icon: FaGraduationCap,
        answer:
          "Premium plans include unlimited AI consultations, access to specialized legal experts, document drafting assistance, priority customer support, advanced legal research tools, and personalized legal action plans. Enterprise plans also include team collaboration features and API access.",
      },
      {
        question: "Can I cancel my subscription anytime?",
        icon: FaClock,
        answer:
          "Yes, you can cancel your subscription at any time without any cancellation fees. Your premium features will remain active until the end of your current billing cycle, and you can always reactivate your subscription later.",
      },
      {
        question: "Do you offer discounts for students or non-profits?",
        icon: FaUsers,
        answer:
          "Yes! We offer special pricing for students, educators, and non-profit organizations. Students receive 50% off premium plans, while qualified non-profits can access our services at significantly reduced rates. Contact us for eligibility verification.",
      },
      {
        question: "What payment methods do you accept?",
        icon: FaShieldAlt,
        answer:
          "We accept all major credit cards, PayPal, Apple Pay, Google Pay, and bank transfers. All payments are processed securely through encrypted channels, and we don't store your payment information on our servers.",
      },
    ],
  },
  {
    category: "Legal Expertise",
    icon: FaGavel,
    color: "orange.500",
    gradient: "linear(135deg, orange.500, red.500)",
    questions: [
      {
        question: "What types of legal issues can EchoJusticeAI help with?",
        icon: FaGavel,
        answer:
          "Our AI covers a wide range of legal areas including family law, personal injury, contract disputes, employment law, real estate, criminal law, business law, immigration, and more. We continuously expand our knowledge base to cover emerging legal areas and jurisdictions.",
      },
      {
        question: "Can EchoJusticeAI replace a human lawyer?",
        icon: FaUsers,
        answer:
          "While EchoJusticeAI provides valuable legal guidance and can handle many routine legal questions, it's designed to complement, not replace, human lawyers. For complex cases, court representation, or specialized legal procedures, we recommend consulting with qualified legal professionals.",
      },
      {
        question: "How accurate is the legal advice provided?",
        icon: FaLightbulb,
        answer:
          "Our AI is trained on comprehensive legal databases and is regularly updated with current laws and regulations. However, laws can be complex and vary by jurisdiction. We always recommend verifying important legal advice with qualified attorneys for critical decisions.",
      },
      {
        question: "Does EchoJusticeAI provide jurisdiction-specific advice?",
        icon: FaQuestionCircle,
        answer:
          "Yes, our AI is trained on laws from multiple jurisdictions and can provide location-specific legal guidance. When you share your location, we tailor our responses to the relevant local, state, and federal laws that apply to your situation.",
      },
      {
        question: "Can I get help with court procedures and deadlines?",
        icon: FaClock,
        answer:
          "Absolutely! EchoJusticeAI can help you understand court procedures, important deadlines, required documents, and filing requirements. We can also set up reminders for critical dates and guide you through the step-by-step process.",
      },
    ],
  },
  {
    category: "Features & Support",
    icon: FaCog,
    color: "teal.500",
    gradient: "linear(135deg, teal.500, blue.500)",
    questions: [
      {
        question: "What advanced features are available?",
        icon: FaCog,
        answer:
          "Advanced features include AI-powered document analysis, legal research assistance, case law citations, contract templates, legal form generation, appointment scheduling with attorneys, and integration with legal databases and court systems.",
      },
      {
        question: "How do I contact human support?",
        icon: FaUsers,
        answer:
          "Our human support team is available via live chat, email, and phone during business hours. Premium subscribers get priority support with faster response times. We also offer video consultations for complex matters.",
      },
      {
        question: "Does EchoJusticeAI integrate with other tools?",
        icon: FaRobot,
        answer:
          "Yes, we offer integrations with popular productivity tools, calendar applications, document management systems, and legal practice management software. Our API allows custom integrations for enterprise clients.",
      },
      {
        question: "Can I save and organize my legal information?",
        icon: FaGraduationCap,
        answer:
          "Our platform includes a comprehensive dashboard where you can save conversations, organize documents, track case progress, set reminders, and maintain a personal legal library. Everything is securely stored and easily searchable.",
      },
    ],
  },
];

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const [expandedItems, setExpandedItems] = useState({});
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  // Filter FAQs based on search term
  const filteredFAQs = useMemo(() => {
    if (!searchTerm) return faqData;

    return faqData
      .map((category) => ({
        ...category,
        questions: category.questions.filter(
          (faq) =>
            faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      }))
      .filter((category) => category.questions.length > 0);
  }, [searchTerm]);

  // Animation variants
  const animationVariants = useMemo(
    () => ({
      containerVariants: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.1,
          },
        },
      },
      itemVariants: {
        hidden: {
          opacity: 0,
          y: 30,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
          },
        },
      },
      titleVariants: {
        hidden: {
          opacity: 0,
          y: -50,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 120,
            damping: 12,
          },
        },
      },
    }),
    []
  );

  const toggleExpanded = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setExpandedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <Box
      id="faq"
      ref={ref}
      py={{ base: 16, md: 20, lg: 24 }}
      position="relative"
      bg="gray.50"
      overflow="hidden"
    >
      {/* Background Effects */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        opacity={0.03}
        zIndex={1}
        background="radial-gradient(circle at 30% 70%, rgba(56,178,172,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(129,140,248,0.3) 0%, transparent 50%)"
      />

      <Container maxW="1000px" position="relative" zIndex={2}>
        <MotionBox
          variants={animationVariants.containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Enhanced Header */}
          <VStack spacing={6} mb={12} textAlign="center">
            <MotionHeading
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="800"
              color="gray.800"
              letterSpacing="tight"
              variants={animationVariants.titleVariants}
            >
              Frequently Asked{" "}
              <Box
                as="span"
                bgGradient="linear(to-r, teal.500, cyan.400)"
                bgClip="text"
                position="relative"
              >
                Questions
              </Box>
            </MotionHeading>

            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.600"
              maxW="700px"
              lineHeight="relaxed"
            >
              Find answers to common questions about EchoJusticeAI and how we can help with your legal needs
            </Text>

            {/* Search Bar */}
            <MotionBox
              variants={animationVariants.itemVariants}
              w={{ base: "100%", md: "500px" }}
            >
              <InputGroup size="lg">
                <InputLeftElement pointerEvents="none">
                  <Icon as={FaSearch} color="gray.400" />
                </InputLeftElement>
                <Input
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  bg="white"
                  borderRadius="xl"
                  border="2px solid"
                  borderColor="gray.200"
                  fontSize="md"
                  _focus={{
                    borderColor: "teal.400",
                    boxShadow: "0 0 0 1px teal.400",
                  }}
                  _hover={{
                    borderColor: "gray.300",
                  }}
                />
              </InputGroup>
            </MotionBox>
          </VStack>

          {/* Enhanced Tabs */}
          <MotionTabs
            index={activeTab}
            onChange={setActiveTab}
            variants={animationVariants.itemVariants}
            isLazy
          >
            <TabList
              bg="white"
              borderRadius="2xl"
              p={3}
              border="none"
              boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
              overflowX="auto"
              spacing={2}
              css={{
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                scrollbarWidth: "none",
              }}
              justifyContent="center"
              flexWrap="wrap"
            >
              {filteredFAQs.map((category, index) => (
                <Tab
                  key={index}
                  borderRadius="xl"
                  fontWeight="600"
                  fontSize="md"
                  color="gray.600"
                  flex="1"
                  minW="fit-content"
                  maxW="200px"
                  _selected={{
                    color: "white",
                    bgGradient: category.gradient,
                    transform: "translateY(-1px)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  }}
                  _hover={{
                    color: category.color,
                    bg: "gray.50",
                    transform: "translateY(-1px)",
                  }}
                  transition="all 0.2s ease"
                  whiteSpace="nowrap"
                  px={6}
                  py={4}
                  mx={1}
                  my={1}
                >
                  <HStack spacing={3}>
                    <Icon as={category.icon} boxSize={4} />
                    <Text>{category.category}</Text>
                    <Badge
                      fontSize="xs"
                      borderRadius="full"
                      px={2}
                      colorScheme={
                        activeTab === index ? "whiteAlpha" : category.color.split(".")[0]
                      }
                      variant={activeTab === index ? "solid" : "subtle"}
                      minW="20px"
                    >
                      {category.questions.length}
                    </Badge>
                  </HStack>
                </Tab>
              ))}
            </TabList>

            <TabPanels mt={8}>
              {filteredFAQs.map((category, categoryIndex) => (
                <TabPanel key={categoryIndex} p={0}>
                  <VStack spacing={4} align="stretch">
                    {category.questions.map((faq, questionIndex) => {
                      const key = `${categoryIndex}-${questionIndex}`;
                      const isExpanded = expandedItems[key];

                      return (
                        <MotionBox
                          key={questionIndex}
                          bg="white"
                          borderRadius="xl"
                          overflow="hidden"
                          boxShadow="0 2px 10px rgba(0, 0, 0, 0.05)"
                          border="1px solid"
                          borderColor="gray.100"
                          transition="all 0.2s ease"
                          _hover={{
                            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                            borderColor: "gray.200",
                          }}
                        >
                          <Button
                            onClick={() => toggleExpanded(categoryIndex, questionIndex)}
                            w="100%"
                            h="auto"
                            p={6}
                            bg="transparent"
                            _hover={{ bg: "gray.25" }}
                            _active={{ bg: "gray.50" }}
                            borderRadius="xl"
                            justifyContent="space-between"
                            rightIcon={
                              <Icon
                                as={isExpanded ? FaChevronUp : FaChevronDown}
                                color={category.color}
                                transition="transform 0.2s ease"
                                boxSize={5}
                              />
                            }
                          >
                            <HStack spacing={4} flex="1" textAlign="left">
                              <Box
                                p={2}
                                borderRadius="lg"
                                bg={`${category.color.split('.')[0]}.50`}
                                flexShrink={0}
                              >
                                <Icon
                                  as={faq.icon}
                                  color={category.color}
                                  boxSize={5}
                                />
                              </Box>
                              <Text
                                fontSize="lg"
                                fontWeight="600"
                                color="gray.800"
                                textAlign="left"
                              >
                                {faq.question}
                              </Text>
                            </HStack>
                          </Button>

                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                              >
                                <Box px={6} pb={6}>
                                  <HStack align="start" spacing={4}>
                                    <Box
                                      p={2}
                                      borderRadius="lg"
                                      bg={`${category.color.split('.')[0]}.50`}
                                      flexShrink={0}
                                      mt={1}
                                    >
                                      <Icon
                                        as={faq.icon}
                                        color={category.color}
                                        boxSize={4}
                                      />
                                    </Box>
                                    <Text
                                      color="gray.600"
                                      lineHeight="tall"
                                      fontSize="md"
                                      flex="1"
                                    >
                                      {faq.answer}
                                    </Text>
                                  </HStack>
                                </Box>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </MotionBox>
                      );
                    })}
                  </VStack>
                </TabPanel>
              ))}
            </TabPanels>
          </MotionTabs>

          {/* No Results Message */}
          {filteredFAQs.length === 0 && searchTerm && (
            <MotionBox
              variants={animationVariants.itemVariants}
              textAlign="center"
              py={12}
            >
              <VStack spacing={4}>
                <Icon as={FaQuestionCircle} w={16} h={16} color="gray.400" />
                <Heading fontSize="xl" color="gray.600">
                  No FAQs found
                </Heading>
                <Text color="gray.500">
                  Try searching with different keywords or browse our categories
                  above
                </Text>
              </VStack>
            </MotionBox>
          )}

          {/* Enhanced Contact Section */}
          <MotionBox
            variants={animationVariants.itemVariants}
            mt={16}
            p={8}
            bg="white"
            borderRadius="3xl"
            textAlign="center"
            boxShadow="0 10px 30px rgba(0, 0, 0, 0.08)"
            position="relative"
            overflow="hidden"
            _before={{
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              bgGradient: "linear(to-r, teal.500, cyan.400)",
            }}
          >
            <VStack spacing={6}>
              <Icon as={FaLightbulb} w={12} h={12} color="teal.500" />
              <Heading fontSize="2xl" color="gray.800" fontWeight="700">
                Still have questions?
              </Heading>
              <Text color="gray.600" maxW="500px" fontSize="lg">
                Can&apos;t find what you&apos;re looking for? Our AI assistant is ready to help with personalized answers to your specific legal questions.
              </Text>
              <Button
                size="lg"
                bgGradient="linear(to-r, teal.500, cyan.400)"
                color="white"
                fontWeight="700"
                borderRadius="xl"
                px={8}
                py={6}
                h="auto"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "0 10px 25px rgba(56, 178, 172, 0.4)",
                }}
                _active={{
                  transform: "translateY(0px)",
                }}
                transition="all 0.2s ease"
              >
                Ask EchoJusticeAI →
              </Button>
            </VStack>
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default FAQ;
