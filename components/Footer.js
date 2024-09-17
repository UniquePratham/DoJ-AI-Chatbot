// components/Footer.js
import { Box, Text, Stack } from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <Box
        py={10}
        bgGradient="linear(to-r, teal.700, cyan.200)"
        color="white"
        textAlign="center"
      >
        <Stack
          direction={["column", "row"]}
          spacing={4}
          justify="center"
          align="center"
        >
          <Link href="#product">Product</Link>
          <Link href="#about">About</Link>
          <Link href="#faq">FAQ</Link>
          <Link href="#contact">Contact</Link>
        </Stack>
      </Box>
      <Box id="footer" bgGradient="linear(to-r, teal.200, cyan.700)"color="white" py={4} textAlign="center">
        <Text>Department of Justice, India 2024.</Text>
        <Text mt={4}>© 2024 DoJAI. All rights reserved.</Text>
      </Box>
    </>
  );
};

export default Footer;
