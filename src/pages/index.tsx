import {
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";

import Bio from "components/Bio";
import { GenderType } from "types";

const Home = () => {
  const [gender, setGender] = useState<GenderType>({
    name: "",
    gender: "",
    probability: 0,
    count: 0,
  });
  const [input, setInput] = useState("");

  const handleSubmit = async () => {
    if (input !== "" && input !== null) {
      const res = await fetch(`https://api.genderize.io/?name=${input}`);
      const resp: GenderType = await res.json();
      setGender(resp);
    }
  };

  return (
    <Box mb={8} w="full">
      <Head>
        <title>Gender Guess</title>
      </Head>
      <FormControl id="person_name">
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <FormHelperText>Enter Your First/Last Name Here</FormHelperText>
        <Button mt={4} type="submit" variant="solid" onClick={handleSubmit}>
          Check!
        </Button>
      </FormControl>
      <Bio gender={gender} />
    </Box>
  );
};

export default Home;
