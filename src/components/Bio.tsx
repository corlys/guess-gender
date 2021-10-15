import { HStack, Flex, Text, Icon } from "@chakra-ui/react";
import { FaMale, FaFemale } from "react-icons/fa";

import { GenderType } from "types";

const Bio = ({ gender }: { gender: GenderType }) => {
  return (
    <Flex align="center" justify="center">
      {gender.gender !== "" ? (
        <HStack spacing={2}>
          {gender.gender === "male" ? (
            <Icon boxSize="200" as={FaMale} />
          ) : (
            <Icon boxSize="200" as={FaFemale} />
          )}
          <Text>
            You&apos;re Probably{" "}
            {gender.probability ? gender.probability * 100 : null} a ...{" "}
            {gender.gender}
          </Text>
        </HStack>
      ) : (
        <></>
      )}
    </Flex>
  );
};

export default Bio;
