import { Heading } from "@chakra-ui/react";

export const HomeSection = () => {
  return (
    <div>
      <div className="bg-gradient-to-t from-[#f5f5f5] to-white mt-2">
        <div className="container mx-auto py-24 ">
          <div className="text-center">
            <Heading as={"h1"}>Hi!</Heading>
            <Heading as={"h1"}>I'm Adrian</Heading>
            <Heading fontSize={"12px"} fontWeight={"light"} color={"grey"}>
              {"<"}Web Developer /{">"}
            </Heading>
          </div>
        </div>
      </div>
    </div>
  );
};
