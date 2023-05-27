import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";

export const ContactSection = () => {
  return (
    <div
      className="mx-auto container border-gray-300 shadow-md shadow-slate rounded-md bg-white"
      style={{ borderWidth: "1px" }}
    >
      <form className="p-5 flex flex-col gap-6">
        <FormControl variant={"floating"}>
          <Input placeholder=" " type="text" id="name-full" name="name-full" />
          <FormLabel bg={"white"}>Nombre</FormLabel>
        </FormControl>
        <FormControl variant={"floating"}>
          <Input placeholder=" " type="email" id="email" name="email" />
          <FormLabel bg={"white"}>Correo</FormLabel>
        </FormControl>
        <FormControl variant={"floating"}>
          <Textarea placeholder=" " id="message" name="message" />
          <FormLabel bg={"white"}>Mensaje</FormLabel>
        </FormControl>
        <button className="inline-block w-full bg-red-950 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out rounded-md">
          Send
        </button>
      </form>
    </div>
  );
};
