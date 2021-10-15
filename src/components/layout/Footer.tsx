import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center">
      <Text>
        {new Date().getFullYear()} -{" "}
        <Link href="https://genderize.io" isExternal>
          pwrd b genderize.io
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
