"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

type ProviderProps = {
  children: React.ReactNode;
};
export function Providers(props: ProviderProps) {
  return (
    <CacheProvider>
      <ChakraProvider>{props.children}</ChakraProvider>
    </CacheProvider>
  );
}
