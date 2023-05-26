"use client";

import { tailwindTheme } from "@/components/tailwindTheme";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

type ProviderProps = {
  children: React.ReactNode;
};
export function Providers(props: ProviderProps) {
  return (
    <CacheProvider>
      <ChakraProvider theme={tailwindTheme}>{props.children}</ChakraProvider>
    </CacheProvider>
  );
}
