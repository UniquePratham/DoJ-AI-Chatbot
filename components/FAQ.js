import { Box, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";

const FAQ = () => {
  return (
    <Box id="faq" py={20} bg="white" textAlign="center">
      <Heading mb={10}>Frequently Asked Questions</Heading>
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">What is JusticeAI?</Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>JusticeAI is an AI-powered virtual legal assistant...</AccordionPanel>
        </AccordionItem>
        {/* Add more FAQs as needed */}
      </Accordion>
    </Box>
  );
};

export default FAQ;
